import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Types
type FAQEntry = {
  q: string;
  a: string;
};

type FAQCategory = {
  label: string;
  icon: string;
  faqs: FAQEntry[];
};

const faqData: Record<'donors' | 'projects' | 'about', FAQCategory> = {
  donors: {
    label: 'For Donors',
    icon: '🧍',
    faqs: [
      {
        q: 'What is CarbonYield?',
        a: 'CarbonYield is a symbolic climate-fintech platform where individuals fund climate projects and receive non-financial "Impact Credits" that can be reused to support future projects. It creates a closed-loop donation model for long-term impact.',
      },
      {
        q: 'What are "Impact Credits"?',
        a: 'Impact Credits are symbolic acknowledgments of your support. They hold no cash value but can be reused to symbolically fund new projects — similar to frequent flyer miles for climate action.',
      },
      {
        q: 'Are these donations or investments?',
        a: 'They are donations. You receive symbolic recognition only, not a financial return. This ensures legal compliance and nonprofit eligibility.',
      },
      {
        q: 'How does the reinvestment loop work?',
        a: '1) You donate to a project. 2) It resells carbon credits. 3) You receive Impact Credits. 4) You reuse them to support other projects. Funds stay within CarbonYield for future symbolic allocation.',
      },
      {
        q: 'Is this legally compliant?',
        a: 'Yes. Since no financial returns are issued, CarbonYield operates symbolically — making it suitable for grants and nonprofit frameworks.',
      },
      {
        q: 'Who is CarbonYield for?',
        a: 'It’s for individuals, students, businesses seeking ESG alignment, and carbon developers seeking early visibility.',
      },
      {
        q: 'Is this live?',
        a: 'Yes. The MVP is hosted on Netlify with live UI, simulated resale logic, and symbolic dashboards.',
      },
      {
        q: 'How can I get involved?',
        a: 'Visit www.carbonyield.net, email hello@carbonyield.net, or submit a project idea to get started.',
      },
    ],
  },
  projects: {
    label: 'For Projects',
    icon: '🌱',
    faqs: [
      {
        q: 'How do projects get listed?',
        a: 'Projects must meet basic eligibility (e.g., verifiable outcomes, registry alignment). They are reviewed for legitimacy and storytelling potential.',
      },
      {
        q: 'Is CarbonYield a nonprofit?',
        a: 'It is structured for nonprofit compliance. Registration is in progress with a possible future B2B tool layer.',
      },
      {
        q: 'What’s coming next?',
        a: 'We plan to launch symbolic badges, ESG dashboards, digest emails, and B2B ESG tooling.',
      },
      {
        q: 'Is CarbonYield backed by investors?',
        a: 'Not yet. We are seeking pre-seed or philanthropic capital to scale impact and platform infrastructure.',
      },
    ],
  },
  about: {
    label: 'About CarbonYield',
    icon: 'ℹ️',
    faqs: [
      {
        q: 'Who’s behind CarbonYield?',
        a: 'The founder is a climate-conscious developer with a neuroscience background. The team includes mission-aligned collaborators.',
      },
    ],
  },
};

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<'donors' | 'projects' | 'about'>('donors');
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const current = faqData[selectedCategory];
  const filteredFaqs = current.faqs.filter(({ q, a }) =>
    `${q} ${a}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-10"
      >
        Frequently Asked Questions
      </motion.h1>

      {/* Category Toggle Buttons */}
      <div className="flex justify-center gap-3 sm:gap-6 mb-8 flex-wrap">
        {Object.entries(faqData).map(([key, { label, icon }]) => (
          <button
            key={key}
            onClick={() => {
              setSelectedCategory(key as 'donors' | 'projects' | 'about');
              setSearch('');
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-full border text-sm sm:text-base transition font-medium ${
              selectedCategory === key
                ? 'bg-green-100 text-green-800 border-green-300'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {icon} {label}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder={`Search ${current.label}...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-10 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* FAQs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFaqs.map(({ q, a }: FAQEntry, i: number) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="bg-white border border-gray-200 rounded-xl shadow-sm">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex justify-between items-center p-5 sm:p-6 text-left rounded-xl hover:bg-gray-50 transition"
              >
                <span className="text-base sm:text-lg font-medium text-gray-900">{q}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 sm:px-6 pb-4 text-gray-600 text-sm sm:text-base font-inter"
                  >
                    {a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
