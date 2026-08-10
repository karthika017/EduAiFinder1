import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Compass, Search } from 'lucide-react';
// 🟢 Reuse CategoryCard CSS directly to guarantee identical styling
import '../CategoryCard/CategoryCard.css';

function RoleCard() {
  const navigate = useNavigate();

  const roles = [
    {
      id: "student",
      title: "Student",
      path: "/student",
      icon: <GraduationCap size={28} />
    },
    {
      id: "teacher",
      title: "Teacher",
      path: "/teacher",
      icon: <Compass size={28} />
    },
    {
      id: "researcher",
      title: "Researcher",
      path: "/researcher",
      icon: <Search size={28} />
    }
  ];

  return (
    <section className="category-section">
      <h2 className="category-title">Select Your Role</h2>
      <div className="category-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '900px', margin: '0 auto' }}>
        {roles.map((role) => (
          <button
            type="button"
            key={role.id}
            className="category-card-item"
            onClick={() => navigate(role.path)}
          >
            <div className="category-icon-box">
              {role.icon}
            </div>
            <h3>{role.title}</h3>
          </button>
        ))}
      </div>
    </section>
  );
}

export default RoleCard;