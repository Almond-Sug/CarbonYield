import { Leaf, Repeat, Award } from 'lucide-react'; // lightweight icons

export default function MissionSection() {
  const stats = [
    {
      label: 'Pilot Projects Verified',
      value: '3 (Verra certified)',
      icon: <Leaf className="w-8 h-8 text-green-600" />,
    },
    {
      label: 'Symbolic Credit Loop',
      value: 'Launching Q4 2025',
      icon: <Repeat className="w-8 h-8 text-green-600" />,
    },
    {
      label: 'Symbolic Credits Reissued ',
      value: 'After resale, new credits issued for future symbolic support',
      icon: <Award className="w-8 h-8 text-green-600" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-28 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 font-dm-sans tracking-tight">
          Built for Trust. Designed for Ethical Impact.
        </h2>

        {/* Subheadline */}
        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto font-inter">
          CarbonYield lets you support verified carbon projects, track resale activity, and guide where climate support flows next — all transparently and without financial speculation.
        </p>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
          {stats.map(({ label, value, icon }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 space-y-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {icon}
              <div className="text-xl sm:text-2xl font-bold text-green-700">{value}</div>
              <div className="text-sm text-gray-600 font-inter">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
