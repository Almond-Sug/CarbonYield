import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Eye } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: 'Verified Projects',
    desc: 'Every project is vetted through Verra, Gold Standard, or similar — ensuring measurable climate impact.',
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: 'Impact Credits & Recognition',
    desc: 'Receive non-financial Impact Credits and earn badges that reflect your ongoing climate contributions.',
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: 'Full Transparency',
    desc: 'Track resale activity — buyer, price, and allocation — with clear public updates and no greenwashing.',
  },
];

export default function FeatureOverviewSection() {
  return (
    <div className="relative w-full h-screen bg-green-50 flex items-center justify-center px-6 sm:px-16 z-30">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-green-800">
            What CarbonYield Offers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {features.map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition duration-300 flex flex-col items-center space-y-4 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-green-700">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
