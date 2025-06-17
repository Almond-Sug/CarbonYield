import {
  motion,
  AnimatePresence,
  useInView,
  useSpring,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ShieldCheck, Info } from 'lucide-react';
import { useRef, useState } from 'react';

/**
 * Stage 4 – Verified Impact in Action
 * Modern scroll-driven storyboard (no arrows): every ~25 % scroll swaps background.
 */

const slides = [
  {
    id: 1,
    src:
      'https://images.unsplash.com/photo-1587307307761-29e4ca17228d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Dense green rainforest canopy',
    projectName: 'Amazon Reforestation Pilot',
    location: 'Pará, Brazil • Forestry',
    verifiedBy: 'Verra',
    targetCo2: 120,
    description: 'Restores degraded rainforest and locks away CO₂ for decades.',
  },
  {
    id: 2,
    src:
      'https://images.unsplash.com/photo-1508385082359-f38e9d8a668f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Rows of solar panels in evening light',
    projectName: 'Community Solar Expansion',
    location: 'Texas, USA • Renewable',
    verifiedBy: 'Gold Standard',
    targetCo2: 95,
    description: 'Offsets local grid emissions with clean, affordable energy.',
  },
  {
    id: 3,
    src:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    alt: 'Blue ocean waves rolling',
    projectName: 'Marine Plastic Recovery',
    location: 'Java Sea, Indonesia • Oceans',
    verifiedBy: 'Verra',
    targetCo2: 60,
    description: 'Removes plastic waste while generating certified blue-carbon benefits.',
  },
  {
    id: 4,
    src:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1600&q=80',
    alt: 'Wind turbines on green Scottish hills',
    projectName: 'Highland Wind Repower',
    location: 'Scotland, UK • Renewable',
    verifiedBy: 'Gold Standard',
    targetCo2: 110,
    description: 'Upgrades aging turbines to increase clean-energy output.',
  },
];

export default function Step4Section() {
  const ref = useRef<HTMLDivElement>(null);

  /* Scroll progress inside this pinned 100vh section */
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const activeIndexMotion = useTransform(scrollYProgress, (p) =>
    Math.min(slides.length - 1, Math.floor(p * slides.length)),
  );

  const [index, setIndex] = useState(0);
  useMotionValueEvent(activeIndexMotion, 'change', (latest) => {
    setIndex(latest as number);
  });

  const slide = slides[index];

  /* Animated counter tied to slide */
  const co2Spring = useSpring(slide.targetCo2, { stiffness: 60, damping: 15 });
  const [displayCO2, setDisplayCO2] = useState(slide.targetCo2);
  useMotionValueEvent(co2Spring, 'change', (v) => setDisplayCO2(Math.round(v as number)));

  /* Tooltip state */
  const [showTip, setShowTip] = useState(false);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden text-white"
    >
      {/* Full-bleed slide media */}
      <AnimatePresence initial={false} custom={index}>
        <motion.img
          key={slide.id}
          src={slide.src}
          alt={slide.alt}
          custom={index}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      {/* centered overlay text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center space-y-6 pointer-events-none">
        <h2 className="text-4xl sm:text-6xl font-bold font-dm-sans drop-shadow-lg">
          Verified Impact in Action
        </h2>
        <p className="max-w-xl text-lg sm:text-xl font-inter text-white/90 drop-shadow">
          Every pooled dollar backs projects vetted by Verra or Gold Standard. You watch the
          impact; we handle the paperwork.
        </p>
      </div>

      {/* bottom metrics strip */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-0 left-0 z-20 w-full bg-white/80 backdrop-blur py-4 px-6 sm:px-12 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-green-900"
      >
        {/* stamp + project title + location */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              Verified by {slide.verifiedBy}
            </span>
            <span className="text-sm font-medium text-gray-800 truncate">
              {slide.projectName}
            </span>
            <span className="text-xs text-gray-600 hidden sm:inline">
              • {slide.location}
            </span>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-600 mt-1 line-clamp-2">
            {slide.description}
          </p>
        </div>

        {/* progress bar + counter */}
        <div className="flex items-center gap-3 w-full sm:w-auto max-w-md sm:max-w-xs">
          <div className="relative w-full h-2 bg-green-100 rounded-full overflow-hidden flex-1">
            <motion.div
              key={slide.id}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="h-full bg-green-600"
            />
          </div>
          <span className="whitespace-nowrap text-sm font-semibold">
            {displayCO2} t CO₂e
          </span>
        </div>

        {/* tooltip trigger */}
        <button
          aria-label="Symbolic credits — learn more"
          onMouseEnter={() => setShowTip(true)}
          onFocus={() => setShowTip(true)}
          onMouseLeave={() => setShowTip(false)}
          onBlur={() => setShowTip(false)}
          className="relative text-green-800 focus:outline-none"
        >
          <Info className="w-4 h-4" />
          <AnimatePresence>
            {showTip && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-6 right-0 sm:left-1/2 sm:-translate-x-1/2 bg-white shadow-lg rounded-md px-3 py-2 text-[11px] leading-snug text-gray-700 w-60 z-30"
              >
                Impact Credits have no monetary value. CarbonYield retains and reinvests resale
                proceeds to fund the next cycle.
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* legal footnote */}
      <p className="absolute bottom-2 w-full text-center text-[10px] sm:text-xs text-white/70 hover:text-white/90 transition-opacity duration-200 px-2">
        Symbolic, non-financial credits · Funds remain in CarbonYield’s pool.
      </p>
    </section>
  );
}