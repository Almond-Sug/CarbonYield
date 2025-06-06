import { Leaf, Repeat, Award } from 'lucide-react'; // lightweight icons

export default function MissionSection() {
  const stats = [
    {
      label: 'Pilot Projects Verified',
      value: '3 (Verra certified)',
      icon: <Leaf className="w-8 h-8 text-green-600" />,
    },
    {
      label: 'Symbolic Reinvestment Model',
      value: 'Launching Q4 2025',
      icon: <Repeat className="w-8 h-8 text-green-600" />,
    },
    {
      label: 'Impact Points Earned',
      value: 'Coming with first resales',
      icon: <Award className="w-8 h-8 text-green-600" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-28 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 font-dm-sans tracking-tight">
          A Transparent Mission — For Symbolic Impact
        </h2>

        {/* Subheadline */}
        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto font-inter">
          CarbonYield is building a reinvestment loop that lets supporters fund verified carbon
          projects, track resale activity, and symbolically fuel future initiatives — all with 
          no greenwashing and full transparency.
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
