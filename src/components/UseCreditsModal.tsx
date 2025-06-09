// Fully dynamic UseCreditsModal.tsx with live Firestore project data
import { useEffect, useState } from "react";
import { useProjects } from "../hooks/useProjects";

interface Props {
  symbolicCredits: number;
  onClose: () => void;
  onRedeem: (amount: number, projectId: string) => void;
}

export default function UseCreditsModal({ symbolicCredits, onClose, onRedeem }: Props) {
  const { projects, loading } = useProjects();
  const [selectedAmount, setSelectedAmount] = useState(5);
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    if (!loading && projects.length > 0) {
      setSelectedProject(projects[0].id); // default to first project
    }
  }, [loading, projects]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl space-y-4">
        <h2 className="text-lg font-semibold text-green-800">🎯 Use Symbolic Credits</h2>

        <p className="text-sm text-gray-600">
          You have <strong>{symbolicCredits} pts</strong>. Enter how many you want to redeem:
        </p>

        <input
          type="number"
          min={1}
          max={symbolicCredits}
          value={selectedAmount}
          onChange={(e) => setSelectedAmount(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md p-2"
        />

        <select
          className="w-full border border-gray-300 rounded-md p-2"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>

        <div className="flex gap-2 justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 rounded-md text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (selectedAmount > symbolicCredits) {
                alert("You don’t have enough credits.");
              } else {
                onRedeem(selectedAmount, selectedProject);
              }
            }}
            disabled={
              selectedAmount > symbolicCredits ||
              selectedAmount < 1 ||
              !selectedProject
            }
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
          >
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
}
