import ImpactEstimator from '../components/ImpactEstimator';
import PortfolioChart from '../components/PortfolioChart';
import ImpactBadges from '../components/ImpactBadges';
import ImpactMap from '../components/ImpactMap';
import { useState } from 'react';

const impactEvents = [
  { icon: '🌱', message: 'Joined CarbonYield', date: 'June 2025' },
  { icon: '🌍', message: 'Offset 1.2 tons via Project Rainforest' },
  { icon: '♻️', message: 'Earned 18 pts from resale of solar cookstove credits' },
  { icon: '📦', message: 'Reinvestment option unlocked (coming soon)' },
];

export default function Dashboard() {
  const symbolicCredits = 42.5;
  const totalOffset = 3.2;
  const projectsSupported = 3;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* HEADER */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">📊 Your Climate Dashboard</h1>
        <p className="text-gray-600 text-sm mt-1">
          Track your environmental impact, explore projects, and reinvest symbolic credits.
        </p>
      </section>

      {/* KPI CARDS - UPGRADED */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {[
          { icon: '🌿', label: 'Total CO₂ Offset', value: `${totalOffset} tons` },
          { icon: '🎖️', label: 'Symbolic Credits', value: `${symbolicCredits} pts` },
          { icon: '🏗️', label: 'Projects Supported', value: projectsSupported },
        ].map((kpi, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-white to-green-50 border border-gray-200 rounded-2xl p-5 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out text-center space-y-3"
          >
            <div className="text-green-600 text-2xl">{kpi.icon}</div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{kpi.label}</div>
            <div className="text-3xl font-bold text-green-700">{kpi.value}</div>
          </div>
        ))}
      </section>


      {/* DASHBOARD GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* ESTIMATOR + CHART */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Estimator Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition-all">
              <ImpactEstimator />
            </div>
            {/* Chart Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition-all">
              <PortfolioChart />
            </div>
          </section>

          <section className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">📤 Export Your Impact Report</h2>
            <p className="text-sm text-gray-700">
              You’ll soon be able to download a personalized PDF summary of your symbolic impact — including offsets, credits earned, and projects supported.
            </p>
            <button
              disabled
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md opacity-50 hover:cursor-not-allowed w-full"
            >
              Export PDF (Coming Soon)
            </button>
            <p className="text-xs text-gray-500 italic">
              This feature is part of our transparency toolkit — perfect for sharing or tracking your climate journey.
            </p>
          </section>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-1 space-y-6">
          <ImpactBadges totalOffset={totalOffset} reinvestments={0} />

          <section className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm space-y-4 min-h-[200px]">
            <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2">
              🗞️ Recent Impact Events
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {impactEvents.map((event, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-lg">{event.icon}</span>
                  <span>
                    {event.message}
                    {event.date && (
                      <span className="text-gray-400 text-xs ml-1">({event.date})</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </section>


          <section className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl font-semibold text-yellow-600">🪙 Use Your Symbolic Credits</h2>
            <p className="text-sm text-gray-700">
              You currently have <strong className="text-yellow-800">{symbolicCredits} pts</strong> available.
            </p>
            <button
              disabled
              className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md opacity-50 hover:cursor-not-allowed w-full"
            >
              Use Credits (Coming Soon)
            </button>
            <p className="text-xs text-gray-600 italic">
              Soon you’ll be able to support new projects using symbolic credits — no money needed.
            </p>
          </section>

        </div>
      </div>

      {/* MAP (Full Width, Aligned) */}
      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2">
          🗺️ Explore Regional Project Impact
        </h2>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <ImpactMap />
        </div>
      </section>
    </div>
  );
} 
