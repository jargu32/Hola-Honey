import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/dictionary';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section id="top" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <span className="brand-tag">{t.missionLabel}</span>
                <h1 className="mission-statement">
                    {t.title1}<span className="text-gradient">{t.titleHighlight}</span>{t.title2}
                </h1>
                <p className="mission-sub">
                    {t.description}
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary" onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}>
                        {t.ctaWaitlist}
                    </button>
                    <Link to="/learn-more" className="btn-secondary">
                        {t.ctaLearn}
                    </Link>
                </div>
            </div>

            <style>{`
                .hero {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-image: url('/images/forest.jpg');
                    background-size: cover;
                    background-position: center;
                    padding-bottom: 80px; /* Ensure space for bottom content/scrolling */
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, rgba(0,0,0,0.3), var(--color-bg));
                    z-index: 1;
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 900px;
                    padding-top: 60px;
                }
                .brand-tag {
                    display: inline-block;
                    margin-bottom: 24px;
                    padding: 8px 16px;
                    background: rgba(245, 158, 11, 0.1);
                    border: 1px solid rgba(245, 158, 11, 0.3);
                    border-radius: 50px;
                    color: var(--color-primary);
                    font-family: var(--font-body);
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    backdrop-filter: blur(4px);
                }
                .mission-statement {
                    font-size: clamp(2.5rem, 5vw, 4.5rem);
                    font-weight: 700;
                    margin-bottom: 24px;
                    line-height: 1.1;
                }
                .mission-sub {
                    font-size: clamp(1.125rem, 2vw, 1.5rem);
                    color: rgba(255, 255, 255, 0.8);
                    max-width: 750px;
                    margin: 0 auto 40px;
                }
                .hero-buttons {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                }
                @media (max-width: 600px) {
                    .hero-buttons {
                        flex-direction: column;
                        width: 100%;
                    }
                    .hero-buttons .btn-primary,
                    .hero-buttons .btn-secondary {
                        width: 100%;
                        margin: 0;
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
