import React from "react";
import { Link } from "react-router-dom";

const tools = [
  {
    id: 1,
    name: "Khanmigo",
    desc: "Interactive AI tutor developed by Khan Academy for step-by-step guidance.",
    url: "https://www.khanacademy.org/khanmigo",
  },
  {
    id: 2,
    name: "Quizlet AI",
    desc: "Automated flashcards, practice tests, and smart study guides.",
    url: "https://quizlet.com",
  },
  {
    id: 3,
    name: "Socratic by Google",
    desc: "Visual homework assistant that provides step-by-step explanations.",
    url: "https://socratic.org",
  },
  {
    id: 4,
    name: "Duolingo Max",
    desc: "AI-powered language tutor providing conversational practice and feedback.",
    url: "https://www.duolingo.com",
  },
  {
    id: 5,
    name: "StudySmarter (Vaia)",
    desc: "AI study planner and auto-flashcard generator.",
    url: "https://www.studysmarter.de",
  },
  {
    id: 6,
    name: "Perplexity AI",
    desc: "Real-time AI research engine providing direct citations and web answers.",
    url: "https://www.perplexity.ai",
  },
  {
    id: 7,
    name: "Claude AI",
    desc: "Advanced conversational assistant built for deep reading and complex analysis.",
    url: "https://claude.ai",
  },
  {
    id: 8,
    name: "Google NotebookLM",
    desc: "Personal study notebook that turns your documents into audio discussions.",
    url: "https://notebooklm.google.com",
  },
  {
    id: 9,
    name: "Notion AI",
    desc: "Workspace organizer to structure notes, timelines, and study schedules.",
    url: "https://www.notion.so",
  },
  {
    id: 10,
    name: "Otter.ai",
    desc: "Automated lecture transcriber and real-time smart note generator.",
    url: "https://otter.ai",
  },
];

export default function AITools() {
  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh", padding: "40px 6%", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      
      {/* Header Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 36px" }}>
        <Link to="/categories" style={{ textDecoration: "none", color: "#1d4ed8", fontWeight: "600", fontSize: "0.95rem" }}>
          ← Back to All Categories
        </Link>
        <h1 style={{ fontSize: "2.5rem", color: "#0f172a", margin: "16px 0 8px", fontWeight: "800" }}>
          Top 10 AI Tools for <span style={{ color: "#2563eb" }}>Learning</span>
        </h1>
        <p style={{ color: "#64748b", fontSize: "1.1rem", margin: 0 }}>
          Handpicked tools to boost productivity and learning in Learning.
        </p>
      </div>

      {/* Side-by-Side Cards Grid Container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "24px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#2563eb",
                  backgroundColor: "#eff6ff",
                  padding: "4px 10px",
                  borderRadius: "20px",
                }}
              >
                #{tool.id}
              </span>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#0f172a", margin: "14px 0 8px" }}>
                {tool.name}
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.5", margin: "0 0 20px" }}>
                {tool.desc}
              </p>
            </div>

            <a
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#2563eb",
                fontWeight: "600",
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Visit Site <span style={{ marginLeft: "4px" }}>↗</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}