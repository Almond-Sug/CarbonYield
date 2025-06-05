import { useState } from 'react';

export default function ImpactEstimator() {
  const [amount, setAmount] = useState(25);

  const tonsOffset = amount * 0.064; // Example: $1 = 0.064 tons offset
  const symbolicCredits = amount * 1.5; // Example: $1 = 1.5 credits

  return (
    <div className="bg-white border p-6 rounded-xl shadow max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold text-green-700">🌿 Estimate Your Symbolic Impact</h2>

      <div className="flex items-center space-x-4">
        <label className="text-sm font-semibold text-gray-700">Contribution ($):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border border-gray-300 rounded-md px-2 py-1 w-24"
        />
      </div>

      <div className="text-sm text-green-800 space-y-1">
        <p>CO₂ Offset: <strong>{tonsOffset.toFixed(2)}</strong> tons</p>
        <p>Symbolic Credits: <strong>{symbolicCredits.toFixed(1)}</strong> pts</p>
      </div>

      <p className="text-xs text-gray-500 italic">
        These are estimates only. Symbolic credits have no monetary value, but may be used to re-fund future projects.
      </p>
    </div>
  );
}
