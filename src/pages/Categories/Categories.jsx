import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import categoryToolsData from "../../data/categories.json";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Categories.css";

function Categories() {
  const location = useLocation();
  const navigate = useNavigate();

  // Reads the clicked category (defaults to "Learning" if accessed directly)
  const rawCategory = location.state?.selectedCategory || "Learning";

  // Match JSON key using root word prefixes (e.g., "summar" matches both "Summarization" and "Summarizer")
  const matchedCategoryKey = Object.keys(categoryToolsData || {}).find((key) => {
    const jsonKey = key.toLowerCase().trim();
    const query = rawCategory.toLowerCase().trim();

    const cleanJsonKey = jsonKey.split(/\s*(&|and)\s*/)[0];
    const cleanQuery = query.split(/\s*(&|and)\s*/)[0];

    return (
      jsonKey === query ||
      query.includes(cleanJsonKey) ||
      jsonKey.includes(cleanQuery) ||
      cleanJsonKey.slice(0, 4) === cleanQuery.slice(0, 4)
    );
  });

  const displayCategory = rawCategory;
  const tools = matchedCategoryKey ? categoryToolsData[matchedCategoryKey] : [];

  // Automatically scroll down to the category section if URL has #explore-by-category
  useEffect(() => {
    if (location.hash === "#explore-by-category") {
      const element = document.getElementById("explore-by-category");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <div className="categories-page" style={{ minHeight: "70vh", padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate("/")} 
          style={{
            background: "none",
            border: "none",
            color: "#0f4c81",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          ← Back to All Categories
        </button>

        {/* Header Title with id for navbar scroll target */}
        <div id="explore-by-category" className="categories-header" style={{ marginBottom: "30px" }}>
          <h1 style={{ color: "#0f4c81", fontSize: "32px", marginBottom: "8px" }}>
            Top 10 AI Tools for <span style={{ color: "#2563eb" }}>{displayCategory}</span>
          </h1>
          <p style={{ color: "#64748b" }}>
            Handpicked tools to boost productivity and learning in {displayCategory}.
          </p>
        </div>

        {/* Display tools using side-by-side grid */}
        <div 
          className="tools-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px"
          }}
        >
          {tools.length > 0 ? (
            tools.map((tool, index) => (
              <div 
                key={index} 
                className="tool-item-card"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div className="tool-card-header" style={{ marginBottom: "12px" }}>
                    <span 
                      className="tool-rank"
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: "700",
                        color: "#2563eb",
                        backgroundColor: "#eff6ff",
                        padding: "4px 10px",
                        borderRadius: "20px"
                      }}
                    >
                      {index + 1}
                    </span>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#0f172a", margin: "10px 0 6px" }}>
                      {tool.name}
                    </h3>
                  </div>
                  <p className="tool-description" style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.5", margin: "0 0 20px" }}>
                    {tool.description}
                  </p>
                </div>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-site-btn"
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center"
                  }}
                >
                  Visit Site ↗
                </a>
              </div>
            ))
          ) : (
            <p>No tools found for "{displayCategory}".</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Categories;