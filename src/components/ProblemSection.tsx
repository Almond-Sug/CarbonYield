import { motion } from 'framer-motion';
import { AlertCircle, EyeOff, Hourglass } from 'lucide-react';

export default function ProblemSection() {
  return (
    <div className="relative w-full min-h-[85vh] bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center px-6 sm:px-16 z-30">
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
            Why Most Climate Giving Doesn’t Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-green-800 leading-tight">
            Millions Want to Help — But the System Keeps Them Out
          </h2>
          <p className="text-gray-700 text-lg font-inter max-w-md mx-auto md:mx-0">
            Most climate platforms weren’t built for people like you — they end after one click, offer vague updates, or chase speculation. There’s no structured way to stay involved — or to see your support echo across future impact cycles.
          </p>
        </motion.div>

        {/* RIGHT: Pain Point Cards */}
        <div className="flex flex-col space-y-6">
          {[ 
            {
              icon: <EyeOff className="w-6 h-6 text-green-700" />, 
              title: 'No Way In',
              desc: 'You care — but verified climate projects are locked behind brokers and private markets.',
            },
            {
              icon: <Hourglass className="w-6 h-6 text-green-700" />, 
              title: 'One-and-Done',
              desc: 'You give, and it’s over. No next step. No way to stay involved.',
            },
            {
              icon: <AlertCircle className="w-6 h-6 text-green-700" />, 
              title: 'Trust Issues',
              desc: 'Speculative platforms make it hard to believe your support means anything real.',
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
