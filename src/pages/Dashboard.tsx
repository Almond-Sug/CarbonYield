// Dashboard.tsx
import ImpactEstimator from '../components/ImpactEstimator';
import ImpactOverview from '../components/ImpactOverview';
import ImpactBadges from '../components/ImpactBadges';
import ImpactMap from '../components/ImpactMap';
import UseCreditsModal from '../components/UseCreditsModal';
import { useUserImpact } from "../hooks/useUserImpact";
import { useState } from 'react';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';

export default function Dashboard() {
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const {
    totalAmount: symbolicCredits,
    totalOffset,
    projectCount: projectsSupported,
    events: impactEvents,
    redemptions,
    loading,
  } = useUserImpact(refreshTrigger);

  const [showModal, setShowModal] = useState(false);

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">📊 Your Climate Dashboard</h1>
        <p className="text-gray-600 text-sm mt-1">
          Track your environmental impact, explore projects, and reinvest symbolic credits.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {[{
          icon: '🌿', label: 'Total CO₂ Offset', value: `${totalOffset} tons`
        }, {
          icon: '🎖️', label: 'Symbolic Credits', value: `${symbolicCredits} pts`
        }, {
          icon: '🏗️', label: 'Projects Supported', value: projectsSupported
        }].map((kpi, idx) => (
          <div key={idx} className="bg-gradient-to-br from-white to-green-50 border border-gray-200 rounded-2xl p-5 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out text-center space-y-3">
            <div className="text-green-600 text-2xl">{kpi.icon}</div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{kpi.label}</div>
            <div className="text-3xl font-bold text-green-700">{kpi.value}</div>
          </div>
        ))}
      </section>

      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition-all">
              <ImpactEstimator />
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition-all">
              <ImpactOverview />
            </div>
          </section>

          <section className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">📤 Export Your Impact Report</h2>
            <p className="text-sm text-gray-700">
              You’ll soon be able to download a personalized PDF summary of your symbolic impact — including offsets, credits earned, and projects supported.
            </p>
            <p className="text-xs text-gray-500 italic">
              This feature is part of our transparency toolkit — perfect for sharing or tracking your climate journey.
            </p>
          </section>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <ImpactBadges totalOffset={totalOffset} reinvestments={redemptions.length} />

          <section className="bg-white border border-yellow-200 p-6 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-xl font-semibold text-yellow-600">🪙 Use Your Symbolic Credits</h2>
            <p className="text-sm text-gray-700">
              You currently have <strong className="text-yellow-800">{symbolicCredits} pts</strong> available.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md w-full"
            >
              Use Credits
            </button>
            <p className="text-xs text-gray-600 italic">
              Support new projects using symbolic credits — no money needed.
            </p>
          </section>

          <section className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm space-y-4 min-h-[200px]">
            <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2">🗞️ Recent Impact Events</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {impactEvents.map((event, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-lg">{event.tonsEstimated > 5 ? "🌍" : "🌱"}</span>
                  <span>
                    Offset {event.tonsEstimated.toFixed(2)} tons via {event.projectName}
                    <span className="text-gray-400 text-xs ml-1">({event.createdAt})</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2">🧾 Past Redemptions</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {redemptions.map((r, idx) => (
                <li key={idx}>
                  Redeemed <strong>{r.amount} pts</strong> for <em>{r.project}</em> ({new Date(r.createdAt.seconds * 1000).toLocaleDateString()})
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2">🗺️ Explore Regional Project Impact</h2>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <ImpactMap />
        </div>
      </section>

      {showModal && (
        <UseCreditsModal
          symbolicCredits={symbolicCredits}
          onClose={() => setShowModal(false)}
          onRedeem={async (amount, projectId) => {
            const user = auth.currentUser;
            if (!user) return;

            try {
              const projectRef = doc(db, "projects", projectId);
              const projectSnap = await getDoc(projectRef);
              if (!projectSnap.exists()) throw new Error("Project not found.");

              const projectData = projectSnap.data();

              await addDoc(collection(db, "redemptions"), {
                userId: user.uid,
                amount,
                project: projectData.name,
                createdAt: new Date(),
              });

              await addDoc(collection(db, "contributions"), {
                userId: user.uid,
                projectId,
                amount,
                createdAt: new Date(),
                isSymbolic: true,
              });

              alert(`Redeemed ${amount} pts for ${projectData.name}!`);
              setShowModal(false);
              setRefreshTrigger((prev) => !prev); // ✅ re-trigger useUserImpact
            } catch (err) {
              console.error("Error redeeming credits:", err);
              alert("Failed to redeem. Please try again later.");
            }
          }}
        />
      )}
    </div>
  );
}
