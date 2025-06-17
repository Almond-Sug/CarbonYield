import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import {
  HandCoins,
  Medal,
  Target,
  Landmark,
  RefreshCcw,
} from 'lucide-react';
import Step0Section from './Step0Section';
import Step1Section from './Step1Section';
import Step2Section from './Step2Section';
import Step3Section from './Step3Section';
import Step4Section from './Step4Section';

const stepsCount = 6; // Step 0 + Steps 1–5
const stepIcons = [HandCoins, Medal, Target, Landmark, RefreshCcw];

export default function HowItWorksSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const [activeStep, setActiveStep] = useState(0);
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, stepsCount - 1]);

  useMotionValueEvent(currentIndex, 'change', (v) => {
    setActiveStep(Math.round(v));
  });

  // Step 0: custom fade
  const step0Opacity = useTransform(scrollYProgress, [0, 0.15, 0.20], [1, 1, 0]);
  const step0Z = useTransform(scrollYProgress, [0, 0.19, 0.20], [30, 30, 0]);

  // Sidebar fade-in
  const sidebarOpacity = useTransform(scrollYProgress, [0.05, 0.10], [0, 1]);

  // Normalized step ranges for steps 1–5
  const stepRanges = [
    { i: 1, range: [0.210, 0.235, 0.352, 0.377] },
    { i: 2, range: [0.333, 0.358, 0.475, 0.500] },
    { i: 3, range: [0.500, 0.525, 0.642, 0.667] },
    { i: 4, range: [0.667, 0.692, 0.808, 0.833] },
    { i: 5, range: [0.833, 0.858, 0.975, 1.000] },
  ];

  const stepOpacity = (i: number) => {
    const match = stepRanges.find((s) => s.i === i);
    if (!match) return useTransform(scrollYProgress, [0, 0, 0], [0, 0, 0]);
    const [fadeIn, visibleStart, visibleEnd, fadeOut] = match.range;
    return useTransform(scrollYProgress, [fadeIn, visibleStart, visibleEnd, fadeOut], [0, 1, 1, 0]);
  };

  const stepZ = (i: number) => {
    const match = stepRanges.find((s) => s.i === i);
    if (!match) return useTransform(scrollYProgress, [0, 0], [0, 0]);
    const [fadeIn, , , fadeOut] = match.range;
    return useTransform(scrollYProgress, [fadeIn, fadeOut], [0, 20]);
  };

  return (
    <section ref={containerRef} className="relative w-full h-[700vh] bg-white">
      {/* Sidebar Icon Tracker */}
      <motion.div
        style={{ opacity: sidebarOpacity }}
        className="hidden md:flex flex-col items-start gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
      >
        {stepIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className={`transition-all duration-200 ${
              activeStep === i ? 'text-green-700 scale-110' : 'text-gray-300 scale-100'
            }`}
          >
            <Icon className="w-6 h-6 md:w-6 md:h-6" />
          </motion.div>
        ))}
      </motion.div>

      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* STEP 0 */}
        <motion.div
          style={{ opacity: step0Opacity, zIndex: step0Z }}
          className="absolute inset-0 overflow-hidden bg-gradient-to-b from-green-100 to-green-50"
        >
          <Step0Section />
        </motion.div>

        {/* STEP 1 */}
        <motion.div
          style={{
            opacity: stepOpacity(1),
            zIndex: stepZ(1),
            pointerEvents: activeStep === 1 ? 'auto' : 'none',
          }}
          className="absolute inset-0 overflow-hidden bg-gradient-to-b from-green-50 to-white"
        >
          <Step1Section isActive={activeStep === 1} />
        </motion.div>

        {/* STEP 2 */}
        <motion.div
          style={{
            opacity: stepOpacity(2),
            zIndex: stepZ(2),
            pointerEvents: activeStep === 2 ? 'auto' : 'none',
          }}
          className="absolute inset-0 overflow-hidden bg-gradient-to-b from-white to-green-50"
        >
          <Step2Section />
        </motion.div>

        {/* STEP 3 */}
        <motion.div
          style={{
            opacity: stepOpacity(3),
            zIndex: stepZ(3),
            pointerEvents: activeStep === 3 ? 'auto' : 'none',
          }}
          className="absolute inset-0 overflow-hidden bg-gradient-to-b from-green-50 to-white"
        >
          <Step3Section />
        </motion.div>

        {/* STEP 4 */}
        <motion.div
          style={{
            opacity: stepOpacity(4),
            zIndex: stepZ(4),
            pointerEvents: activeStep === 4 ? 'auto' : 'none',
          }}
          className="absolute inset-0 overflow-hidden bg-gradient-to-b from-white to-green-50"
        >
          <Step4Section />
        </motion.div>

        {/* STEP 5 */}
        <motion.div
          style={{
            opacity: stepOpacity(5),
            zIndex: stepZ(5),
            pointerEvents: activeStep === 5 ? 'auto' : 'none',
          }}
          className="absolute inset-0 overflow-hidden bg-gradient-to-b from-green-50 to-white"
        >
          <div className="flex items-center justify-center h-full text-center px-6 sm:px-16">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
                Final Step Placeholder
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                This is your future Step 5 — update with your own content when ready.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
