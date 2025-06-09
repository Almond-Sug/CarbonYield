import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useInView,
} from 'framer-motion';
import {
  Target,
  Landmark,
  BarChart3,
  Repeat,
} from 'lucide-react';
import Step1Section from './Step1Section'; // ✅ Custom component
// (Create others like Step2Section, etc., as you go)

const steps = [
  {
    title: '1. Start Your Impact',
    desc: 'Make your first contribution — CarbonYield pools donations to support verified climate projects.',
  },
  {
    title: '2. Choose a Project',
    desc: 'Assign your Impact Credits to projects you believe in.',
  },
  {
    title: '3. We Fund and Track',
    desc: 'CarbonYield funds and tracks real-world carbon projects transparently.',
  },
  {
    title: '4. Credit Resale',
    desc: 'Resale proceeds are reused for future impact — not returned as cash.',
  },
  {
    title: '5. Get New Credits',
    desc: 'You receive new Impact Credits — a fresh chance to support what matters. You can now choose another project — restarting the cycle.',
  },
];

export default function HowItWorksSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const isInView = useInView(containerRef, { margin: '-20% 0px -20% 0px', once: false });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);
  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(currentIndex, 'change', (latest) => {
    setActiveStep(Math.round(latest));
  });

  return (
    <section className="bg-white relative">
      {/* DOT TRACKER */}
      {isInView && (
        <div className="hidden md:flex flex-col items-center gap-4 fixed left-8 top-1/2 -translate-y-1/2 z-30">
          {steps.map((_, i) => (
            <div key={i}>
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeStep ? 'bg-green-700 scale-125 shadow-md' : 'bg-green-200'
                }`}
              />
            </div>
          ))}
        </div>
      )}

      {/* SCROLL-PINNED SECTION */}
      <div ref={containerRef} className="h-[500vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {steps.map((step, i) => {
            const inputRange = [
              i / steps.length,
              (i + 0.5) / steps.length,
              (i + 1) / steps.length,
            ];
            const opacity = useTransform(scrollYProgress, inputRange, [0, 1, 0]);
            const pointerEvents = useTransform(scrollYProgress, inputRange, ['none', 'auto', 'none']);

            return (
              <motion.div
                key={i}
                style={{ opacity, pointerEvents }}
                className="absolute top-0 left-0 w-full h-full"
              >
                {i === 0 && <Step1Section />}
                {i === 1 && (
                  <div className="flex items-center justify-center h-full text-center px-6">
                    <div>
                      <h2 className="text-3xl font-bold text-green-700">{step.title}</h2>
                      <p className="text-lg text-gray-700 mt-4">{step.desc}</p>
                    </div>
                  </div>
                )}
                {i === 2 && (
                  <div className="flex items-center justify-center h-full text-center px-6">
                    <div>
                      <h2 className="text-3xl font-bold text-green-700">{step.title}</h2>
                      <p className="text-lg text-gray-700 mt-4">{step.desc}</p>
                    </div>
                  </div>
                )}
                {i === 3 && (
                  <div className="flex items-center justify-center h-full text-center px-6">
                    <div>
                      <h2 className="text-3xl font-bold text-green-700">{step.title}</h2>
                      <p className="text-lg text-gray-700 mt-4">{step.desc}</p>
                    </div>
                  </div>
                )}
                {i === 4 && (
                  <div className="flex items-center justify-center h-full text-center px-6">
                    <div>
                      <h2 className="text-3xl font-bold text-green-700">{step.title}</h2>
                      <p className="text-lg text-gray-700 mt-4">{step.desc}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FINAL STATIC RECAP SECTION */}
      <div className="bg-gray-50 py-24 px-6 sm:px-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-green-800 text-center mb-12">
          The Impact Cycle at a Glance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white border border-green-100 rounded-xl p-6 text-center space-y-3 shadow-sm hover:shadow-md hover:-translate-y-1 transform transition duration-200"
            >
              <div className="flex justify-center text-green-700 text-3xl font-bold">
                {i + 1}
              </div>
              <h4 className="text-green-700 font-semibold text-md">{step.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
