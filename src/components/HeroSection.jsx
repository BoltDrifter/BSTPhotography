import './HeroSection.css';

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">Fashion & Editorial</span>
          <h1 className="hero-title">
            <span className="hero-title-line">Baldeep</span>
            <span className="hero-title-line">Singh</span>
            <span className="hero-title-line">Taluja</span>
          </h1>
          <p className="hero-description">
            Capturing moments through the lens of contemporary fashion photography
          </p>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src="./photo_6005941701492986367_y.jpg"
              alt="Featured photography work"
              className="hero-image"
            />
            <div className="hero-image-overlay"></div>
          </div>
          <div className="hero-image-caption">
            <span className="caption-year">2025</span>
            <span className="caption-divider">/</span>
            <span className="caption-collection">Portfolio</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <span className="scroll-line"></span>
      </div>
    </section>
  );
}

export default HeroSection;
