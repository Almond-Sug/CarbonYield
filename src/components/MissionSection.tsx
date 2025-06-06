import { motion } from "framer-motion";
import { Globe, Wind, Code } from "lucide-react";

export default function MissionSection() {
  const stats = [
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "12 Projects Funded",
      desc: "Across forestry, renewable energy, and soil carbon initiatives.",
    },
    {
      icon: <Wind className="w-8 h-8 text-green-600" />,
      title: "52.6 Tons Offset",
      desc: "Symbolically tracked and reinvested via the platform.",
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: "Open Source Built",
      desc: "Transparency, auditability, and community-first design.",
    },
  ];

  return (
    <section className="py-28 px-6 sm:px-12 text-center bg-white relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-dm-sans text-green-800 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-600 font-inter text-lg mb-12 max-w-2xl mx-auto">
          CarbonYield exists to democratize access to verified carbon credit funding. We believe everyone deserves transparent, ethical, and impactful tools to fight climate change.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 text-left font-inter">
        {stats.map(({ icon, title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="rounded-xl bg-green-50 p-6 shadow hover:shadow-md transition space-y-4"
          >
            {icon}
            <h3 className="text-xl font-semibold text-green-800">{title}</h3>
            <p className="text-sm text-gray-700">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
