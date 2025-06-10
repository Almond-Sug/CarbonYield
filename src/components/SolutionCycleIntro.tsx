import { HandCoins, Medal, Target, Repeat } from 'lucide-react';

const steps = [
  {
    title: 'Donate',
    icon: HandCoins,
    tooltip: 'You support verified carbon projects.',
  },
  {
    title: 'Get Credits',
    icon: Medal,
    tooltip: 'You receive symbolic Impact Credits.',
  },
  {
    title: 'Guide Funding',
    icon: Target,
    tooltip: 'You assign credits to new projects.',
  },
  {
    title: 'Repeat Impact',
    icon: Repeat,
    tooltip: 'Credits are reused to fuel new support.',
  },
];

export default function SymbolicCycleIntro() {
  return (
    <section className="bg-white py-20 px-6 sm:px-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center mb-10">
        Your Symbolic Impact Cycle
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {steps.map(({ icon: Icon, title, tooltip }, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center justify-center space-y-3"
          >
            <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-md transition hover:scale-105">
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-green-700" />
            </div>
            <p className="text-sm sm:text-base font-semibold text-green-800">{title}</p>

            {/* Tooltip on hover (desktop only) */}
            <div className="absolute top-full mt-2 bg-white border border-gray-200 text-gray-600 text-xs p-2 rounded shadow-lg w-40 opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 hidden sm:block">
              {tooltip}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
