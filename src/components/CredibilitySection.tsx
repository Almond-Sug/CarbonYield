import { CheckCircle, ShieldCheck, TrendingUp } from "lucide-react";

export default function CredibilitySection() {
  return (
    <section className="bg-green-50 py-20 px-6 mt-16">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold text-green-800">Built for Climate Trust</h2>
        <p className="text-gray-700 text-base max-w-xl mx-auto">
          CarbonYield is designed for ethical, transparent participation — featuring verified projects, non-monetary recognition, and a platform focused on visible impact, not speculation.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center text-sm text-gray-700">
        <div className="space-y-3 px-4">
          <ShieldCheck className="mx-auto text-green-600 w-8 h-8" />
          <h3 className="font-semibold text-green-700">Verified Projects</h3>
          <p>
            Every listed project meets standards like <strong>Verra</strong> or <strong>Gold Standard</strong>, with public tracking and third-party validation.
          </p>
        </div>

        <div className="space-y-3 px-4">
          <TrendingUp className="mx-auto text-green-600 w-8 h-8" />
          <h3 className="font-semibold text-green-700">Impact Credit Reuse</h3>
          <p>
            Your support earns non-monetary Impact Credits — used to expand your climate impact, not generate returns.
          </p>
        </div>

        <div className="space-y-3 px-4">
          <CheckCircle className="mx-auto text-green-600 w-8 h-8" />
          <h3 className="font-semibold text-green-700">Roadmap Transparency</h3>
          <p>
            We’re building in the open — with future growth guided by community trust, not investor returns.
          </p>
        </div>
      </div>

      {/* Optional: Trust logos row */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-6 opacity-80">
        <img src="/verra-logo.png" alt="Verra" className="h-6" />
        <img src="/goldstandard-logo.png" alt="Gold Standard" className="h-6" />
        {/* Add GitHub / open-source / IRS nonprofit icon if applicable */}
      </div>

      <p className="text-s text-gray-600 italic text-center mt-8 max-w-lg mx-auto">
        No greenwashing. No speculation. Just visible impact — one contribution at a time. 
      </p>
    </section>
  );
}
