import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/dictionary';

const MoreThanHoney = () => {
    const { language } = useLanguage();
    const t = translations[language].more;

    return (
        <section id="more-than-honey" className="more-than-honey-section">
            <div className="container">
                <div className="more-grid">
                    <div className="more-content">
                        <span className="section-label">{t.label}</span>
                        <h2 className="more-headline">
                            {t.title1}<br />
                            <span className="text-gradient">{t.titleHighlight}</span>
                        </h2>
                        
                        <div className="more-paragraphs">
                            <p>
                                {t.desc1}
                            </p>
                            <p>
                                {t.desc2}
                            </p>
                        </div>

                        <div className="milestone-box glass-panel">
                            <h4>{t.campaignTitle}</h4>
                            <p>
                                {t.campaignDesc}
                            </p>
                            <div className="social-tags-list">
                                <span className="social-pill">Instagram: @holahoney3</span>
                                <span className="social-pill">TikTok: @holahoney4</span>
                            </div>
                        </div>
                    </div>

                    <div className="more-image-wrapper glass-panel">
                        <img 
                            src="/images/holahoneypics/IMG_9150.jpeg" 
                            alt={t.caption} 
                            className="more-img" 
                        />
                        <div className="more-image-caption">
                            <span>{t.caption}</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .more-than-honey-section {
                    padding: 120px 0;
                    background-color: var(--color-bg);
                    position: relative;
                }
                .more-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.1fr;
                    gap: 80px;
                    align-items: center;
                }
                .more-content {
                    display: flex;
                    flex-direction: column;
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
                .more-headline {
                    font-size: clamp(2.5rem, 4.5vw, 3.5rem);
                    margin-bottom: 30px;
                    color: var(--color-text);
                }
                .more-paragraphs p {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: var(--color-text-muted);
                    margin-bottom: 24px;
                }
                .milestone-box {
                    margin-top: 30px;
                    padding: 30px;
                    border-radius: 20px;
                    background: rgba(217, 119, 6, 0.03);
                    border: 1px solid rgba(217, 119, 6, 0.1);
                }
                .milestone-box h4 {
                    font-size: 1.25rem;
                    color: var(--color-primary);
                    margin-bottom: 12px;
                    font-family: var(--font-body);
                    font-weight: 600;
                }
                .milestone-box p {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--color-text-muted);
                    margin-bottom: 20px;
                }
                .social-tags-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .social-pill {
                    display: inline-block;
                    padding: 8px 16px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--color-glass-border);
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--color-text);
                }
                .more-image-wrapper {
                    position: relative;
                    padding: 12px;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
                .more-img {
                    width: 100%;
                    height: 100%;
                    max-height: 560px;
                    object-fit: cover;
                    border-radius: 18px;
                    display: block;
                }
                .more-image-caption {
                    position: absolute;
                    bottom: 30px;
                    left: 30px;
                    z-index: 2;
                }
                .more-image-caption span {
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

                @media (max-width: 991px) {
                    .more-grid {
                        grid-template-columns: 1fr;
                        gap: 50px;
                    }
                    .more-image-wrapper {
                        order: -1;
                    }
                    .more-content {
                        text-align: center;
                    }
                    .social-tags-list {
                        justify-content: center;
                    }
                    .more-img {
                        max-height: 400px;
                    }
                }
            `}</style>
        </section>
    );
};

export default MoreThanHoney;
