import { useState, useEffect } from 'react';
import './App.css';
import AppBarComp from './AppBarComp';
import PictureGrid from './Picturegrid';

const CATEGORIES = ['All', 'Landmarks', 'Vehicles', 'Concerts'];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'BST Photography | Baldeep Singh Taluja';
  }, []);

  const images = [
    { src: './photo_6005941701492986367_y.jpg' },
    { src: './photo_5956209519258355156_y.jpg' },
    { src: './IMG_5884187955701074819_y.jpg' },
    { src: './photo_6005941701492986374_y.jpg' },
    { src: './photo_5956209519258355161_y.jpg' },
    { src: './photo_5830001630387488125_y.jpg' },
    { src: './IMG_6005941701492986377_y.jpg' },
    { src: './photo_6005941701492986373_y.jpg' },
    { src: './IMG_5830001630387488130_y.jpg' },
    { src: './photo_5956209519258355153_y.jpg' },
    { src: './photo_6005941701492986368_y.jpg' },
    { src: './IMG_5861732732806219911_y.jpg' },
    { src: './photo_6005941701492986375_y.jpg' },
    { src: './IMG_5830001630387488128_y.jpg' },
    { src: './IMG_5861732732806219912_y.jpg' },
    { src: './photo_5830001630387488124_y.jpg' },
    { src: './IMG_5830001630387488117_y.jpg' },
    { src: './photo_5830001630387488129_y.jpg' },
    { src: './IMG_5861732732806219914_y.jpg' },
    { src: './IMG_5830001630387488134_y.jpg' },
    { src: './photo_6005941701492986366_y.jpg' },
    { src: './photo_5956209519258355158_y.jpg' },
    { src: './IMG_6005941701492986376_y.jpg' },
    { src: './IMG_5861732732806219915_y.jpg' },
    { src: './IMG_5830001630387488116_y.jpg' },
    { src: './photo_5830001630387488123_y.jpg' },
    { src: './photo_5830001630387488120_y.jpg' },
    { src: './IMG_5830001630387488137_y.jpg' },
    { src: './photo_6005941701492986369_y.jpg' },
    { src: './IMG_5830001630387488138_y.jpg' },
    { src: './IMG_5830001630387488126_y.jpg' },
    { src: './photo_5956209519258355152_y.jpg' },
    { src: './photo_5830001630387488121_y.jpg' },
    { src: './IMG_5884187955701074822_y.jpg' },
    { src: './IMG_5897756423109068439_y.jpg' },
    { src: './photo_5830001630387488119_y.jpg' },
    { src: './IMG_5830001630387488113_y.jpg' },
    { src: './photo_5956209519258355159_y.jpg' },
    { src: './IMG_5861732732806219910_y.jpg' },
    { src: './photo_5956209519258355160_y.jpg' },
    { src: './IMG_5830001630387488114_y.jpg' },
    { src: './photo_5956209519258355154_y.jpg' },
    { src: './photo_5956209519258355155_y.jpg' },
    { src: './photo_5830001630387488127_y.jpg' },
    { src: './IMG_5830001630387488122_y.jpg' },
    { src: './IMG_5884187955701074817_y.jpg' },
    { src: './IMG_5884187955701074818_y.jpg' },
    { src: './IMG_5884187955701074816_y.jpg' },
    { src: './IMG_5861732732806219909_y.jpg' },
    { src: './IMG_5884187955701074815_y.jpg' },
    { src: './IMG_5830001630387488115_y.jpg' },
    { src: './photo_6012711162656966772_y.jpg' },
    { src: './concert_0085.JPG' },
    { src: './concert_0088.JPG' },
    { src: './concert_0104.JPG' },
    { src: './concert_0144.JPG' },
    { src: './IMG_0478.JPG' },
    { src: './photo_0888.JPG' },
    { src: './IMG_0894.JPG' },
    { src: './IMG_0898.JPG' },
    { src: './IMG_0935.JPG' },
    { src: './IMG_1068.JPG' },
    { src: './photo_1311.JPG' },
    { src: './photo_1313.JPG' },
    { src: './IMG_1473.JPG' },
    { src: './photo_1483.JPG' },
    { src: './photo_1494.JPG' },
    { src: './photo_1499.JPG' },
    { src: './photo_1518.JPG' },
    { src: './IMG_9363.JPG' },
    { src: './IMG_9379.JPG' },
    { src: './IMG_9435.JPG' },
    { src: './IMG_9501.JPG' },
    { src: './IMG_5794054377617605739_w.jpg' },
    { src: './IMG_5830001630387488135_y.jpg' },
    { src: './IMG_5830001630387488141_y.jpg' },
    { src: './IMG_5861732732806219913_y.jpg' },
    { src: './IMG_5884187955701074814_y.jpg' },
    { src: './IMG_5884187955701074820_y.jpg' },
    { src: './IMG_6005941701492986370_y.jpg' },
    { src: './IMG_6005941701492986371_y.jpg' },
    { src: './photo_6005941701492986365_y.jpg' },
    { src: './photo_rr.jpg' },
  ].map(img => ({
    ...img,
    category: img.src.startsWith('./IMG_')
      ? 'Landmarks'
      : img.src.startsWith('./concert_')
      ? 'Concerts'
      : 'Vehicles',
  }));

  const filteredImages =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      <AppBarComp />

      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__content">
          <p className="hero__label">Photography Portfolio</p>
          <h1 className="hero__title">
            Through the
            <br />
            <span className="hero__title-accent">Lens</span>
          </h1>
          <p className="hero__subtitle">
            Landmark &amp; Vehicle Photography by Baldeep Singh Taluja
          </p>
          <div className="hero__actions">
            <a href="#gallery" className="hero__btn hero__btn--primary">
              View Gallery
            </a>
            <button
              className="hero__btn hero__btn--secondary"
              onClick={() => window.open('./Baldeep Singh Taluja Resume.pdf', '_blank')}
            >
              View Resume
            </button>
          </div>
        </div>
        <div className="hero__scroll">
          <span className="hero__scroll-text">Scroll</span>
          <span className="hero__scroll-line" />
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="about">
        <div className="about__inner">
          <div className="about__header">
            <span className="section-tag">About</span>
            <h2 className="section-title">The Story</h2>
          </div>
          <div className="about__content">
            <p className="about__text">
              I'm <strong>Baldeep Singh Taluja</strong>, a Sophmore student at American University of
              Sharjah (Class of 2029) with a strong passion for software development, data analysis,
              and creative tech projects.
            </p>
            <p className="about__text">
              Photography has been my passion since I was 10, capturing the world through my lens. My
              journey started with a simple point-and-shoot camera, and over the years, it has grown
              into a dedicated craft. I specialize in landmark and vehicle photography — finding beauty
              in architecture, machines, and the spaces between.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Gallery Section ===== */}
      <section className="gallery-section" id="gallery">
        <div className="gallery-section__inner">
          <div className="gallery-section__header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Gallery</h2>
            <p className="gallery-section__desc">
              A curated collection of moments frozen in time
            </p>
          </div>

          {/* Filter bar */}
          <div className="filter-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="filter-btn__count">
                    {images.filter((img) => img.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <PictureGrid images={filteredImages} />
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__text">&copy; {new Date().getFullYear()} BST Photography. All rights reserved.</p>
          <div className="footer__links">
            <a href="https://www.instagram.com/bst.photography_/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://github.com/BoltDrifter" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/baldeep-singh-t-606348266/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
