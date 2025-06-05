import ImpactEstimator from '../components/ImpactEstimator';
import PortfolioChart from '../components/PortfolioChart';
import ImpactBadges from '../components/ImpactBadges';

export default function Dashboard() {
  const symbolicCredits = 42.5;
  const totalOffset = 3.2;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-12 text-gray-800">

      {/* HEADER */}
      <section>
        <h1 className="text-3xl font-bold text-green-800">Your Climate Dashboard</h1>
        <p className="text-gray-600 text-sm">
          Track your environmental impact, view symbolic credit activity, and prepare to reinvest in new climate projects.
        </p>
      </section>

      {/* IMPACT SUMMARY */}
      <section className="bg-green-50 p-6 rounded-xl shadow space-y-2">
        <h2 className="text-xl font-semibold text-green-700">🌿 Impact Summary</h2>
        <p><strong>Total CO₂ Offset:</strong> {totalOffset} tons</p>
        <p><strong>Symbolic Impact Credits:</strong> {symbolicCredits} pts</p>
        <p className="text-xs text-gray-600 italic">
          These credits are symbolic and non-financial. They reflect your impact and may be used to re-fund future projects.
        </p>
      </section>

      {/* IMPACT ESTIMATOR */}
      <ImpactEstimator />

      {/* PORTFOLIO CHART */}
      <PortfolioChart />

      {/* REINVESTMENT PLACEHOLDER */}
      <section className="bg-white border border-gray-200 p-6 rounded-xl space-y-4">
        <h2 className="text-xl font-semibold text-green-700">♻️ Reinvest Your Impact Credits</h2>
        <p className="text-sm text-gray-700">
          You currently have <strong>{symbolicCredits} pts</strong> available.
        </p>
        <button
          disabled
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-not-allowed"
        >
          Reinvest (Coming Soon)
        </button>
        <p className="text-xs text-gray-500 italic">
          In future versions, you’ll be able to support new projects using symbolic credits alone.
        </p>
      </section>
      
  
      {/* IMPACT BADGES */}
      <ImpactBadges totalOffset={totalOffset} reinvestments={0} />

      {/* ACTIVITY LOG */}
      <section className="text-sm">
        <h2 className="text-md font-bold text-green-700 mb-2">📜 Recent Impact Events</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>🌱 Joined CarbonYield (June 2025)</li>
          <li>🌍 Offset 1.2 tons via Project Rainforest</li>
          <li>♻️ Earned 18 pts from resale of solar cookstove credits</li>
          <li>📦 Reinvestment option unlocked (coming soon)</li>
        </ul>
      </section>
    </div>
  );
}
