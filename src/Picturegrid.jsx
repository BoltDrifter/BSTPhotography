import { useState, useEffect, useCallback, useRef } from 'react';
import './PictureGrid.css';

function PictureGrid({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const gridRef = useRef(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setSelectedIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

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

  // Scroll-triggered fade-in via IntersectionObserver
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleItems((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target); // only animate once
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1,
      }
    );

    const items = grid.querySelectorAll('.picture-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, [images]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  return (
    <>
      <div className="picture-grid" ref={gridRef}>
        {images.map((img, index) => (
          <div
            key={img.src}
            className={`picture-item ${visibleItems.has(index) ? 'picture-item--visible' : ''}`}
            data-index={index}
            style={{ transitionDelay: `${Math.min(index, 19) * 40}ms` }}
            onClick={() => openLightbox(index)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter') openLightbox(index);
            }}
          >
            <img
              src={img.src}
              alt={img.alt || `Image ${index + 1}`}
              loading="lazy"
            />
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
          {/* Close button */}
          <span
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') closeLightbox();
            }}
          >
            &#10005;
          </span>

          {/* Previous arrow */}
          <button
            className="lightbox-nav lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            className="lightbox-img"
            src={selectedImage.src}
            alt={selectedImage.alt || 'Enlarged Image'}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next arrow */}
          <button
            className="lightbox-nav lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {selectedImage.caption && (
            <div className="lightbox-caption">{selectedImage.caption}</div>
          )}

          {/* Image counter */}
          <div className="lightbox-counter">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

export default PictureGrid;

