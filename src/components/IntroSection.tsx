import { motion } from 'framer-motion';
import { Leaf, Repeat } from 'lucide-react';

function DownArrow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-5 h-5 text-green-400"
    >
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  );
}

export default function IntroSection() {
  return (
    <div className="relative w-full min-h-[85vh] bg-gradient-to-b from-green-100 to-green-50 flex items-center justify-center px-6 sm:px-16 z-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 z-10">
        {/* LEFT: Visual Stack */}
        <div className="relative w-full flex justify-center order-1 md:order-none">
          <div className="flex flex-col items-center space-y-6 relative scale-110 text-center">
            {/* Layer 1: Floating Impact Credit */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center text-white shadow-lg z-10"
            >
              <Leaf className="w-7 h-7" />
            </motion.div>
            <p className="text-xs text-gray-500">Your Impact Credit</p>

            <DownArrow />

            {/* Layer 2: Project Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="w-56 h-40 bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center border border-gray-200"
            >
              <p className="text-sm font-medium text-green-800">Example Project</p>
              <p className="text-xs text-gray-600 mt-1">Placeholder image and name</p>
              <p className="text-[10px] text-gray-400 mt-2 italic">
                Visual example only — not a verified listing
              </p>
            </motion.div>
            <p className="text-xs text-gray-500 mt-1">Project your credit helps fund</p>

            <DownArrow />

            {/* Layer 3: Reuse Cycle Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-3 rounded-full bg-green-100 shadow-sm"
            >
              <Repeat className="w-9 h-9 text-green-600" />
            </motion.div>
            <p className="text-xs text-gray-500 mt-1">Credits reused in new funding cycles</p>
          </div>
        </div>

        {/* RIGHT: Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 text-center md:text-left"
        >
          <p className="uppercase text-sm text-green-600 tracking-wide font-medium">
            What Is CarbonYield?
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-green-800 leading-tight">
            Where Climate Support Doesn’t End — It Regenerates
          </h2>
          <p className="text-gray-700 text-lg font-inter max-w-md mx-auto md:mx-0">
            You fund real climate projects — and stay part of the story long after. With Impact Credits, your support echoes into future cycles. You’re not just offsetting — you’re helping shape what happens next.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
