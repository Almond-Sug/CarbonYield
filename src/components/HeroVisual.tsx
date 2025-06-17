import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { Sprout, Lightbulb, Truck, Globe, RotateCcw } from 'lucide-react';

const icons = [Sprout, Lightbulb, Truck, Globe, RotateCcw];
const radius = 140;
const iconSize = 40;
const duration = 36;

export default function HeroVisual() {
  const theta = useMotionValue(0);

  useEffect(() => {
    const controls = animate(theta, 2 * Math.PI, {
      duration,
      repeat: Infinity,
      ease: 'linear',
    });
    return () => controls.stop();
  }, [theta]);

  return (
    <div className="relative w-[320px] h-[320px] mx-auto flex items-center justify-center">

      {/* Pulsing Rings */}
      <motion.div
        initial={{ scale: 1, opacity: 0.4 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeOut',
        }}
        className="absolute w-24 h-24 rounded-full border border-green-400 pointer-events-none z-0"
      />

      {/* Soft Aura Glow Behind Orb */}
      <div className="absolute w-[280px] h-[280px] rounded-full bg-green-100 opacity-10 blur-2xl z-0 pointer-events-none" />

      {/* Orbiting Icons */}
      {icons.map((Icon, i) => {
        const offset = (2 * Math.PI * i) / icons.length;
        const x = useTransform(theta, t =>
          (radius - iconSize / 2) * Math.cos(t + offset)
        );
        const y = useTransform(theta, t =>
          (radius - iconSize / 2) * Math.sin(t + offset)
        );

        return (
          <motion.div key={i} style={{ x, y }} className="absolute z-20">
            <div className="w-10 h-10 bg-white rounded-full shadow-md drop-shadow-sm flex items-center justify-center">
              <Icon className="w-5 h-5 text-green-700" />
            </div>
          </motion.div>
        );
      })}

      {/* Outer Ring (Static) */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-green-300 opacity-30 pointer-events-none z-10" />

      {/* Core Orb with Pulse */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
        className="w-24 h-24 rounded-full bg-white border border-green-500 drop-shadow-[0_0_18px_rgba(34,197,94,0.5)] z-10"
      />
    </div>
  );
}
