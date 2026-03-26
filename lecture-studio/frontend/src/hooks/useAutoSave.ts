import { useEffect } from 'react';
import { useProjectStore } from '../stores/projectStore';

export const useAutoSave = () => {
  const project = useProjectStore((s) => s.project);
  const isDirty = useProjectStore((s) => s.isDirty);
  const saveProject = useProjectStore((s) => s.saveProject);

  useEffect(() => {
    if (!isDirty || !project) return;
    const timer = setTimeout(() => {
      saveProject().catch(console.error);
    }, 2000);
    return () => clearTimeout(timer);
  }, [project, isDirty, saveProject]);
};
