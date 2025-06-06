import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      {/* Background and Overlay */}
      <div className={styles.heroBackground} />
      <div className={styles.heroEarthFilter} />
      <div className={styles.heroOverlay} />

        <img
            src="/logo_carbonyield.png"
            alt="CarbonYield Logo"
            className={styles.heroEarthLogo}
        />

      {/* Text Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={styles.heroTextBlock}
      >

        <h1 className={`text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 font-dm-sans text-white ${styles.heroShadowText}`}>
          Fund Climate.
          <br />
          Track Impact.
        </h1>

        <p className={`text-lg sm:text-xl font-medium text-white/90 mb-8 font-inter ${styles.heroShadowText}`}>
          Back real carbon projects, see real impact, and earn symbolic rewards.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
          <Link to="/dashboard" className={styles.heroButton}>
            Get Started
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
