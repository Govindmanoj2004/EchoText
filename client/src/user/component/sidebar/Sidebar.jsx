import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Sidebar.module.css";

const Sidebar = ({ isOpen, onToggle }) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const sidebarVariants = {
    closed: {
      width: 80,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      width: 280,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const contentVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  const recentHistory = [
    {
      id: 1,
      title: "Meeting Analysis",
      time: "2 hours ago",
      duration: "15:32",
    },
    { id: 2, title: "Voice Note", time: "Yesterday", duration: "02:15" },
    {
      id: 3,
      title: "Interview Recording",
      time: "2 days ago",
      duration: "45:18",
    },
  ];

  const moreOptions = [
    { label: "Settings", action: () => console.log("Settings clicked") },
    { label: "Report Issue", action: () => console.log("Report clicked") },
    {
      label: "Logout",
      action: () => console.log("Logout clicked"),
      isDestructive: true,
    },
  ];

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  return (
    <motion.div
      className={styles.sidebar}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
    >
      {/* Header with Toggle */}
      <div className={styles.header}>
        <motion.button
          className={styles.toggleButton}
          onClick={onToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? "←" : "☰"}
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.logo}
              initial="closed"
              animate="open"
              exit="closed"
              variants={contentVariants}
            >
              <span className={styles.logoText}>EchoType</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* History Section */}
      <div className={styles.historySection}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={contentVariants}
            >
              <h3 className={styles.sectionTitle}>History</h3>
              <div className={styles.historyList}>
                {recentHistory.map((item) => (
                  <div key={item.id} className={styles.historyItem}>
                    <div className={styles.historyContent}>
                      <span className={styles.historyTitle}>{item.title}</span>
                      <span className={styles.historyTime}>{item.time}</span>
                    </div>
                    <span className={styles.historyDuration}>
                      {item.duration}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* User Profile Section */}
      <div className={styles.profileSection}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <span className={styles.avatarInitial}>J</span>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={styles.profileInfo}
                initial="closed"
                animate="open"
                exit="closed"
                variants={contentVariants}
              >
                <span className={styles.profileName}>John Doe</span>
                <span className={styles.profileEmail}>john@example.com</span>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={styles.moreContainer}
                initial="closed"
                animate="open"
                exit="closed"
                variants={contentVariants}
              >
                <button
                  className={styles.moreButton}
                  onClick={toggleMoreOptions}
                >
                  <span>⋯</span>
                </button>

                <AnimatePresence>
                  {showMoreOptions && (
                    <motion.div
                      className={styles.moreOptions}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {moreOptions.map((option, index) => (
                        <button
                          key={option.label}
                          className={`${styles.optionItem} ${
                            option.isDestructive ? styles.destructive : ""
                          }`}
                          onClick={option.action}
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
