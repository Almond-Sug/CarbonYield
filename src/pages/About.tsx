export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-12 text-gray-800">

      {/* HEADER */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-green-700">About CarbonYield</h1>
        <p className="text-md text-gray-600 max-w-2xl mx-auto">
          A climate impact platform focused on transparency, symbolic reinvestment, and meaningful participation.
        </p>
      </section>

      {/* VISION */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-green-800">Why We Built It</h2>
        <p>
          Until now, there’s been no tool for individuals to directly and transparently fund the carbon credit ecosystem.
          Most donation platforms lack clarity — users don’t know what their money creates, where it goes, or who ends up using the resulting carbon credits.
        </p>
        <p>
          CarbonYield was created to close that gap: to give users a direct connection to high-quality offset projects,
          track how their support results in carbon credits, and see when those credits are issued, sold, or retired.
        </p>
      </section>

      {/* HOW WE WORK */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-green-800">How CarbonYield Works</h2>
        <p>
          Users fund small to mid-scale certified carbon projects — like reforestation efforts, clean cookstove programs,
          or community-based sequestration initiatives. These projects generate verifiable carbon credits.
        </p>
        <p>
          When credits are sold or retired, CarbonYield transparently logs the resale or usage. Instead of financial returns,
          users earn <strong>symbolic impact credits</strong> — non-monetary recognition that can be used to re-fund new projects.
          It’s a climate reinvestment loop — built on transparency and shared environmental progress.
        </p>
      </section>

      {/* FUTURE VISION */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-green-800">What Comes Next</h2>
        <p>
          CarbonYield is beginning as a nonprofit-style public platform — focused on trust and accessibility.
          But we’re actively designing a second version: <strong>CarbonYield Plus</strong>, which may allow qualified users to invest
          in pooled carbon credit portfolios and share regulated financial upside, within SEC-compliant boundaries.
        </p>
        <p>
          This dual-path model ensures we can serve both everyday users seeking impact, and investors looking to fund high-potential environmental infrastructure.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-green-800">Who We Are</h2>
        <p>
          CarbonYield was founded by a team of engineers, builders, and climate-minded developers — driven by the belief
          that funding environmental change should be transparent, reinvestable, and accessible to all.
        </p>
        <p className="text-sm text-gray-500 italic">
          Built by a climate-focused engineer with a background in neuroscience and mechanical systems —
          in collaboration with peers who share a commitment to responsible impact.
        </p>
      </section>

    </div>
  );
}
