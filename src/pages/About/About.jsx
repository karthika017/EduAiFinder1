import "./About.css";

function About() {
  return (
    <section className="about">
      <h2>About EduAI Finder</h2>

      <p>
        EduAI Finder is a web portal designed to help students,
        teachers, and researchers discover the right AI tools for
        education. The platform organizes AI tools based on user roles
        and academic categories, making it easier to find the best tool
        for learning, teaching, research, programming, writing,
        presentations, image generation, and data analysis.
      </p>

      <div className="mission">
        <h3>Our Mission</h3>

        <ul>
          <li>✔ Discover AI tools easily</li>
          <li>✔ Organize tools by role</li>
          <li>✔ Organize tools by category</li>
          <li>✔ Provide official website links</li>
        </ul>
      </div>
    </section>
  );
}

export default About;