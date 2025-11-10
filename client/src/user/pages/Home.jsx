import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Home.module.css";

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isStopping, setIsStopping] = useState(false);
  const [liveCaption, setLiveCaption] = useState("");
  const [captionIndex, setCaptionIndex] = useState(0);

  // Animation variants for page entrance
  const containerVariants = {
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

  const demoCaptions = [
    "Listening for audio input...",
    "Detecting voice patterns...",
    "Analyzing frequency modulation...",
    "Processing speech clarity...",
    "Identifying background noise levels...",
    "Calculating confidence scores...",
    "Finalizing audio analysis...",
  ];

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setCaptionIndex((prev) => {
          const nextIndex = (prev + 1) % demoCaptions.length;
          setLiveCaption(demoCaptions[prev]);
          return nextIndex;
        });
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleBubbleClick = () => {
    if (!isActive) {
      // Start recording
      setIsActive(true);
      setIsAnimating(true);
      setIsRecording(true);
      setShowTooltip(false);
      setShowText(true);
      setLiveCaption(demoCaptions[0]);
    } else {
      // Stop recording - show red border briefly
      handleStopRecording();
    }
  };

  const handleStopRecording = () => {
    setIsStopping(true);
    setIsRecording(false);
    setIsAnimating(false);
    setLiveCaption("");

    // After brief red border, reset to normal
    setTimeout(() => {
      setIsStopping(false);
      setIsActive(false);
    }, 500);
  };

  const handleClosePrompt = () => {
    // Stop all animations and reset to normal state
    setIsAnimating(false);
    setIsRecording(false);
    setIsActive(false);
    setIsStopping(false);
    setShowText(false);
    setLiveCaption("");
  };

  const handleBubbleHover = () => {
    if (!isActive) {
      setShowTooltip(true);
    }
  };

  const handleBubbleLeave = () => {
    setShowTooltip(false);
  };

  const getAnimationVariants = (delay = 0) => {
    if (!isAnimating) {
      return {
        initial: { scaleY: 0.1 },
        animate: { scaleY: 0.1 },
      };
    }

    return {
      initial: { scaleY: 0.1 },
      animate: {
        scaleY: [0.1, 1.2, 0.8, 1.5, 0.6, 1.3, 0.4, 1.1, 0.3, 1.4, 0.1],
        transition: {
          duration: 2,
          delay: delay,
          ease: "easeInOut",
          repeat: Infinity,
        },
      },
    };
  };

  const sampleText =
    "Voice analysis complete. The audio patterns show consistent frequency modulation with optimal clarity. Background noise is minimal and speech recognition confidence is high.";

  return (
    <motion.div
      className={styles.wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.backgroundPattern}
      />

      <AnimatePresence>
        {showText && (
          <motion.div
            className={styles.textContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <div className={styles.textHeader}>
                <h3>
                  {isRecording ? (
                    <div className={styles.recordingTitle}>
                      <span className={styles.recordingDot}></span>
                      Live Recording
                    </div>
                  ) : (
                    "Analysis Complete"
                  )}
                </h3>
                <button
                  className={styles.closeButton}
                  onClick={handleClosePrompt}
                  aria-label="Close analysis"
                >
                  ×
                </button>
              </div>

              <div className={styles.textBody}>
                {isRecording ? (
                  <div className={styles.liveCaptionContainer}>
                    <motion.p
                      key={captionIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.liveCaption}
                    >
                      {liveCaption}
                    </motion.p>
                    <div className={styles.waveform}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          className={styles.waveBar}
                          animate={{
                            scaleY: [0.3, 1.2, 0.3],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <p>{sampleText}</p>
                )}
              </div>

              <div className={styles.textFooter}>
                <span className={styles.timestamp}>
                  {isRecording
                    ? "Recording in progress..."
                    : "Analysis completed just now"}
                </span>
                {!isRecording && (
                  <div className={styles.confidence}>
                    <span className={styles.confidenceLabel}>Confidence:</span>
                    <span className={styles.confidenceValue}>94%</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bubble Container */}
      <motion.div
        className={styles.floatingBubble}
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              className={styles.tooltip}
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <span>Click to start recording</span>
              <div className={styles.tooltipArrow}></div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className={`${styles.bubble} ${
            isRecording
              ? styles.recording
              : isStopping
              ? styles.stopping
              : styles.normal
          }`}
          onClick={handleBubbleClick}
          onMouseEnter={handleBubbleHover}
          onMouseLeave={handleBubbleLeave}
        >
          <div className={styles.barsContainer}>
            <motion.span
              className={`${styles.bar} ${styles.blue}`}
              {...getAnimationVariants(0)}
            />
            <motion.span
              className={`${styles.bar} ${styles.red}`}
              {...getAnimationVariants(0.1)}
            />
            <motion.span
              className={`${styles.bar} ${styles.yellow}`}
              {...getAnimationVariants(0.2)}
            />
            <motion.span
              className={`${styles.bar} ${styles.green}`}
              {...getAnimationVariants(0.3)}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
