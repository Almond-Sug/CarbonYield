import { motion } from 'framer-motion';
import { HandCoins, Medal, Target, Repeat, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'You Make a Climate Contribution',
    description: 'Donate to CarbonYield to support climate action — we pool funds to launch real carbon projects.',
    icon: HandCoins,
  },
  {
    title: 'You Receive Impact Credits',
    description: 'You receive symbolic Impact Credits as recognition for your contribution. They’re not financial assets and don’t represent ownership — but they let you guide where future support goes.',
    icon: Medal,
  },
  {
    title: 'You Guide Future Impact',
    description: 'Assign your credits to projects you care about — helping shape how support is distributed.',
    icon: Target,
  },
  {
    title: 'We Fund and Track Verified Projects',
    description: 'We make sure the projects you support follow trusted standards and generate real-world impact.',
    icon: Repeat,
  },
  {
    title: 'Your Impact Continues',
    description: 'When credits are resold, we reuse the proceeds to fund more projects — and you receive new Impact Credits to keep guiding future impact, without donating again unless you choose to grow your impact even further.',
    icon: Repeat,
  },
];

export default function SolutionCycleSection() {
  return (
    <section className="relative w-full bg-white py-24 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-green-800">
            !WILL BE CHANGED! How It Works in 4 Simple Steps
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto font-inter text-base sm:text-lg">
            The CarbonYield model makes your impact symbolic, transparent, and renewable — without financial return.
          </p>
        </motion.div>

        {/* Steps + Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-6 flex-wrap sm:flex-nowrap">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-6">
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4 max-w-xs"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-md">
                  <step.icon className="w-10 h-10 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-green-800">{step.title}</h3>
                <p className="text-gray-600 text-sm font-inter">{step.description}</p>
              </motion.div>

              {/* Arrow (except after last step) */}
              {index < steps.length - 1 && (
                <div className="hidden sm:flex">
                  <ArrowRight className="w-6 h-6 text-green-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
