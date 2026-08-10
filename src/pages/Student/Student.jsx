import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Student.css";

function Student() {
  const navigate = useNavigate();

  // List of tasks matching your design layout
  const tasksList = [
    { id: 1, title: "Create PPT & Presentations", category: "Presentation" },
    { id: 2, title: "Write Essays & Assignments", category: "Writing" },
    { id: 3, title: "Summarize Books & PDFs", category: "Summarizer" },
    { id: 4, title: "Math & Homework Solver", category: "Learning" },
    { id: 5, title: "Coding & Bug Fixing", category: "Programming" },
    { id: 6, title: "Language Learning & Translation", category: "Translation" },
    { id: 7, title: "Flashcards & Quiz Prep", category: "Learning" },
    { id: 8, title: "Note Taking & Audio Transcripts", category: "Audio & Speech" },
    { id: 9, title: "Research & Literature Search", category: "Research" },
    { id: 10, title: "Time Management & Productivity", category: "Productivity" }
  ];

  // Handler to navigate to Categories page passing the selected category
  const handleTaskClick = (categoryName) => {
    navigate("/categories", { state: { selectedCategory: categoryName } });
  };

  return (
    <>
      <Navbar />

      <div style={{ minHeight: "70vh", padding: "40px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        
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
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          ← Back to Home
        </button>

        {/* Task Box Container */}
        <div style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "36px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)"
        }}>
          <h2 style={{ color: "#0f4c81", fontSize: "22px", fontWeight: "700", marginBottom: "24px" }}>
            Select a task for <span style={{ color: "#0f4c81" }}>Student</span>:
          </h2>

          {/* 3-Column Task Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px"
          }}>
            {tasksList.map((task) => (
              <button
                key={task.id}
                onClick={() => handleTaskClick(task.category)}
                style={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  textAlign: "left",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#1e293b",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#eff6ff";
                  e.currentTarget.style.borderColor = "#2563eb";
                  e.currentTarget.style.color = "#2563eb";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#f8fafc";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.color = "#1e293b";
                }}
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

export default Student;