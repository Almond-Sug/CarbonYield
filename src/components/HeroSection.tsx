import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import HeroVisual from './HeroVisual';

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[90vh] bg-gradient-to-b from-white to-green-50 flex items-center justify-center px-6 sm:px-16 z-30 overflow-hidden">
      {/* Optional Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 z-10">
        {/* LEFT: Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <p className="uppercase text-sm text-green-600 tracking-wide font-medium">
            You guide what we fund. We keep your impact going.
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-green-800 leading-tight tracking-tight">
            Climate Action That Doesn’t Stop at the First Click
          </h1>
          <p className="text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
            CarbonYield turns one act of support into a lasting role — regenerating your influence across future climate action.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-xl text-lg font-medium shadow-lg transition"
            >
              Join Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT: Orbiting Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-green-600"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </div>
  );
}
