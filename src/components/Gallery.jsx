import React, { useState } from 'react';

const Gallery = () => {
    const images = [
        { src: '/images/holahoneypics/IMG_8890.jpeg', alt: 'Pure honey dripping from honeycomb' },
        { src: '/images/holahoneypics/IMG_8818.jpeg', alt: 'Sunlight filtering through Honduran apiary' },
        { src: '/images/holahoneypics/IMG_8892.jpeg', alt: 'Beekeeper inspecting healthy brood frame' },
        { src: '/images/holahoneypics/IMG_8894.jpeg', alt: 'Freshly harvested honey jars in the sunlight' },
        { src: '/images/holahoneypics/IMG_8899.jpeg', alt: 'Wild honeybees active on honeycomb' },
        { src: '/images/holahoneypics/IMG_9152.jpeg', alt: 'Close-up of golden honey harvest' },
        { src: '/images/holahoneypics/IMG_9156.jpeg', alt: 'Working with smoke to calm the bees' },
        { src: '/images/holahoneypics/IMG_9158.jpeg', alt: 'Mountain overlook of La Virtud' },
        { src: '/images/holahoneypics/IMG_9160.jpeg', alt: 'Healthy colony of honeybees' },
        { src: '/images/holahoneypics/IMG_9161.jpeg', alt: 'Raw honeycomb textures' },
        { src: '/images/holahoneypics/IMG_9162.jpeg', alt: 'Beekeeping harvest day' }
    ];

    const [visibleCount, setVisibleCount] = useState(6);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + 6, images.length));
    };

    const handleShowLess = () => {
        setVisibleCount(6);
    };

    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Behind the Jars</span>
                    <h2>Life at the <span className="text-gradient">Apiaries</span></h2>
                    <p>Raw, unfiltered glimpses of our work, beekeepers, hives, and the beautiful landscapes of La Virtud, Honduras.</p>
                </div>

                <div className="gallery-grid">
                    {images.slice(0, visibleCount).map((img, index) => (
                        <div 
                            key={index} 
                            className="gallery-card glass-panel"
                            onClick={() => openLightbox(index)}
                        >
                            <div className="gallery-img-wrapper">
                                <img 
                                    src={img.src} 
                                    alt={img.alt} 
                                    className="gallery-img" 
                                    loading="lazy"
                                />
                                <div className="gallery-hover-overlay">
                                    <span className="zoom-icon">🔍</span>
                                    <p className="gallery-caption">{img.alt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery-actions">
                    {visibleCount < images.length ? (
                        <button className="btn-primary" onClick={handleLoadMore}>
                            Load More Photos
                        </button>
                    ) : (
                        <button className="btn-secondary" onClick={handleShowLess}>
                            Show Less
                        </button>
                    )}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
                    
                    <button className="lightbox-arrow prev" onClick={prevImage}>&#8249;</button>
                    
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={images[lightboxIndex].src} 
                            alt={images[lightboxIndex].alt} 
                            className="lightbox-img" 
                        />
                        <div className="lightbox-caption-bar">
                            <p>{images[lightboxIndex].alt}</p>
                            <span>{lightboxIndex + 1} / {images.length}</span>
                        </div>
                    </div>
                    
                    <button className="lightbox-arrow next" onClick={nextImage}>&#8250;</button>
                </div>
            )}

            <style>{`
                .gallery-section {
                    padding: 120px 0;
                    background-color: #171412; /* Match Mission section background */
                    position: relative;
                }
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 30px;
                    margin-bottom: 50px;
                }
                .gallery-card {
                    cursor: pointer;
                    overflow: hidden;
                    border-radius: 20px;
                    padding: 8px;
                    background: rgba(255, 255, 255, 0.01);
                    transition: var(--transition);
                }
                .gallery-img-wrapper {
                    position: relative;
                    width: 100%;
                    padding-bottom: 75%; /* 4:3 Aspect Ratio */
                    overflow: hidden;
                    border-radius: 14px;
                }
                .gallery-img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .gallery-hover-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(18, 16, 14, 0.9) 0%, rgba(18, 16, 14, 0.2) 100%);
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 24px;
                    opacity: 0;
                    transition: var(--transition);
                }
                .gallery-card:hover .gallery-img {
                    transform: scale(1.08);
                }
                .gallery-card:hover .gallery-hover-overlay {
                    opacity: 1;
                }
                .zoom-icon {
                    font-size: 1.5rem;
                    color: var(--color-primary);
                    margin-bottom: auto;
                    align-self: flex-end;
                }
                .gallery-caption {
                    font-size: 0.95rem;
                    color: var(--color-text);
                    font-weight: 500;
                    line-height: 1.4;
                }
                .gallery-actions {
                    text-align: center;
                    margin-top: 20px;
                }
                
                /* Lightbox Styles */
                .lightbox {
                    position: fixed;
                    inset: 0;
                    background: rgba(10, 8, 7, 0.95);
                    backdrop-filter: blur(8px);
                    z-index: 2000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.3s ease;
                }
                .lightbox-content {
                    max-width: 90%;
                    max-height: 80vh;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .lightbox-img {
                    max-width: 100%;
                    max-height: 75vh;
                    object-fit: contain;
                    border-radius: 12px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                    border: 1px solid var(--color-glass-border);
                }
                .lightbox-caption-bar {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 8px 0;
                    color: var(--color-text);
                    font-family: var(--font-body);
                    font-size: 1rem;
                }
                .lightbox-caption-bar p {
                    font-weight: 500;
                }
                .lightbox-caption-bar span {
                    color: var(--color-text-muted);
                    font-size: 0.875rem;
                }
                .lightbox-close {
                    position: absolute;
                    top: 30px;
                    right: 40px;
                    background: none;
                    border: none;
                    color: var(--color-text);
                    font-size: 3rem;
                    cursor: pointer;
                    transition: var(--transition);
                    line-height: 1;
                    z-index: 2001;
                }
                .lightbox-close:hover {
                    color: var(--color-primary);
                }
                .lightbox-arrow {
                    background: none;
                    border: none;
                    color: var(--color-text);
                    font-size: 4rem;
                    cursor: pointer;
                    transition: var(--transition);
                    padding: 0 30px;
                    z-index: 2001;
                    user-select: none;
                }
                .lightbox-arrow:hover {
                    color: var(--color-primary);
                }
                @media (max-width: 768px) {
                    .lightbox-arrow {
                        padding: 0 10px;
                        font-size: 2.5rem;
                    }
                    .lightbox-close {
                        top: 20px;
                        right: 20px;
                        font-size: 2.5rem;
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </section>
    );
};

export default Gallery;
