import React from 'react';
import { 
  BookOpen, Compass, Search, Code, Edit3, BarChart3, 
  Image, Languages, Video, Mic, FileText, Briefcase, 
  Brain, FileEdit, BookOpenCheck, Newspaper, Tags 
} from 'lucide-react';
import './CategoryCard.css';

function CategoryCard({ selectedCategory, onSelectCategory }) {
  const categories = [
    { title: "Learning", icon: <BookOpen size={28} /> },
    { title: "Teaching", icon: <Compass size={28} /> },
    { title: "Research", icon: <Search size={28} /> },
    { title: "Programming", icon: <Code size={28} /> },
    { title: "Writing", icon: <Edit3 size={28} /> },
    { title: "Presentation", icon: <BarChart3 size={28} /> },
    { title: "Image Generation", icon: <Image size={28} /> },
    { title: "Data Analysis", icon: <BarChart3 size={28} /> },
    { title: "Translation", icon: <Languages size={28} /> },
    { title: "Video Creation", icon: <Video size={28} /> },
    { title: "Audio & Speech", icon: <Mic size={28} /> },
    { title: "Document Processing", icon: <FileText size={28} /> },
    { title: "Productivity", icon: <Briefcase size={28} /> },
    { title: "Brainstorming & Creativity", icon: <Brain size={28} /> },
    { title: "Summarizer", icon: <FileEdit size={28} /> },
    { title: "Storytelling", icon: <BookOpenCheck size={28} /> },
    { title: "Blog Creation", icon: <Newspaper size={28} /> },
    { title: "Title Generation", icon: <Tags size={28} /> }
  ];

  return (
    <section className="category-section">
      <h2 className="category-title">Explore by Category</h2>
      <div className="category-grid">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.title;
          return (
            <button 
              type="button"
              key={cat.title} 
              className={`category-card-item ${isSelected ? 'selected' : ''}`}
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory(cat.title);
                }
              }}
            >
              <div className="category-icon-box">
                {cat.icon}
              </div>
              <h3>{cat.title}</h3>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryCard;