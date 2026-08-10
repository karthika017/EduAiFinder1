import "./ToolCard.css";

function ToolCard({ tool }) {
  return (
    <div className="tool-card">

      <h2>{tool.name}</h2>

      <p>{tool.description}</p>

      <h4>Pricing</h4>
      <span>{tool.pricing}</span>

      <br /><br />

      <a
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        className="visit-btn"
      >
        Visit Tool
      </a>

    </div>
  );
}

export default ToolCard;