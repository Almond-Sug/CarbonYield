type ImpactBadgesProps = {
  totalOffset: number;
  reinvestments: number;
};

export default function ImpactBadges({ totalOffset, reinvestments }: ImpactBadgesProps) {
  const hasFirstOffset = totalOffset > 0;
  const hasReinvested = reinvestments > 0;
  const hasOffset1Ton = totalOffset >= 1;
  const hasOffset10Tons = totalOffset >= 10;

  const badges = [
    { icon: '🌱', label: 'First Offset', unlocked: hasFirstOffset },
    { icon: '♻️', label: 'First Reinvestment', unlocked: hasReinvested },
    { icon: '🌍', label: '1 Ton CO₂', unlocked: hasOffset1Ton },
    { icon: '🌳', label: '10 Tons CO₂', unlocked: hasOffset10Tons },
  ];

  return (
    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm space-y-4 text-sm">
      <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2">
        🏅 Your Impact Badges
      </h2>
      <ul className="grid grid-cols-2 gap-4">
        {badges.map((badge, idx) => (
          <li
            key={idx}
            className={`flex items-center gap-2 p-2 rounded-md border ${
              badge.unlocked
                ? 'border-green-200 bg-green-50 text-green-800'
                : 'border-gray-200 bg-gray-50 text-gray-400'
            }`}
          >
            <span className="text-lg">{badge.icon}</span>
            <span className="text-sm font-medium">{badge.label}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500 italic">
        Earn badges by offsetting emissions or reinvesting symbolic credits.
      </p>
    </div>
  );
}
