import { motion } from 'framer-motion';
import { HandCoins, Medal, Target, Landmark, RefreshCcw } from 'lucide-react';

export default function Step0Section() {
  const steps = [
    { icon: HandCoins, label: 'Contribute', tooltip: 'You fund real climate projects through CarbonYield.' },
    { icon: Medal, label: 'Receive Credits', tooltip: 'You receive Impact Credits — visible markers of support.' },
    { icon: Target, label: 'Assign Impact', tooltip: 'You guide which project categories matter most to you.' },
    { icon: Landmark, label: 'Projects Funded', tooltip: 'CarbonYield selects and funds trusted projects by category.' },
    { icon: RefreshCcw, label: 'Credits Regenerate', tooltip: 'Resale proceeds regenerate new credits for future impact.' },
  ];

  return (
    <div
      id="step-0"
      className="relative w-full h-screen bg-gradient-to-b from-green-50 to-white flex flex-col justify-center items-center px-6 sm:px-16 text-center"
    >
      {/* Label */}
      <p className="uppercase text-sm text-green-600 tracking-wide font-medium mb-2">
        The Impact Cycle
      </p>

      {/* Headline */}
      <h2 className="text-4xl sm:text-5xl font-bold text-green-800 leading-tight mb-4">
        A Climate Loop That Lasts
      </h2>

      {/* Core Copy */}
      <div className="max-w-2xl space-y-3">
        <p className="text-gray-700 text-base sm:text-lg font-inter">
          Your contribution doesn’t end. It regenerates.
        </p>
        <p className="text-gray-600 text-sm sm:text-base font-inter">
          You help fund trusted climate projects. Later, resale proceeds regenerate credits — putting your influence back in motion. It’s not a one-time act. It’s a living cycle.
        </p>
      </div>

      {/* Icon Loop */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-6 sm:gap-10 max-w-4xl">
        {steps.map(({ icon: Icon, label, tooltip }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
            className="group relative flex flex-col items-center text-center cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 shadow-md">
              <Icon className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-green-800 mt-2">{label}</p>
            <div className="absolute bottom-[-60px] w-44 text-xs text-gray-600 px-2 py-1 rounded-md bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {tooltip} 
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 text-green-700 text-sm font-medium animate-bounce"
      >
        Scroll to Begin ↓
      </motion.div>
    </div>
  );
}
