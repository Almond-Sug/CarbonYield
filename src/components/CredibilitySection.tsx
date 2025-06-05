export default function CredibilitySection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-6 bg-green-50 rounded-xl shadow mt-20">
      <h2 className="text-2xl font-bold text-green-800 text-center">
        🔐 Our Commitment to Transparency and Ethics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        <div>
          <h3 className="font-semibold text-green-600 mb-1">Third-Party Certification</h3>
          <p>
            All supported projects meet rigorous standards such as Verra and Gold Standard,
            ensuring measurable CO₂ offset validation and audit trails.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-green-600 mb-1">Symbolic Yield, Not Financial Return</h3>
          <p>
            Users earn symbolic credits tied to project resale activity. These are reinvestable,
            non-monetary points used to support future initiatives — not financial investments.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-green-600 mb-1">Future Roadmap</h3>
          <p>
            CarbonYield is currently a symbolic impact tool. A future phase ("CarbonYield Plus")
            may allow broader nonprofit or hybrid use. Your feedback and support guide this evolution.
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-600 italic text-center mt-4">
        CarbonYield is a transparency-first climate tool. We're committed to ethical design, visible impact, and no greenwashing.
      </p>
    </section>
  );
}
