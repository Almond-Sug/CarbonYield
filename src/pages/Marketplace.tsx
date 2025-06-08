import { useEffect, useState } from "react";
import { getProjects } from "../firestore";

export default function Marketplace() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 space-y-10">
      <h1 className="text-4xl font-extrabold text-green-700 text-center mb-8">
        Symbolically Support Verified Carbon Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border p-6 rounded-xl bg-white shadow space-y-4">
            <h2 className="text-xl font-bold text-green-800">{project.name}</h2>

            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Verified:</strong> {project.verified ? "Yes" : "No"}</li>
              <li><strong>Offset Estimate:</strong> {project.tonsEstimated} tons CO₂</li>
              <li><strong>Last Resale:</strong> {project.lastResale ?? "N/A"}</li>
            </ul>

            {project.funded ? (
              <button className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed">
                Already Supported
              </button>
            ) : (
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                Symbolically Support
              </button>
            )}

            <p className="text-xs text-gray-500 italic">
              Your contribution funds this project's verified carbon offset generation. Symbolic credits will be issued once resale occurs.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
