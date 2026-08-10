import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Researcher() {
  const navigate = useNavigate();

  const researcherTasks = [
    { id: 1, title: "Literature Search & Mapping", category: "Research" },
    { id: 2, title: "PDF Summarizer & Chat", category: "Summarizer" },
    { id: 3, title: "Citation & Reference Manager", category: "Research" },
    { id: 4, title: "Data Analysis & Visualization", category: "Research" },
    { id: 5, title: "Paper Writing & Drafting", category: "Writing" },
    { id: 6, title: "Grammar & Proofreading", category: "Writing" },
    { id: 7, title: "Journal Finder & Publishing", category: "Research" },
    { id: 8, title: "Code & Statistical Analysis", category: "Programming" },
    { id: 9, title: "Grant & Proposal Writing", category: "Writing" },
    { id: 10, title: "Peer Review Assistance", category: "Research" }
  ];

  const handleTaskClick = (categoryName) => {
    navigate("/categories", { state: { selectedCategory: categoryName } });
  };

  return (
    <>
      <Navbar />
      <div style={{ minHeight: "70vh", padding: "40px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <button 
          onClick={() => navigate("/")} 
          style={{ background: "none", border: "none", color: "#0f4c81", fontSize: "16px", fontWeight: "600", cursor: "pointer", marginBottom: "24px" }}
        >
          ← Back to Home
        </button>

        <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "36px", border: "1px solid #e2e8f0", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
          <h2 style={{ color: "#0f4c81", fontSize: "22px", fontWeight: "700", marginBottom: "24px" }}>
            Select a task for <span style={{ color: "#2563eb" }}>Researcher</span>:
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {researcherTasks.map((task) => (
              <button
                key={task.id}
                onClick={() => handleTaskClick(task.category)}
                style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "16px 20px", textAlign: "left", fontSize: "15px", fontWeight: "500", color: "#1e293b", cursor: "pointer", transition: "all 0.2s ease" }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#eff6ff"; e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.color = "#2563eb"; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#f8fafc"; e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.color = "#1e293b"; }}
              >
                {task.id}. {task.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Researcher;