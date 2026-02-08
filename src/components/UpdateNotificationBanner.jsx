import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const UpdateNotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner has been shown before
    const hasSeenBanner = localStorage.getItem(
      "dsa-tracker-update-banner-seen",
    );
    if (!hasSeenBanner) {
      // Show banner after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("dsa-tracker-update-banner-seen", "true");
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        maxWidth: "320px",
        width: "calc(100% - 32px)",
        backgroundColor: "#1C2541",
        border: "2px solid #3A506B",
        borderRadius: "10px",
        padding: "0.875rem",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        animation: "slideInFromRight 0.5s ease-out",
      }}
    >
      <style>
        {`
          @keyframes slideInFromRight {
            from {
              transform: translateX(120%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @media (max-width: 768px) {
            .update-banner-container {
              bottom: 12px !important;
              right: 12px !important;
              left: 12px !important;
              max-width: none !important;
              width: calc(100% - 24px) !important;
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
        `}
      </style>

      {/* Close Button */}
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "transparent",
          border: "none",
          color: "#8D99AE",
          cursor: "pointer",
          padding: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#EDF2F4")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#8D99AE")}
        aria-label="Close notification"
      >
        <X size={16} />
      </button>

      {/* Content */}
      <div style={{ marginRight: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "8px",
          }}
        >
          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: "700",
              color: "#EDF2F4",
              margin: 0,
            }}
          >
            Topics Updated!
          </h3>
        </div>

        <p
          style={{
            fontSize: "0.8125rem",
            color: "#8D99AE",
            margin: "0",
            lineHeight: "1.4",
          }}
        >
          <p>All topics updated with latest sheet.</p>
          <p> Found this helpful? Share with your network on LinkedIn.</p>
        </p>
      </div>
    </div>
  );
};

export default UpdateNotificationBanner;
