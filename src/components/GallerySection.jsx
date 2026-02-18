import { useState, useEffect, useRef } from 'react';
import './GallerySection.css';

function GallerySection({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({});
  const galleryRef = useRef(null);

  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions = {};
      for (const img of images) {
        const image = new Image();
        image.onload = () => {
          dimensions[img.src] = {
            width: image.naturalWidth,
            height: image.naturalHeight,
            ratio: image.naturalWidth / image.naturalHeight,
          };
          setImageDimensions((prev) => ({ ...prev, ...dimensions }));
        };
        image.src = img.src;
      }
    };
    loadImageDimensions();
  }, [images]);

  const openLightbox = (img) => {
    setSelectedImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (lightboxOpen) {
      document.body.classList.add('lightbox-open');
    } else {
      document.body.classList.remove('lightbox-open');
    }
    return () => {
      document.body.classList.remove('lightbox-open');
    };
  }, [lightboxOpen]);

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="gallery-header">
          <div className="gallery-header-content">
            <span className="gallery-number">02</span>
            <h2 className="gallery-title">Selected Works</h2>
          </div>
          <p className="gallery-subtitle">
            A curated collection of automotive and architectural photography
          </p>
        </div>

        <div className="gallery-grid" ref={galleryRef}>
          {images.map((img, index) => {
            const dims = imageDimensions[img.src];
            const aspectRatio = dims ? dims.ratio : 1;

            return (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') openLightbox(img);
                }}
                style={{
                  aspectRatio: aspectRatio,
                }}
              >
                <div className="gallery-item-wrapper">
                  <img
                    src={img.src}
                    alt={img.alt || `Photography work ${index + 1}`}
                    className="gallery-item-image"
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {lightboxOpen && selectedImage && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
            type="button"
          >
            <span className="close-line close-line-1"></span>
            <span className="close-line close-line-2"></span>
          </button>
          <img
            className="lightbox-img"
            src={selectedImage.src}
            alt={selectedImage.alt || 'Enlarged Image'}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default GallerySection;
