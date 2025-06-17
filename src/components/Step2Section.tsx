import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Step2Section() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-gradient-to-b from-white to-green-50 flex items-center justify-center px-6 sm:px-16 overflow-hidden"
    >
      {/* Symbolic background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(132,204,22,0.06)_0%,_transparent_80%)] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 z-10">

        {/* LEFT: Symbolic Credit Token */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full flex justify-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 4px 15px rgba(132, 204, 22, 0.15)',
                '0 6px 20px rgba(132, 204, 22, 0.3)',
                '0 4px 15px rgba(132, 204, 22, 0.15)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-[300px] h-[180px] bg-white border border-green-200 rounded-2xl shadow-xl p-6 flex flex-col justify-between"
          >
            {/* Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-[radial-gradient(circle,_rgba(132,204,22,0.2)_0%,_transparent_70%)] blur-[40px] z-0" />

            <div className="relative z-10 flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-semibold text-green-600 tracking-widest uppercase">
                <span>Impact Credit</span>
                <span className="text-green-700">Issued</span>
              </div>
              <div className="text-5xl font-bold text-green-800">50</div>
              <div className="text-[11px] text-gray-500 leading-snug">
                Symbolic acknowledgment for your climate contribution.<br />
                Reusable after project resale — no financial value.
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <p className="uppercase text-sm text-green-600 tracking-wide font-medium">
            Credits Issued
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
            <h2 className="text-3xl sm:text-5xl font-bold text-green-800 leading-tight">
              Impact Credits
            </h2>
            <div
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <Info className="w-5 h-5 text-gray-500 hover:text-green-600 cursor-pointer" />
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-8 left-0 bg-white border border-gray-200 shadow-md text-xs p-3 rounded-md w-64 text-left z-50"
                  >
                    Impact Credits are symbolic acknowledgments only — not tokens, securities, or financial instruments. They cannot be redeemed, sold, or traded.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="w-full text-lg font-normal text-gray-700 mt-1">
              You receive symbolic Impact Credits as recognition for your contribution.
            </div>
          </div>

          <p className="text-gray-700 text-lg font-inter max-w-md mx-auto md:mx-0">
            These fixed-value credits don’t hold monetary value — but they give you a voice in where our platform sends support. Once a project resells credits, we reissue yours so your impact continues.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
