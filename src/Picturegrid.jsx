import React, { useState, useEffect, useRef } from 'react';
import './PictureGrid.css';

function PictureGrid({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rowHeight = parseInt(
      window.getComputedStyle(container).getPropertyValue('grid-auto-rows')
    );
    const rowGap = parseInt(
      window.getComputedStyle(container).getPropertyValue('gap')
    );

    const items = container.querySelectorAll('.picture-item');

    const calculateSpan = () => {
      items.forEach((item) => {
        const img = item.querySelector('img');
        if (!img) return;

        const height = img.getBoundingClientRect().height;
        // Use ceil to avoid whitespace
        const span = Math.ceil((height + rowGap) / (rowHeight + rowGap));
        item.style.setProperty('--span', span);
      });
    };

    // Wait for all images to load before calculating spans
    const imagesElements = container.querySelectorAll('img');
    let loadedCount = 0;
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === imagesElements.length) {
        calculateSpan();
      }
    };

    imagesElements.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.onload = checkAllLoaded;
        img.onerror = checkAllLoaded;
      }
    });

    // Recalculate on window resize (debounced)
    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculateSpan, 150);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [images]);

  return (
    <>
      <div className="picture-grid" ref={containerRef}>
        {images.map((img, index) => (
          <div
            key={index}
            className="picture-item"
            onClick={() => openLightbox(img)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter') openLightbox(img);
            }}
          >
            <img src={img.src} alt={img.alt || `Image ${index + 1}`} />
            {img.caption && <div className="caption">{img.caption}</div>}
          </div>
        ))}
      </div>

      {lightboxOpen && selectedImage && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <span
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') closeLightbox();
            }}
          >
            &times;
          </span>
          <img
            className="lightbox-img"
            src={selectedImage.src}
            alt={selectedImage.alt || 'Enlarged Image'}
            onClick={(e) => e.stopPropagation()}
          />
          {selectedImage.caption && (
            <div className="lightbox-caption">{selectedImage.caption}</div>
          )}
        </div>
      )}
    </>
  );
}

export default PictureGrid;
