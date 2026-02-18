import './AboutSection.css';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-number">03</span>
          <h2 className="about-title">Philosophy</h2>
        </div>

        <div className="about-content">
          <div className="about-text-block">
            <p className="about-lead">
              A journey that began with a simple point-and-shoot camera at age ten
              has evolved into a distinctive visual language.
            </p>
          </div>

          <div className="about-details">
            <p className="about-paragraph">
              Photography has been my passion since I was 10, capturing the world
              through my lens. Over the years, it has grown from a childhood hobby
              into a refined craft. I specialize in landmark and vehicle photography,
              with a focus on architectural elegance and automotive design.
            </p>

            <p className="about-paragraph">
              Currently a high school student at Cambridge International School,
              Dubai (Class of 2025), I merge my passion for software development
              and data analysis with creative visual storytelling. Each photograph
              represents a careful study of light, form, and composition.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Works</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">2025</span>
                <span className="stat-label">Dubai Based</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
