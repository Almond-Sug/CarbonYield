import { motion } from 'framer-motion';
import { AlertCircle, EyeOff, Hourglass } from 'lucide-react';

export default function ProblemSection() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-white to-green-50 flex items-center justify-center px-6 sm:px-16 z-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 z-10">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <p className="uppercase text-sm text-green-600 tracking-wide font-medium">
            Why This Matters
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-green-800 leading-tight">
            Traditional Climate Giving Falls Short
          </h2>
          <p className="text-gray-700 text-lg font-inter max-w-md mx-auto md:mx-0">
            Most donation platforms leave you in the dark. You fund a project… and that's it.
            No updates. No clarity. No real connection to lasting impact.
          </p>
        </motion.div>

        {/* RIGHT: Pain Point Cards */}
        <div className="flex flex-col space-y-6">
          {[
            {
              icon: <EyeOff className="w-6 h-6 text-green-700" />,
              title: 'Lack of Visibility',
              desc: 'You never really know where your money went — or if it worked.',
            },
            {
              icon: <AlertCircle className="w-6 h-6 text-green-700" />,
              title: 'Greenwashing Risk',
              desc: 'Even verified projects can get used in ways that distort climate claims.',
            },
            {
              icon: <Hourglass className="w-6 h-6 text-green-700" />,
              title: 'One-Time Impact',
              desc: 'Once you donate, the story ends — there’s no way to re-engage or scale it.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transform transition duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-green-800 font-semibold text-base">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
