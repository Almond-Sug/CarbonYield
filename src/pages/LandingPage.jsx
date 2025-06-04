import { Link } from 'react-router-dom';
import ImpactMap from '../components/ImpactMap';
import CredibilitySection from '../components/CredibilitySection';

export default function LandingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col gap-20 sm:gap-28">

      {/* HERO SECTION */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-green-700">CarbonYield</h1>
        <h1 className="text-2xl sm:text-5xl font-extrabold text-green-700">
          Fund Climate. Track Impact. Share the Win.
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Support verified carbon projects. Track your impact. Reinvest your symbolic credit into more change.
        </p>
        <Link
          to="/marketplace"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-700 transition"
        >
          Explore Projects
        </Link>
      </section>

      {/* FEATURE TEASERS */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-green-600 text-3xl">✅</div>
          <h3 className="text-xl font-semibold text-green-700">Verified Projects</h3>
          <p className="text-sm text-gray-600">
            All projects are certified by Verra, Gold Standard, or equivalent.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="text-green-600 text-3xl">🎖️</div>
          <h3 className="text-xl font-semibold text-green-700">Symbolic Rewards</h3>
          <p className="text-sm text-gray-600">
            Earn badges and track your estimated carbon offset journey.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="text-green-600 text-3xl">🔎</div>
          <h3 className="text-xl font-semibold text-green-700">Full Transparency</h3>
          <p className="text-sm text-gray-600">
            See real resale data — buyers, amounts, and retirement status.
          </p>
        </div>
      </section>

      {/* SYMBOLIC LOOP CALLOUT */}
      <section className="bg-green-50 rounded-xl px-6 py-10 shadow max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-bold text-green-800">Why Symbolic Reinvestment?</h2>
        <p className="text-gray-700 text-sm max-w-2xl mx-auto">
          CarbonYield is not a donation platform — and not a financial one either.
          It’s a new kind of climate accelerator. When the credits you helped fund are resold,
          you get symbolic credits back. No money, just impact. Use those symbolic credits
          to re-fund more carbon projects and grow your impact over time.
        </p>
        <p className="text-xs text-gray-600 italic">
          You don't earn financial returns — but you do build a transparent, compounding climate legacy.
        </p>
      </section>

      {/* HOW IT WORKS (CARD STYLE) */}
      <section className="space-y-8 text-center">
        <h2 className="text-2xl font-bold text-green-800">How CarbonYield Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-white rounded-xl p-6 shadow space-y-2">
            <h4 className="font-semibold text-green-700">1. Micro-Fund Projects</h4>
            <p className="text-sm text-gray-700">
              Choose from verified carbon offset projects. Fund as little as $10.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow space-y-2">
            <h4 className="font-semibold text-green-700">2. Track Symbolic Yield</h4>
            <p className="text-sm text-gray-700">
              Monitor your offset estimates, project updates, and resale logs.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow space-y-2">
            <h4 className="font-semibold text-green-700">3. Share & Reinvest</h4>
              <p className="text-sm text-gray-700">
                When credits are resold, you earn symbolic Impact Points. Use them to re-fund new projects and keep the cycle going.
              </p>
          </div>
        </div>
      </section>

      {/* IMPACT MAP SECTION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-green-800 text-center">🌍 Where Carbon is Stored—And Where You Can Help</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          The map below highlights high-impact regions like forests, grasslands, and urban areas.
          In future versions, users will be able to explore how their funding affects global CO₂ levels.
        </p>
        <ImpactMap />
      </section>

      {/* CREDIBILITY SECTION */}
      <CredibilitySection />

      <footer className="mt-28 border-t pt-6 text-center text-sm text-gray-500">
        Built by Almond Sugumalwang | CarbonYield v1.0 | MIT License
      </footer>

    </div>
  );
}
