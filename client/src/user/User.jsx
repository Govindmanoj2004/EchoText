import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RouterUser from "./RouterUser.jsx";
import Sidebar from "./component/sidebar/Sidebar.jsx";
import styles from "./User.module.css";

const User = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.userContainer}>
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <div
        className={`${styles.mainContent} ${
          isSidebarOpen ? styles.sidebarOpen : ""
        }`}
      >
        <RouterUser />
      </div>
    </div>
  );
};

export default User;
