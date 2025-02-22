
import  { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const SettingsPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Update the sidebar state based on the window width
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);  // Open sidebar by default on large screens
      } else {
        setSidebarOpen(false); // Close sidebar by default on small screens
      }
    };

    // Add event listener for window resizing
    window.addEventListener("resize", handleResize);
    handleResize();  // Call it initially

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div
        className="main-content p-3"
        style={{
          marginLeft: isSidebarOpen ? "250px" : "0", // Dynamically adjust the margin
          marginTop: "60px", // Adjust for navbar height on small screens
          transition: "margin-left 0.3s ease",
        }}
      >
        <h1>Welcome to the SettingsPage</h1>
        <p>SettingsPage</p>
      </div>
    </div>
  );
};

export default SettingsPage;
