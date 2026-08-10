import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Teacher() {
  const navigate = useNavigate();

  const teacherTasks = [
    { id: 1, title: "Lesson Planning & Curriculum Design", category: "Learning" },
    { id: 2, title: "Quiz & Test Generator", category: "Learning" },
    { id: 3, title: "Automated Grading & Feedback", category: "Writing" },
    { id: 4, title: "Presentation & Slide Decks", category: "Presentation" },
    { id: 5, title: "Plagiarism & AI Detection", category: "Writing" },
    { id: 6, title: "Student Analytics & Progress", category: "Productivity" },
    { id: 7, title: "Interactive Worksheets", category: "Learning" },
    { id: 8, title: "Classroom Management", category: "Productivity" },
    { id: 9, title: "Parent Communication & Emails", category: "Writing" },
    { id: 10, title: "Special Education & Adaptations", category: "Learning" }
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
            Select a task for <span style={{ color: "#2563eb" }}>Teacher</span>:
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {teacherTasks.map((task) => (
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

export default Teacher;