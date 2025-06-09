import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Mar', credits: 12, co2: 0.8 },
  { date: 'Apr', credits: 24, co2: 1.6 },
  { date: 'May', credits: 42, co2: 3.2 },
];

export default function ImpactOverview() {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-green-700 text-center">📊 Your Symbolic Impact Over Time</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis label={{ value: 'Credits', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Line type="monotone" dataKey="credits" stroke="#16a34a" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      <p className="text-xs text-gray-500 italic text-center">
        This chart reflects symbolic credits earned through project resale events. No financial value is associated.
      </p>
    </div>
  );
}
