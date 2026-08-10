import React, { useState } from "react";
import categoryToolsData from "../../data/categories.json";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Flatten all tools from categories.json into a single array
  const allTools = Object.entries(categoryToolsData).flatMap(
    ([category, tools]) =>
      tools.map((tool) => ({ ...tool, categoryName: category }))
  );

  // 2. Filter tools based on what the user types
  const filteredTools =
    searchQuery.trim() === ""
      ? []
      : allTools.filter(
          (tool) =>
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <section
      style={{
        textAlign: "center",
        padding: "60px 20px 40px",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: "800",
          color: "#0f4c81",
          marginBottom: "12px",
          letterSpacing: "-0.5px",
        }}
      >
        EduAI Finder
      </h1>

      {/* Subheading */}
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          color: "#334155",
          marginBottom: "32px",
        }}
      >
        Discover the Right AI Tools for Education
      </h2>

      {/* Search Bar Container */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search AI tools..."
            style={{
              width: "100%",
              padding: "16px 50px 16px 24px",
              fontSize: "1.05rem",
              borderRadius: "50px",
              border: "1px solid #cbd5e1",
              backgroundColor: "#f1f5f9",
              outline: "none",
              color: "#475569",
            }}
          />
          <svg
            style={{
              position: "absolute",
              right: "20px",
              width: "20px",
              height: "20px",
              fill: "none",
              stroke: "#64748b",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              pointerEvents: "none",
            }}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        {/* 3. Search Results Dropdown */}
        {searchQuery.trim() !== "" && (
          <div
            style={{
              position: "absolute",
              top: "110%",
              left: 0,
              right: 0,
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e2e8f0",
              zIndex: 100,
              maxHeight: "320px",
              overflowY: "auto",
              textAlign: "left",
            }}
          >
            {filteredTools.length > 0 ? (
              filteredTools.map((tool, idx) => (
                <a
                  key={idx}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 20px",
                    borderBottom:
                      idx === filteredTools.length - 1
                        ? "none"
                        : "1px solid #f1f5f9",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f8fafc")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ffffff")
                  }
                >
                  <div>
                    <div
                      style={{
                        fontWeight: "700",
                        color: "#0f172a",
                        fontSize: "1rem",
                      }}
                    >
                      {tool.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "#64748b",
                        marginTop: "2px",
                      }}
                    >
                      {tool.description}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      color: "#2563eb",
                      backgroundColor: "#eff6ff",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      whiteSpace: "nowrap",
                      marginLeft: "12px",
                    }}
                  >
                    {tool.categoryName} ↗
                  </span>
                </a>
              ))
            ) : (
              /* No Result Message */
              <div
                style={{
                  padding: "20px",
                  color: "#94a3b8",
                  textAlign: "center",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                }}
              >
                No results found for "{searchQuery}"
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}