export default function ImpactBadges({ totalOffset, reinvestments }) {
  const hasFirstOffset = totalOffset > 0;
  const hasReinvested = reinvestments > 0;
  const hasOffset1Ton = totalOffset >= 1;
  const hasOffset10Tons = totalOffset >= 10;

  const badges = [
    { label: '🌱 First Offset', unlocked: hasFirstOffset },
    { label: '♻️ First Reinvestment', unlocked: hasReinvested },
    { label: '🌍 1 Ton CO₂', unlocked: hasOffset1Ton },
    { label: '🌳 10 Tons CO₂', unlocked: hasOffset10Tons },
  ];

  return (
    <div className="bg-white border p-6 rounded-xl shadow space-y-3">
      <h2 className="text-lg font-bold text-green-700">🏅 Your Impact Badges</h2>
      <ul className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        {badges.map((b, idx) => (
          <li key={idx} className={b.unlocked ? '' : 'opacity-40'}>
            {b.label}
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500 italic">Earn badges by offsetting emissions or reinvesting symbolic credits.</p>
    </div>
  );
}
