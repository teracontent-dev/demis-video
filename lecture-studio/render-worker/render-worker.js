const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// CLI args: node render-worker.js <project-json-path> <output-dir> <fps> <preset>
const [,, projectJsonPath, outputDir, fpsArg, presetArg] = process.argv;

if (!projectJsonPath || !outputDir) {
  console.error(JSON.stringify({ error: 'Usage: node render-worker.js <project.json> <output-dir> [fps] [preset]' }));
  process.exit(1);
}

const fps = parseInt(fpsArg) || 30;
const preset = presetArg || 'standard';

const PRESETS = {
  draft: { width: 1280, height: 720, scale: 1 },
  standard: { width: 1920, height: 1080, scale: 1 },
  high: { width: 1920, height: 1080, scale: 1 },
  ultra: { width: 3840, height: 2160, scale: 2 },
};

async function render() {
  const config = PRESETS[preset] || PRESETS.standard;

  // Read project JSON
  const projectData = JSON.parse(fs.readFileSync(projectJsonPath, 'utf-8'));
  const slides = projectData.slides || [];
  const totalDuration = slides.reduce((sum, s) => sum + (s.duration || 5000), 0);
  const totalFrames = Math.ceil((totalDuration / 1000) * fps);

  // Create output directory
  fs.mkdirSync(outputDir, { recursive: true });

  // Report start
  console.log(JSON.stringify({
    phase: 'starting',
    totalFrames,
    totalDuration,
    fps,
    preset,
    resolution: `${config.width}x${config.height}`,
  }));

  // Find slide-engine path
  const enginePath = path.resolve(__dirname, '..', 'slide-engine', 'index.html');
  if (!fs.existsSync(enginePath)) {
    console.error(JSON.stringify({ error: `Slide engine not found at ${enginePath}` }));
    process.exit(1);
  }

  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      `--window-size=${config.width},${config.height}`,
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=none',
      '--disable-lcd-text',
      '--disable-gpu-compositing',
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: config.width,
    height: config.height,
    deviceScaleFactor: config.scale,
  });

  // Load slide engine
  await page.goto(`file://${enginePath}`, { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);

  // Load project data into engine
  await page.evaluate((data) => {
    window.slideEngine.loadProject(data);
  }, projectData);

  // Wait a frame for initial render
  await page.evaluate(() => new Promise(r => requestAnimationFrame(r)));

  // Capture frames
  const frameDuration = 1000 / fps;
  let capturedFrames = 0;

  for (let frame = 0; frame < totalFrames; frame++) {
    const timeMs = frame * frameDuration;

    // Call renderFrame and wait for it
    await page.evaluate(async (t) => {
      await window.renderFrame(t);
    }, timeMs);

    // Wait for paint
    await page.evaluate(() => new Promise(r => requestAnimationFrame(r)));

    // Screenshot
    const frameNum = String(frame).padStart(6, '0');
    const framePath = path.join(outputDir, `frame_${frameNum}.png`);
    await page.screenshot({
      path: framePath,
      type: 'png',
      clip: { x: 0, y: 0, width: config.width, height: config.height },
    });

    capturedFrames++;

    // Report progress every 10 frames
    if (frame % 10 === 0 || frame === totalFrames - 1) {
      const percent = Math.round((capturedFrames / totalFrames) * 100);
      console.log(JSON.stringify({
        phase: 'capturing',
        frame: capturedFrames,
        totalFrames,
        percent,
        timeMs: Math.round(timeMs),
      }));
    }
  }

  await browser.close();

  console.log(JSON.stringify({
    phase: 'capture_complete',
    totalFrames: capturedFrames,
    outputDir,
  }));
}

render().catch((err) => {
  console.error(JSON.stringify({ error: err.message, stack: err.stack }));
  process.exit(1);
});
