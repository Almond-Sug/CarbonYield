const projects = [
  {
    id: 1,
    name: 'Rainforest Regeneration - Brazil',
    certification: 'Verra',
    offsetCapacity: 120,
    resaleDate: 'Q3 2025',
    lastResale: 'May 2025',
    funded: true,
  },
  {
    id: 2,
    name: 'Urban Solar Co-Op - Kenya',
    certification: 'Gold Standard',
    offsetCapacity: 80,
    resaleDate: 'TBD',
    lastResale: 'April 2025',
    funded: false,
  },
];

export default function Marketplace() {
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
              <li><strong>Certification:</strong> {project.certification}</li>
              <li><strong>Offset Potential:</strong> {project.offsetCapacity} tons CO₂</li>
              <li><strong>Last Resale:</strong> {project.lastResale}</li>
              <li><strong>Next Expected Resale:</strong> {project.resaleDate}</li>
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
