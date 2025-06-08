import { auth } from "../firebase";
import { submitContribution } from "../firestore";
import { useProjects } from "../hooks/useProjects";

export default function Marketplace() {
  const { projects, loading } = useProjects();

  if (loading) {
    return <div className="text-center text-gray-500 py-24">Loading projects...</div>;
  }

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
              <li><strong>Offset Estimate:</strong> {project.tonsEstimated ? `${project.tonsEstimated} tons CO₂` : "Not yet available"}</li>
              <li><strong>Last Resale:</strong> {project.lastResale ?? "N/A"}</li>
            </ul>

            <button
              onClick={async () => {
                const user = auth.currentUser;
                if (!user) {
                  alert("Please log in first.");
                  return;
                }

                const success = await submitContribution({
                  userId: user.uid,
                  projectId: project.id,
                  amount: 25, // hardcoded for now
                });

                if (success) {
                  alert("Thanks for supporting this project!");
                }
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Symbolically Support
            </button>

            <p className="text-xs text-gray-500 italic">
              Your contribution funds this project's verified carbon offset generation. Symbolic credits will be issued once resale occurs.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
