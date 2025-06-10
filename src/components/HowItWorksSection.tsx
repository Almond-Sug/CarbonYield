import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useInView,
} from 'framer-motion';
import {
  HandCoins,
  Medal,
  Target,
  Landmark,
  RefreshCcw,
} from 'lucide-react';
import Step1Section from './Step1Section';
import Step2Section from './Step2Section';
import Step3Section from './Step3Section';
import Step4Section from './Step4Section';

const steps = [
  {
    icon: <HandCoins className="w-5 h-5 md:w-6 md:h-6" />,
    title: 'You Make a Climate Contribution',
    desc: 'Donate to CarbonYield to support climate action — we pool funds to launch real carbon projects.',
  },
  {
    icon: <Medal className="w-5 h-5 md:w-6 md:h-6" />,
    title: 'You Receive Impact Credits',
    desc: 'You receive symbolic Impact Credits as recognition for your contribution. They’re not financial assets and don’t represent ownership — but they let you guide where future support goes.',
  },
  {
    icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
    title: 'You Guide Future Impact',
    desc: 'Assign your credits to projects you care about — helping shape how support is distributed.',
  },
  {
    icon: <Landmark className="w-5 h-5 md:w-6 md:h-6" />,
    title: 'We Fund and Track Verified Projects',
    desc: 'We make sure the projects you support follow trusted standards and generate real-world impact.',
  },
  {
    icon: <RefreshCcw className="w-5 h-5 md:w-6 md:h-6" />,
    title: 'Your Impact Continues',
    desc: 'When credits are resold, we reuse the proceeds to fund more projects — and you receive new Impact Credits to guide future impact, without donating again — unless you choose to grow your impact even further.',
  },
];

export default function HowItWorksSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const isInView = useInView(containerRef, { margin: '-20% 0px -20% 0px' });
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);
  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(currentIndex, 'change', (latest) => {
    setActiveStep(Math.round(latest));
  });

  return (
    <section className="bg-white relative">
      {/* Vertical Icon Tracker */}
      {isInView && (
        <div className="hidden md:flex flex-col items-start gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-30">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`transition-all duration-200 ${
                i === activeStep ? 'text-green-700 scale-110' : 'text-gray-300'
              }`}
            >
              {step.icon}
            </motion.div>
          ))}
        </div>
      )}

      {/* Scrollable Section */}
      <div ref={containerRef} className="h-[500vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {steps.map((step, i) => {
            const inputRange = [i / steps.length, (i + 0.5) / steps.length, (i + 1) / steps.length];
            const opacity = useTransform(scrollYProgress, inputRange, [0, 1, 0]);
            const pointerEvents = useTransform(scrollYProgress, inputRange, ['none', 'auto', 'none']);

            return (
              <motion.div
                key={i}
                style={{ opacity, pointerEvents }}
                className="absolute top-0 left-0 w-full h-full"
              >
                {i === 0 && <Step1Section isActive={activeStep === 0} />}
                {i === 1 && <Step2Section />}
                {i === 2 && <Step3Section />}
                {i === 3 && <Step4Section />}
                {i > 1 && (
                  <div className="flex items-center justify-center h-full text-center px-6 sm:px-16">
                    <div className="max-w-xl">
                      <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">{step.title}</h2>
                      <p className="text-lg text-gray-700 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
