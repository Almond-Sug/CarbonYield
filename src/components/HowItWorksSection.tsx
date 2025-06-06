import { motion } from "framer-motion";
import { HandCoins, TreeDeciduous, BarChart3, Repeat } from "lucide-react";
import { Link } from "react-router-dom"; // adjust if using something else

const steps = [
  {
    title: "Fund",
    desc: "Contribute to verified carbon credit projects. Start with as little as $10.",
    icon: <HandCoins className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Project",
    desc: "Watch your contribution support measurable climate solutions.",
    icon: <TreeDeciduous className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Resale",
    desc: "Track when the carbon credits you helped fund are resold.",
    icon: <BarChart3 className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Symbolic Yield",
    desc: "Earn non-financial impact credits you can reinvest into new projects.",
    icon: <Repeat className="w-8 h-8 text-green-700" />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-28 bg-gray-50 px-6 sm:px-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-16">
        How CarbonYield Works
      </h2>

      {/* Step Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-left font-inter">
        {steps.map(({ title, desc, icon }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all p-8 flex flex-col justify-start items-start space-y-4 h-full"
          >
            {/* Icon + Title */}
            <div className="space-y-2">
              <div>{icon}</div>
              <h3 className="text-lg font-semibold text-green-700">
                {i + 1}. {title}
              </h3>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed min-h-[66px]">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16">
        <Link
          to="/marketplace"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition"
        >
          Explore Carbon Projects →
        </Link>
      </div>
    </section>
  );
}
