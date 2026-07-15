import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/dictionary';

const OurStory = () => {
    const { language } = useLanguage();
    const t = translations[language].story;

    return (
        <section id="story" className="story-section-home">
            <div className="container">
                <div className="story-grid">
                    <div className="story-image-container glass-panel">
                        <img 
                            src="/images/holahoneypics/IMG_9158.jpeg" 
                            alt={t.location} 
                            className="story-img-main" 
                        />
                        <div className="story-image-overlay">
                            <span className="location-tag">{t.location}</span>
                        </div>
                    </div>
                    <div className="story-text-container">
                        <span className="section-label">{t.label}</span>
                        <h2 className="story-headline">
                            {t.title1}<br />
                            <span className="text-gradient">{t.titleHighlight}</span>
                        </h2>
                        
                        <div className="story-paragraphs">
                            <p>
                                {t.paragraph1}
                            </p>
                            <p>
                                {t.paragraph2}
                            </p>
                            <p className="story-highlight">
                                {t.highlight}
                            </p>
                        </div>

                        <div className="story-actions">
                            <Link to="/learn-more" className="btn-secondary">
                                {t.cta}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .story-section-home {
                    padding: 120px 0;
                    background-color: var(--color-bg);
                    position: relative;
                }
                .story-grid {
                    display: grid;
                    grid-template-columns: 1.1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }
                .story-image-container {
                    position: relative;
                    padding: 12px;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
                .story-img-main {
                    width: 100%;
                    height: 100%;
                    max-height: 560px;
                    object-fit: cover;
                    border-radius: 18px;
                    display: block;
                }
                .story-image-overlay {
                    position: absolute;
                    bottom: 30px;
                    left: 30px;
                    z-index: 2;
                }
                .location-tag {
                    display: inline-block;
                    padding: 8px 16px;
                    background: rgba(18, 16, 14, 0.85);
                    border: 1px solid var(--color-glass-border);
                    backdrop-filter: blur(8px);
                    border-radius: 50px;
                    color: var(--color-text);
                    font-size: 0.875rem;
                    font-weight: 500;
                    font-family: var(--font-body);
                }
                .story-text-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .section-label {
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--color-primary);
                    margin-bottom: 16px;
                    display: inline-block;
                    font-family: var(--font-body);
                }
                .story-headline {
                    font-size: clamp(2.5rem, 4.5vw, 3.5rem);
                    margin-bottom: 30px;
                    color: var(--color-text);
                }
                .story-paragraphs p {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: var(--color-text-muted);
                    margin-bottom: 24px;
                }
                .story-highlight {
                    border-left: 3px solid var(--color-primary);
                    padding-left: 20px;
                    font-style: italic;
                    color: var(--color-text) !important;
                    margin-top: 30px;
                    font-size: 1.2rem !important;
                }
                .story-actions {
                    margin-top: 30px;
                }
                
                @media (max-width: 991px) {
                    .story-grid {
                        grid-template-columns: 1fr;
                        gap: 50px;
                    }
                    .story-text-container {
                        text-align: center;
                    }
                    .story-highlight {
                        text-align: left;
                    }
                    .story-img-main {
                        max-height: 450px;
                    }
                }
            `}</style>
        </section>
    );
};

export default OurStory;
