import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/dictionary';

const LearnMore = () => {
    const { language } = useLanguage();
    const t = translations[language].learn;

    return (
        <main className="learn-more-page" style={{ paddingTop: '90px' }}>
            <Navbar />
            
            <div className="container">
                <div className="content-wrapper glass-panel">
                    
                    {/* Header */}
                    <div className="page-header">
                        <span className="section-label">{t.label}</span>
                        <h1 className="page-title">{t.title1}<span className="text-gradient">{t.titleHighlight}</span></h1>
                        <p className="page-subtitle">{t.subtitle}</p>
                    </div>

                    {/* Section 1: Ownership */}
                    <section className="detail-section">
                        <div className="detail-image-wrapper">
                            <img src="/images/holahoneypics/IMG_9158.jpeg" alt={t.section1Title} className="detail-image" />
                        </div>
                        <div className="detail-content">
                            <h2>{t.section1Title}</h2>
                            <p>
                                {t.section1P1}
                            </p>
                            <p>
                                {t.section1P2}
                            </p>
                        </div>
                    </section>
                    
                    {/* Section 2: Beekeeping & Declining Livelihoods */}
                    <section className="detail-section reverse">
                        <div className="detail-image-wrapper">
                            <img src="/images/holahoneypics/worker.jpg" alt={t.section2Title} className="detail-image contain-fit" />
                        </div>
                        <div className="detail-content">
                            <h2>{t.section2Title}</h2>
                            <p>
                                {t.section2P1}
                            </p>
                            <p>
                                {t.section2P2}
                            </p>
                            <p>
                                {t.section2P3}
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Poverty context & US Market opportunity */}
                    <section className="detail-section">
                        <div className="detail-image-wrapper">
                            <img src="/images/beehives.jpg" alt={t.section3Title} className="detail-image" />
                        </div>
                        <div className="detail-content">
                            <h2>{t.section3Title}</h2>
                            <p>
                                {t.section3P1}
                            </p>
                            <p>
                                {t.section3P2}
                            </p>
                            <p>
                                {t.section3P3}
                            </p>
                        </div>
                    </section>

                    <div className="actions">
                        <Link to="/#waitlist" className="btn-primary">{t.btnWaitlist}</Link>
                        <Link to="/" className="btn-secondary">{t.btnHome}</Link>
                    </div>
                </div>
            </div>

            <Footer />

            <style>{`
                .learn-more-page {
                    min-height: 100vh;
                    background: var(--color-bg);
                }
                .content-wrapper {
                    max-width: 1000px;
                    margin: 40px auto 100px;
                    padding: 80px 60px;
                }
                .page-header {
                    text-align: center;
                    margin-bottom: 80px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    padding-bottom: 40px;
                }
                .section-label {
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--color-primary);
                    margin-bottom: 16px;
                    display: inline-block;
                }
                .page-title {
                    font-size: clamp(3rem, 5vw, 4.5rem);
                    margin-bottom: 20px;
                }
                .page-subtitle {
                    font-size: 1.25rem;
                    color: var(--color-text-muted);
                    max-width: 600px;
                    margin: 0 auto;
                }
                .detail-section {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 60px;
                    align-items: center;
                    margin-bottom: 80px;
                }
                .detail-section.reverse {
                    grid-template-columns: 1.2fr 1fr;
                }
                .detail-section.reverse .detail-image-wrapper {
                    order: 2;
                }
                .detail-image-wrapper {
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    border: 1px solid var(--color-glass-border);
                    padding: 8px;
                    background: rgba(255, 255, 255, 0.02);
                }
                .detail-image {
                    width: 100%;
                    height: 100%;
                    max-height: 380px;
                    object-fit: cover;
                    border-radius: 12px;
                    display: block;
                }
                .detail-image.contain-fit {
                    object-fit: contain;
                    max-height: 520px;
                    height: auto;
                }
                .detail-content h2 {
                    font-size: 2rem;
                    margin-bottom: 20px;
                    color: var(--color-text);
                }
                .detail-content p {
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: var(--color-text-muted);
                    margin-bottom: 20px;
                }
                .detail-content p:last-child {
                    margin-bottom: 0;
                }
                .actions {
                    text-align: center;
                    margin-top: 80px;
                    padding-top: 40px;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }
                
                @media (max-width: 900px) {
                    .content-wrapper {
                        padding: 40px 20px;
                    }
                    .detail-section, .detail-section.reverse {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .detail-section.reverse .detail-image-wrapper {
                        order: 0;
                    }
                    .detail-content {
                        text-align: center;
                    }
                    .actions {
                        flex-direction: column;
                        gap: 16px;
                    }
                    .actions .btn-primary,
                    .actions .btn-secondary {
                        width: 100%;
                        margin: 0;
                    }
                }
            `}</style>
        </main>
    );
};

export default LearnMore;
