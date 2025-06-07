const regions = [
  {
    name: 'Amazon Rainforest',
    projects: [
      { name: 'All Projects', co2PerDollar: 0.08, creditsPerDollar: 1.7 },
      { name: 'Reforest 15k Acres', co2PerDollar: 0.09, creditsPerDollar: 1.8 },
      { name: 'Protect Jaguar Corridor', co2PerDollar: 0.075, creditsPerDollar: 1.6 },
    ],
  },
  {
    name: 'Midwest Grasslands',
    projects: [
      { name: 'All Projects', co2PerDollar: 0.06, creditsPerDollar: 1.4 },
      { name: 'Prairie Revival', co2PerDollar: 0.065, creditsPerDollar: 1.5 },
    ],
  },
  {
    name: 'Nairobi Urban Zone',
    projects: [
      { name: 'All Projects', co2PerDollar: 0.045, creditsPerDollar: 1.1 },
      { name: 'Clean Cookstove Program', co2PerDollar: 0.05, creditsPerDollar: 1.2 },
    ],
  },
];

import { useState } from 'react';

export default function ImpactEstimator() {
  const [amount, setAmount] = useState(25);
  const [regionIndex, setRegionIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);

  const region = regions[regionIndex];
  const project = region.projects[projectIndex];
  const tonsOffset = amount * project.co2PerDollar;
  const symbolicCredits = amount * project.creditsPerDollar;

  // When region changes, reset project selection
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value);
    setRegionIndex(index);
    setProjectIndex(0); // Reset to "All Projects"
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-green-700">🌿 Estimate Your Symbolic Impact</h2>

      {/* Region Selector */}
      <div className="flex items-center space-x-4">
        <label className="text-sm font-semibold text-gray-700">Region:</label>
        <select
          value={regionIndex}
          onChange={handleRegionChange}
          className="border border-gray-300 rounded-md px-2 py-1 w-full"
        >
          {regions.map((r, idx) => (
            <option key={idx} value={idx}>
              {r.name}
            </option>
          ))}
        </select>
      </div>

      {/* Project Selector */}
      <div className="flex items-center space-x-4">
        <label className="text-sm font-semibold text-gray-700">Project:</label>
        <select
          value={projectIndex}
          onChange={(e) => setProjectIndex(Number(e.target.value))}
          className="border border-gray-300 rounded-md px-2 py-1 w-full"
        >
          {region.projects.map((p, idx) => (
            <option key={idx} value={idx}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      {/* Donation Input */}
      <div className="flex items-center space-x-4">
        <label className="text-sm font-semibold text-gray-700">Contribution ($):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border border-gray-300 rounded-md px-2 py-1 w-24"
        />
      </div>

      {/* Output */}
      <div className="text-sm text-green-800 space-y-1">
        <p>
          In <strong>{region.name}</strong>, funding <strong>{project.name}</strong> gives you:
        </p>
        <p>CO₂ Offset: <strong>{tonsOffset.toFixed(2)}</strong> tons</p>
        <p>Symbolic Credits: <strong>{symbolicCredits.toFixed(1)}</strong> pts</p>
      </div>

      <p className="text-xs text-gray-500 italic">
        These are symbolic estimates based on past project performance. Credits have no monetary value but may support future reinvestment.
      </p>
    </div>
  );
}
