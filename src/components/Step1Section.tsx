import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { HandCoins } from 'lucide-react';
import { useRef } from 'react';

export default function Step1Section({ isActive }: { isActive: boolean }) {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { amount: 0.3, once: true });

  const show = isActive || inView;

  // Optional scroll-based floating animation (currently unused)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const floatY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const floatYSpring = useSpring(floatY, { stiffness: 30, damping: 20 });

  const coinVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: {
      scale: 1.1,
      boxShadow: '0 0 20px rgba(132,204,22,0.4)',
    },
  };

  return (
    <div
      id="step-1"
      ref={containerRef}
      className="relative w-full h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-6 sm:px-16 overflow-hidden"
    >
      {/* CENTER GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-4 text-center md:text-left"
        >
          <p className="uppercase text-sm text-green-600 tracking-wide font-medium">
            Your first move
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold text-green-800 leading-tight">
            Start Your Impact
          </h2>

          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-1.5 rounded-md text-green-800 text-sm font-medium shadow-sm">
            <HandCoins className="w-4 h-4 text-green-600" />
            $128,490 pooled into verified climate projects
          </div>

          <p className="text-[11px] text-gray-400 italic mt-0.5">
            *For demonstration only. Figures represent a simulated total during MVP testing.
          </p>

          <p className="text-gray-700 text-lg font-inter max-w-md mx-auto md:mx-0">
            Make your first contribution — CarbonYield pools donations to support verified climate projects.
          </p>
        </motion.div>

        {/* RIGHT COIN VISUAL */}
        <div className="relative w-full h-[300px] flex items-center justify-center">
          <div className="relative w-[280px] h-[280px]">
            <div className="absolute inset-0 z-0 rounded-full bg-[radial-gradient(circle,_rgba(132,204,22,0.25)_0%,_transparent_70%)] blur-[80px]" />
            <div className="absolute inset-0 rounded-full border-2 border-green-500 origin-center animate-ripple pointer-events-none" />
            <motion.div
              className="absolute inset-0 bg-green-100 rounded-full blur-2xl opacity-50"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              ref={containerRef}
              variants={coinVariants}
              initial="hidden"
              animate={show ? 'visible' : 'hidden'}
              whileHover="hover"
              transition={{ type: 'spring', stiffness: 150, damping: 14 }}
              className="absolute z-[90] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-16 h-16 rounded-full cursor-pointer flex items-center justify-center"
            >
              <div
                className="w-full h-full rounded-full bg-green-600 flex items-center justify-center text-white shadow-2xl"
                aria-label="Symbolic Impact Token"
              >
                <HandCoins className="w-7 h-7" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLL CUE */}
      <motion.div
        className="absolute bottom-6 text-green-700 text-sm font-medium animate-bounce z-30"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2 }}
      >
        Scroll to continue ↓
      </motion.div>
    </div>
  );
}
