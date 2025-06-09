import { motion } from "framer-motion";
import { BadgeDollarSign, Eye, Repeat } from "lucide-react";

export default function SymbolicYieldSection() {
  const benefits = [
    {
      icon: <BadgeDollarSign className="w-8 h-8 text-green-600" />,
      title: "No Speculation",
      desc: "Credits are symbolic and non-financial — no crypto, no volatility, just impact.",
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: "Visible Impact",
      desc: "Track resale activity and verified climate impact — symbolically represented through Impact Credits.",
    },
    {
      icon: <Repeat className="w-8 h-8 text-green-600" />,
      title: "Support the Next Cycle",
      desc: "After resale, you guide where support flows next — symbolically, not financially.",
    },
  ];

  return (
    <section
      className="relative py-24 px-6 sm:px-12 text-center bg-white"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%234caf50' fill-opacity='0.0625' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
      }}
    >
      <h2 className="text-3xl font-bold mb-4 font-dm-sans text-green-800">
        Visible Impact. Trusted Recognition. Ethically Designed.
      </h2>
      <p className="text-gray-600 mb-14 font-inter max-w-2xl mx-auto">
        When credits are resold, you receive Impact Credits — proof of your contribution and a way to support future projects symbolically.
      </p>

      {/* Animated Benefit Cards */}
      <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto text-left font-inter">
        {benefits.map(({ icon, title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="rounded-xl shadow hover:shadow-md transition p-8 bg-gray-50 space-y-4 h-full"
          >
            <div>{icon}</div>
            <h3 className="text-lg font-semibold text-green-700">{title}</h3>
            <p className="text-sm text-gray-700">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Preview Badge Area */}
      <div className="mt-20 max-w-md mx-auto">
        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-100 text-gray-500 p-8 text-center">
          <div className="text-2xl font-semibold mb-2">🎖️ Symbolic Badge Preview</div>
          <p className="text-sm">Symbolic recognition for your climate support — coming soon.</p>
        </div>
      </div>
    </section>
  );
}
