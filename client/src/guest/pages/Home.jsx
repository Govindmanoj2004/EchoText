import React from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const bars = [
    { color: "#4285f4", delay: 0 },
    { color: "#db4437", delay: 0.1 },
    { color: "#f4b400", delay: 0.2 },
    { color: "#0f9d58", delay: 0.3 },
  ];

  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create your account to access all features",
      icon: "📝",
    },
    {
      number: 2,
      title: "Start Analyzing",
      description: "Use the voice analyzer to process your audio",
      icon: "🎯",
    },
    {
      number: 3,
      title: "View Results",
      description: "Get detailed analysis and insights",
      icon: "📊",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Users", color: "blue" },
    { value: "1M+", label: "Analyses Daily", color: "red" },
    { value: "99.9%", label: "Uptime", color: "green" },
    { value: "150+", label: "Supported Languages", color: "yellow" },
  ];

  const features = [
    "Real-time voice visualization",
    "Advanced frequency analysis",
    "Professional confidence scoring",
    "Multi-language support",
    "Export analysis reports",
  ];

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>🎤</div>
            <div>
              <h1 className={styles.logoTitle}>EchoType</h1>
              <p className={styles.logoSubtitle}>
                Professional audio analysis platform
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={styles.heroGrid}
          >
            {/* Left Content */}
            <div className={styles.heroContent}>
              <motion.h2 variants={itemVariants} className={styles.heroTitle}>
                Advanced Voice{" "}
                <span className={styles.gradientText}>Analysis</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className={styles.heroDescription}
              >
                Experience professional-grade voice analysis with real-time
                processing, detailed insights, and accurate speech recognition
                powered by advanced AI technology.
              </motion.p>

              {/* Feature List */}
              <motion.div
                variants={itemVariants}
                className={styles.featureList}
              >
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 8 }}
                    className={styles.featureItem}
                  >
                    <div className={styles.featureDot} />
                    <span className={styles.featureText}>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className={styles.ctaButtons}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={styles.primaryButton}
                >
                  Start Analyzing
                  <span className={styles.buttonArrow}>→</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={styles.secondaryButton}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>

            {/* Right Visualization */}
            <motion.div variants={itemVariants} className={styles.heroVisual}>
              <div className={styles.visualContainer}>
                {/* Animated Background Circles */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className={styles.circleBg1}
                />
                <motion.div
                  animate={{ scale: [1.1, 1, 1.1] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                  }}
                  className={styles.circleBg2}
                />

                {/* Main Demo Bubble */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={styles.demoBubble}
                >
                  <div className={styles.barsContainer}>
                    {bars.map((bar, index) => (
                      <motion.div
                        key={index}
                        animate={{
                          height: ["40px", "120px", "60px", "100px", "40px"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: bar.delay,
                          ease: "easeInOut",
                        }}
                        className={styles.bar}
                        style={{ backgroundColor: bar.color }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className={styles.stats}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className={styles.statCard}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${styles.statValue} ${styles[stat.color]}`}
              >
                {stat.value}
              </motion.div>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Steps Section */}
        <section className={styles.stepsSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className={styles.stepsHeader}
          >
            <h3 className={styles.stepsTitle}>Getting Started</h3>
            <p className={styles.stepsSubtitle}>
              Three simple steps to start analyzing audio like a pro
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={styles.stepsGrid}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={styles.stepCard}
              >
                {/* Background gradient on hover */}
                <div className={styles.stepBg} />

                {/* Number Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={styles.stepNumber}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <div className={styles.stepIcon}>{step.icon}</div>

                {/* Content */}
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDescription}>{step.description}</p>

                {/* Line connector (except last) */}
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className={styles.stepConnector}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.footer}
      >
        <div className={styles.footerContent}>
          <p className={styles.footerText}>Ready to start analyzing?</p>
          <motion.a
            href="/user"
            whileHover={{ color: "#4285f4" }}
            className={styles.signupLink}
          >
            Sign up now →
          </motion.a>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
