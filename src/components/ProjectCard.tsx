export default function ProjectCard({ title, location, impact, price }) {
  return (
    <div className="border rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-green-700 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{location}</p>
      <p className="text-sm text-gray-700 mb-1">🌱 Est. Offset: <span className="font-medium">{impact} tons CO₂</span></p>
      <p className="text-sm text-gray-700 mb-4">💸 Min. Contribution: ${price}</p>
      <button className="text-white bg-green-600 hover:bg-green-700 text-sm px-4 py-2 rounded-md">
        Fund Project
      </button>
    </div>
  );
}
