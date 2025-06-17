import { motion } from 'framer-motion';
import {
  HandCoins,
  Medal,
  Target,
  Landmark,
  RefreshCcw,
} from 'lucide-react';

const steps = [
  {
    icon: HandCoins,
    title: 'Contribute',
    desc: 'You support real, verified climate projects through CarbonYield.',
  },
  {
    icon: Medal,
    title: 'Receive Impact Credits',
    desc: 'You get visual recognition and future influence — not financial assets.',
  },
  {
    icon: Target,
    title: 'Assign Credits',
    desc: 'Signal which climate priorities matter most to you — like reforestation or clean energy.',
  },
  {
    icon: Landmark,
    title: 'Projects Get Funded',
    desc: 'We fund trusted projects in each category based on user guidance — never individual selection.',
  },
  {
    icon: RefreshCcw,
    title: 'The Cycle Continues',
    desc: 'Resale proceeds regenerate new credits — so your support keeps going.',
  },
];

export default function SolutionCycleIntro() {
  return (
    <section className="relative w-full min-h-[85vh] bg-gradient-to-b from-green-50 to-white px-6 sm:px-12 flex flex-col justify-center items-center text-center py-20 space-y-12">
      {/* Title + Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
          The CarbonYield Impact Cycle
        </h2>
        <p className="text-gray-700 text-base sm:text-lg font-inter">
          Your Contribution Doesn’t End. It Regenerates.
        </p>
        <p className="text-gray-600 text-sm sm:text-base font-inter">
          You help fund trusted climate projects. Later, resale proceeds regenerate credits — putting your influence back in motion. It’s not a one-time act. It’s a living cycle.
        </p>
      </motion.div>

      {/* Step-by-Step Visual Flow */}
      <div className="max-w-5xl w-full flex flex-col space-y-10">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 text-left px-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Icon className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <h3 className="text-green-800 font-semibold text-base sm:text-lg">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Visual Loop Cue */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-6"
      >
        <button
          onClick={() => {
            const el = document.getElementById('step-1');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setTimeout(() => {
                window.scrollBy({ top: 100, behavior: 'smooth' }); // ensures inView gets triggered
              }, 700);
            }
          }}
          className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full shadow-sm border border-green-100 hover:bg-green-100 transition cursor-pointer"
        >
          <svg
            className="w-5 h-5 mr-2 animate-[spin_8s_linear_infinite]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 4v6h6M20 20v-6h-6M5.64 17.36A9 9 0 0 1 4 12m1.64-5.36A9 9 0 0 1 12 3m7 5v6h-6" />
          </svg>
          <span className="text-sm font-medium">And it keeps going…</span>
        </button>
      </motion.div>

    </section>
  );
}
