import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <span className="brand-tag">Hola Honey</span>
                <h1 className="mission-statement">
                    Our mission is to create a <span className="text-gradient">Latino-owned</span> honey brand rooted in authentic ownership, ethical sourcing, and livable wages.
                </h1>
                <p className="mission-sub">
                    Ensuring the money we generate is reinvested back into the communities behind our product.
                </p>
                <button className="btn-primary" onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}>
                    Join the Movement
                </button>
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
                    max-width: 700px;
                    margin: 0 auto 40px;
                }
            `}</style>
        </section>
    );
};

export default Hero;
