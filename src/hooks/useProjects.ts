import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export interface Project {
  id: string;
  name: string;
  tonsEstimated: number;
  verified?: boolean;
  lastResale?: string;
}


export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const snap = await getDocs(collection(db, "projects"));
      const list: Project[] = snap.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            name: data.name,
            tonsEstimated: Number(data.tonsEstimated ?? 0),
            verified: data.verified ?? false,
            lastResale: data.lastResale ?? null,
        };
      });
      setProjects(list);
      setLoading(false);
    }

    fetchProjects();
  }, []);

  return { projects, loading };
}
