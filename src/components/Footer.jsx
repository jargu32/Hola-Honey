import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/dictionary';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img src="/images/blackwordlogo.png" alt="Hola Honey" className="footer-logo" />
                        <p className="footer-tagline">{t.tagline}</p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">{t.connect}</h4>
                        <ul className="footer-list">
                            <li>
                                <a href="https://instagram.com/holahoney3" target="_blank" rel="noopener noreferrer">
                                    Instagram: @holahoney3
                                </a>
                            </li>
                            <li>
                                <a href="https://tiktok.com/@holahoney4" target="_blank" rel="noopener noreferrer">
                                    TikTok: @holahoney4
                                </a>
                            </li>
                            <li>
                                <a href="mailto:holahoney2820@gmail.com">
                                    holahoney2820@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-artist-box glass-panel">
                        <h4>{t.artistTitle}</h4>
                        <p>
                            {t.artistDesc}
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Hola Honey LLC. {t.rights}</p>
                </div>
            </div>

            <style>{`
                .footer {
                    padding: 80px 0 40px;
                    background-color: #0c0a09;
                    border-top: 1px solid var(--color-glass-border);
                }
                .footer-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1.2fr;
                    gap: 60px;
                    margin-bottom: 60px;
                }
                .footer-brand {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .footer-logo {
                    max-height: 40px;
                    width: fit-content;
                    object-fit: contain;
                    mix-blend-mode: screen; /* Make black background transparent, keep gold text */
                }
                .footer-tagline {
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                }
                .footer-title {
                    font-size: 1.1rem;
                    color: var(--color-primary);
                    margin-bottom: 20px;
                    font-family: var(--font-body);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .footer-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .footer-list li a {
                    color: var(--color-text-muted);
                    transition: var(--transition);
                    font-size: 0.95rem;
                }
                .footer-list li a:hover {
                    color: var(--color-primary);
                }
                .footer-artist-box {
                    padding: 24px;
                    background: rgba(255, 255, 255, 0.02);
                }
                .footer-artist-box h4 {
                    font-size: 1rem;
                    color: var(--color-text);
                    margin-bottom: 8px;
                    font-family: var(--font-body);
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .footer-artist-box p {
                    font-size: 0.9rem;
                    line-height: 1.5;
                    color: var(--color-text-muted);
                }
                .footer-bottom {
                    text-align: center;
                    padding-top: 40px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    color: rgba(253, 251, 247, 0.3);
                    font-size: 0.85rem;
                }

                @media (max-width: 991px) {
                    .footer-grid {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 40px;
                        text-align: center;
                    }
                    .footer-logo {
                        margin: 0 auto;
                    }
                    .footer-list {
                        align-items: center;
                    }
                    .footer-artist-box {
                        text-align: center;
                        max-width: 100%;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
