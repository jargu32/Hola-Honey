import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,es',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
            }, 'google_translate_element');
        };

        if (!document.getElementById('google-translate-script')) {
            const addScript = document.createElement('script');
            addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
            addScript.setAttribute('id', 'google-translate-script');
            document.body.appendChild(addScript);
        }
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== '/') {
            navigate(`/${targetId}`);
        } else {
            const element = document.querySelector(targetId);
            if (element) {
                const headerOffset = 90;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo" onClick={(e) => handleNavClick(e, '#top')}>
                    <img src="/images/blackwordlogo.png" alt="Hola Honey LLC" className="logo-img" />
                </Link>

                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#top" onClick={(e) => handleNavClick(e, '#top')}>Home</a></li>
                        <li><a href="#honey" onClick={(e) => handleNavClick(e, '#honey')}>Our Honey</a></li>
                        <li><a href="#story" onClick={(e) => handleNavClick(e, '#story')}>Our Story</a></li>
                        <li><a href="#mission" onClick={(e) => handleNavClick(e, '#mission')}>Mission & Impact</a></li>
                        <li><a href="#more-than-honey" onClick={(e) => handleNavClick(e, '#more-than-honey')}>More Than Honey</a></li>
                        <li className="mobile-only">
                            <a href="#waitlist" className="nav-cta btn-primary" onClick={(e) => handleNavClick(e, '#waitlist')}>
                                Join Waitlist
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="nav-actions">
                    <div className="translate-selector-wrapper">
                        <img src="/images/holahoneypics/new_translate_icon.png" alt="Translate" className="translate-icon" />
                        <div id="google_translate_element"></div>
                    </div>
                    <a href="#waitlist" className="nav-cta btn-primary" onClick={(e) => handleNavClick(e, '#waitlist')}>
                        Join Waitlist
                    </a>
                    <button 
                        className={`hamburger ${isOpen ? 'active' : ''}`} 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Navigation Menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>

            <style>{`
                .navbar-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 90px;
                    display: flex;
                    align-items: center;
                    z-index: 1000;
                    transition: var(--transition);
                    background: transparent;
                    border-bottom: 1px solid transparent;
                }
                .navbar-header.scrolled {
                    height: 80px;
                    background: rgba(18, 16, 14, 0.85);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-bottom: 1px solid var(--color-glass-border);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
                }
                .nav-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    position: relative;
                }
                .nav-logo {
                    display: flex;
                    align-items: center;
                    height: 52px;
                    z-index: 1001;
                    border: 1px solid rgba(253, 251, 247, 0.75); /* Thin white/cream border */
                    border-radius: 6px;
                    padding: 4px 12px;
                    background: #12100e; /* Match main dark background */
                    transition: var(--transition);
                }
                .nav-logo:hover {
                    border-color: var(--color-primary);
                    box-shadow: 0 0 10px rgba(217, 119, 6, 0.2);
                }
                .logo-img {
                    height: 100%;
                    max-height: 44px;
                    object-fit: contain;
                    transition: var(--transition);
                }
                .logo-img:hover {
                    filter: brightness(1.2);
                }
                .nav-menu {
                    transition: var(--transition);
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .nav-list {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    gap: 32px;
                    white-space: nowrap; /* Prevent items from wrapping */
                }
                .nav-list li a {
                    font-family: var(--font-body);
                    font-weight: 500;
                    font-size: 0.95rem;
                    color: rgba(253, 251, 247, 0.8);
                    transition: var(--transition);
                    position: relative;
                    white-space: nowrap; /* Prevent link text from wrapping */
                }
                .nav-list li a:not(.nav-cta):hover {
                    color: var(--color-accent);
                }
                .nav-list li a:not(.nav-cta)::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 1.5px;
                    bottom: -4px;
                    left: 0;
                    background-color: var(--color-accent);
                    transition: var(--transition);
                }
                .nav-list li a:not(.nav-cta):hover::after {
                    width: 100%;
                }
                .nav-cta {
                    padding: 10px 24px !important;
                    font-size: 0.8rem !important;
                    box-shadow: none !important;
                }
                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    z-index: 1001;
                }
                .mobile-only {
                    display: none;
                }
                
                /* Hamburger Menu */
                .hamburger {
                    display: none;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 24px;
                    height: 18px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    z-index: 1001;
                }
                .hamburger .bar {
                    width: 100%;
                    height: 2px;
                    background-color: var(--color-text);
                    transition: var(--transition);
                    border-radius: 2px;
                }
                
                @media (max-width: 991px) {
                    .hamburger {
                        display: flex;
                    }
                    .hamburger.active .bar:nth-child(1) {
                        transform: translateY(8px) rotate(45deg);
                    }
                    .hamburger.active .bar:nth-child(2) {
                        opacity: 0;
                    }
                    .hamburger.active .bar:nth-child(3) {
                        transform: translateY(-8px) rotate(-45deg);
                    }
                    .nav-menu {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        left: auto;
                        transform: none;
                        width: 280px;
                        height: 100vh;
                        background: #191614;
                        border-left: 1px solid var(--color-glass-border);
                        box-shadow: -10px 0 30px rgba(0,0,0,0.5);
                        padding: 120px 40px 40px;
                        z-index: 1000;
                    }
                    .nav-menu.active {
                        right: 0;
                    }
                    .nav-list {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 28px;
                    }
                    .nav-list li a {
                        font-size: 1.125rem;
                    }
                    .nav-cta {
                        width: 100%;
                        text-align: center;
                    }
                    .mobile-only {
                        display: block;
                        width: 100%;
                    }
                    .nav-actions .nav-cta {
                        display: none;
                    }
                }

                /* Google Translate Custom styling */
                .translate-selector-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .translate-icon {
                    height: 34px;
                    width: auto;
                    object-fit: contain;
                    transition: var(--transition);
                    border-radius: 6px;
                }
                .translate-selector-wrapper:hover .translate-icon {
                    transform: scale(1.05);
                }
                .goog-te-gadget {
                    font-size: 0 !important;
                    color: transparent !important;
                }
                .goog-te-gadget-icon,
                .goog-te-gadget img {
                    display: none !important;
                }
                .goog-te-gadget .goog-logo-link {
                    display: none !important;
                }
                .goog-te-gadget span {
                    display: none !important;
                }
                .goog-te-combo {
                    background: rgba(255, 255, 255, 0.02) !important;
                    border: 1px solid var(--color-glass-border) !important;
                    color: rgba(253, 251, 247, 0.85) !important;
                    padding: 6px 10px !important;
                    border-radius: 8px !important;
                    font-family: var(--font-body) !important;
                    font-size: 0.825rem !important;
                    font-weight: 500 !important;
                    cursor: pointer !important;
                    outline: none !important;
                    transition: var(--transition) !important;
                }
                .goog-te-combo:hover {
                    border-color: var(--color-primary) !important;
                    background: rgba(255, 255, 255, 0.05) !important;
                    color: var(--color-text) !important;
                }
                /* Hide Google Translate top bar frame */
                iframe.goog-te-banner-frame {
                    display: none !important;
                }
                body {
                    top: 0px !important;
                }
                .goog-te-balloon-frame {
                    display: none !important;
                }
                #goog-gt-tt {
                    display: none !important;
                }
                .goog-text-highlight {
                    background: transparent !important;
                    box-shadow: none !important;
                }
            `}</style>
        </header>
    );
};

export default Navbar;
