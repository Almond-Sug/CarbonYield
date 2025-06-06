import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImpactMap from '../components/ImpactMap';
import CredibilitySection from '../components/CredibilitySection';
import HowItWorksSection from '../components/HowItWorksSection';
import RecognitionSection from '../components/RecognitionSection';
import MissionSection from '../components/MissionSection';

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-center min-h-screen px-6 sm:px-12"
        style={{
          backgroundImage: `url('/hero-background.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black bg-opacity-40 p-6 sm:p-12 rounded-xl max-w-2xl text-white">
          <img src="/logo_carbonyield.png" alt="CarbonYield Logo" className="mx-auto mb-4 w-16" />
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 font-dm-sans">
            Fund Climate. Track Impact.
          </h1>
          <p className="text-lg sm:text-xl mb-6 font-inter">
            Back real carbon projects, see real impact, and earn symbolic rewards.
          </p>
          <Link
            to="/dashboard"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* WHAT IS CARBONYIELD */}
      <section className="mt-20 text-center max-w-4xl mx-auto px-6 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800">
          Introducing a New Kind of Climate Platform
        </h2>

        <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto font-inter">
          CarbonYield is part climate funding tool, part symbolic reinvestment engine. You support verified carbon credit projects, track resale activity, and receive symbolic credits that can be reinvested into future initiatives.
        </p>

        <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto font-inter">
          It’s inspired by how investment platforms work — but for climate impact, not profit. No money comes back to you — only measurable progress.
        </p>

        <p className="text-sm text-green-700 font-medium">
          <a href="/about" className="underline hover:text-green-800 transition">
            Learn how CarbonYield works →
          </a>
        </p>
      </section>

      {/* WHY CARBONYIELD WORKS */}
      <section className="bg-green-50 py-20 mt-28">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800">
            What CarbonYield Offers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '✅',
                title: 'Verified Projects',
                desc: 'Every project is vetted through Verra, Gold Standard, or similar — ensuring measurable climate impact.',
              },
              {
                icon: '🎖️',
                title: 'Symbolic Rewards',
                desc: 'Track your estimated carbon offset. Earn badges, titles, and reinvestment points.',
              },
              {
                icon: '🔎',
                title: 'Full Transparency',
                desc: 'See credit resale details — buyer, price, and status — with no greenwashing.',
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transform transition duration-200 space-y-3 flex flex-col items-center"
              >
                <div className="text-4xl h-12 flex items-center justify-center">{icon}</div>
                <h3 className="text-lg font-semibold text-green-700">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SYMBOLIC REINVESTMENT HIGHLIGHT */}
      <section className="mt-32 bg-white px-6 py-24 text-center max-w-5xl mx-auto space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800">
          A Climate Platform That Gives Back — Even After You Give
        </h2>

        <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto font-inter">
          When you support a carbon project on CarbonYield, you're not making a one-time donation —
          you're becoming part of a reinvestment loop. As the credits you helped fund are resold,
          you earn symbolic Impact Points that let you fund more change — without spending more.
        </p>

        {/* Image (Need to make it better) */}
        <div className="flex justify-center">
          <img
            src="/Symbolic-Loop-Diagram.png"
            alt="Symbolic Reinvestment Loop"
            className="w-full max-w-xl rounded-xl shadow-md"
          />
        </div>

        <p className="text-gray-600 text-sm italic">
          No securities. No profit promises. Just real, visible impact that compounds over time.
        </p>
      </section>



      {/* HOW IT WORKS */}
      <HowItWorksSection />

      {/* IMPACT MAP */}
      <section className="py-28 bg-white px-6 sm:px-12 text-center space-y-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
            🌍 Where Carbon is Stored — and Where You Can Help
          </h2>
          <p className="text-gray-700 text-sm sm:text-base font-inter">
            The map below highlights sample high-impact regions — including forests, wetlands,
            and community sequestration projects. In future versions, users will be able to
            explore exactly how their support affects global CO₂ removal.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="max-w-5xl mx-auto">
          <ImpactMap />
        </div>

        {/* Optional CTA */}
        <p className="text-sm text-gray-600 italic">
          Future versions will include real-time credit tracking and location impact overlays.
        </p>
      </section>

      {/* CREDIBILITY SECTION */}
      <CredibilitySection />

      {/* RECOGNITION SECTION */}
      <RecognitionSection />

      {/* MISSION & IMPACT STATS */}
      <MissionSection />

      {/* EMAIL SIGN-UP CTA */}
      <section className="py-20 bg-green-600 text-white px-6 sm:px-12 text-center">
        <h2 className="text-3xl font-bold font-dm-sans mb-4">Join the Movement</h2>
        <p className="mb-6 max-w-xl mx-auto font-inter">
          Want to be part of the future of climate impact? Join our updates list.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="you@example.com"
            className="px-4 py-3 rounded-md text-gray-900 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-white text-green-700 px-6 py-3 rounded-md font-semibold hover:bg-green-100 transition"
          >
            Keep Me Posted
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500 bg-gray-100 font-inter">
        <p>© {new Date().getFullYear()} CarbonYield. Symbolic impact only — no financial returns implied.</p>
        <p className="mt-1">Built with love, transparency, and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
