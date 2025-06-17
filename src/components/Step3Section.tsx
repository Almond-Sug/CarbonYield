import { motion, useInView } from 'framer-motion';
import { Info, Target } from 'lucide-react';
import { useRef, useState } from 'react';

/** Build a tidy, non-overlapping token stream */
const tokenSize = 17;        // px  (w-7,h-7)
const gap       = 3;         // px  (clearance)
const spacing   = tokenSize + gap;   // 34 px → no overlap

const makeTokenStream = (count = 8) =>
  Array.from({ length: count }, (_, i) => {
    const centeredIndex = i - (count - 1) / 2;
    const baseY  = centeredIndex * spacing;
    const jitter = (Math.random() - 0.5) * (gap - 2); // ±2 px max
    return {
      id: i,
      y: baseY + jitter,
      delay: Math.random() * 1.5,
    };
  });


export default function Step3Section() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [tip, setTip] = useState(false);
  const tokens = makeTokenStream(8);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-6 sm:px-16 overflow-hidden"
    >
      {/* ───── TOKEN STREAM ───── */}
      {isInView && (
        <div className="absolute top-1/2 left-[45vw] -translate-y-1/2 z-0 pointer-events-none">
          {tokens.map((t) => (
            <motion.div
              key={t.id}
              className="absolute w-7 h-7 rounded-full bg-green-600 text-white text-[0.65rem] font-bold flex items-center justify-center shadow-md"
              initial={{ x: 0, y: t.y, opacity: 0 }}
              animate={{ x: '30vw', opacity: 1 }}
              transition={{
                delay: t.delay,
                duration: 3.5,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            >
              IC
            </motion.div>
          ))}
        </div>
      )}

      {/* ───── MAIN CONTENT ───── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 z-10">
        {/* LEFT: narrative copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <p className="uppercase text-sm text-green-600 font-medium tracking-wide">
            Symbolic Voting
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
            <h2 className="text-3xl sm:text-5xl font-bold text-green-800 leading-tight">
              You Guide Future Impact
            </h2>
            <div
              className="relative"
              onMouseEnter={() => setTip(true)}
              onMouseLeave={() => setTip(false)}
            >
              <Info className="w-5 h-5 text-gray-500 hover:text-green-600 cursor-pointer" />
              {tip && (
                <div className="absolute top-8 left-0 z-50 w-64 text-xs text-left bg-white border border-gray-200 rounded-md shadow-md p-3">
                  Symbolic voting lets you guide where your credits go — but does
                  not determine funding directly. CarbonYield makes final
                  allocations for maximum impact.
                </div>
              )}
            </div>
            <p className="w-full mt-1 text-lg text-gray-700">
              Assign your credits to projects you care about — helping shape how support is distributed.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: project card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative w-full flex justify-center"
        >
          <div className="relative w-[380px] p-8 space-y-3 bg-white border border-green-200 rounded-xl shadow-xl overflow-hidden z-10">
            {/* subtle glow */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-[radial-gradient(circle,_rgba(132,204,22,0.12)_0%,_transparent_70%)] blur-[80px] z-0"
              animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* card body */}
            <h3 className="relative z-10 text-lg font-bold text-green-800 leading-snug">
              Iceland Carbon Injection Pilot
            </h3>
            <p className="relative z-10 text-sm text-gray-700">
              Injects captured CO₂ into basalt rock formations underground.
            </p>
            <div className="relative z-10 text-xs text-gray-500">
              Europe · Carbon Capture Project
            </div>
            <div className="relative z-10 inline-block mt-2 px-3 py-1 text-sm font-medium text-green-700 bg-green-50 rounded-md">
              Est. 10 000 t CO₂ stored / yr
            </div>

            {/* right badge (darker + icon) */}
            <span className="px-2 py-0.5 min-w-[88px]        /* a tad wider for icon */
                        text-xs font-medium
                        text-green-800 bg-green-200         /* darker tint */
                        rounded-full flex items-center gap-1
                        justify-self-end">
            <Target className="w-3 h-3 shrink-0" />        {/* icon accent */}
            Pilot Phase
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
