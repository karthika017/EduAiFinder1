import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import RoleCard from "../../components/RoleCard/RoleCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Footer from "../../components/Footer/Footer";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  // Smoothly scrolls down to the grid when URL contains #categories
  useEffect(() => {
    if (location.hash === "#categories") {
      const element = document.getElementById("categories");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Navigates to top 10 tools page ONLY when an actual category card is clicked
  const handleCategoryClick = (categoryName) => {
    navigate("/categories", { state: { selectedCategory: categoryName } });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <RoleCard />

      {/* Section anchor ID for navbar link */}
      <section id="categories" style={{ scrollMarginTop: "20px" }}>
        <CategoryCard onSelectCategory={handleCategoryClick} />
      </section>

      <Footer />
    </>
  );
}

export default Home;