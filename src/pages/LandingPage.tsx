  import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
  import ImpactMap from '../components/ImpactMap';
  import CredibilitySection from '../components/CredibilitySection';
  import HowItWorksSection from '../components/HowItWorksSection';
  import RecognitionSection from '../components/RecognitionSection';
  import MissionSection from '../components/MissionSection';
  import HeroSection from '../components/HeroSection';
  import EmailCTA from '../components/EmailCTA';
  import IntroSection from '../components/IntroSection';
  import FeatureOverviewSection from '../components/FeatureOverviewSection';
  import ProblemSection from '../components/ProblemSection';
  import SolutionCycleIntro from '../components/SolutionCycleIntro';

  export default function LandingPage() {
    return (
      <>
        {/* HERO */}
        <HeroSection />

        {/* Main Starts Here */}
        <div className="bg-white text-gray-900">

          {/* PROBLEM SECTION */}
          <ProblemSection />

          {/* WHAT IS CARBONYIELD */}
          <IntroSection />

          {/* HOW IT WORKS */}
          <HowItWorksSection />

          {/* WHAT CARBONYIELD OFFERS */}
          <FeatureOverviewSection />

          {/* IMPACT MAP */}
          <section className="py-28 bg-white px-6 sm:px-12 text-center space-y-10">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
                🌍 Where Carbon is Stored — and Where You Can Help
              </h2>
              <p className="text-gray-700 text-sm sm:text-base font-inter">
                The map below highlights sample high-impact regions — including forests, wetlands,
                and community sequestration projects. In future versions, you'll be able to explore exactly how your support shapes global CO₂ removal.
              </p>
            </div>

            {/* Interactive Map */}
            <div className="max-w-5xl mx-auto">
              <ImpactMap />
            </div>

            {/* Optional CTA */}
            <p className="text-sm text-gray-600 italic">
              Future versions will include live credit flows and location-based impact overlays.
            </p>
          </section>

          {/* CREDIBILITY, RECOGNITION, MISSION */}
          <CredibilitySection />
          <RecognitionSection />
          <MissionSection />

          {/* EMAIL SIGN-UP */}
          <EmailCTA />

          {/* FOOTER */}
          <footer className="py-10 text-center text-sm text-gray-500 bg-gray-100 font-inter">
            <p>© {new Date().getFullYear()} CarbonYield. All contributions are non-financial. No monetary returns or ownership are implied.</p>
            <p className="mt-1">Built with clarity, transparency, and Tailwind CSS.</p>
            <p className="mt-1">
              <a href="/faq" className="text-blue-600 hover:underline">FAQ</a> •{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>
          </footer>
        </div>
      </>
    );
  }
