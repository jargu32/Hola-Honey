import React from 'react';

const MissionImpact = () => {
    return (
        <section id="mission" className="mission-impact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Mission & Impact</span>
                    <h2>Creating Global Bridges, <br /><span className="text-gradient">Empowering Rural Honduras</span></h2>
                </div>

                <div className="mission-grid">
                    {/* Why This Matters (Poverty Stat) Card */}
                    <div className="impact-card glass-panel">
                        <div className="card-badge">Why It Matters</div>
                        <h3>Stable Livelihoods in Rural Communities</h3>
                        <p className="impact-main-text">
                            Nearly half of Hondurans are estimated to live below the $8.30-per-day poverty line (adjusted for purchasing power). In rural communities, many families depend on informal, seasonal, or agricultural work that is unstable and unpredictable.
                        </p>
                        <p className="impact-sub-text">
                            <strong>Hola Honey</strong> exists to help change that. Our goal is to create steady demand for Honduran honey while supporting fair, consistent income for the beekeepers and workers who make it possible.
                        </p>
                    </div>

                    {/* U.S. Honey Market Card */}
                    <div className="impact-card glass-panel">
                        <div className="card-badge">The Opportunity</div>
                        <h3>The U.S. Honey Market Context</h3>
                        <p className="impact-main-text">
                            In 2024, U.S. honey consumption hit an all-time high of <strong>688.6 million pounds</strong>. To meet this massive demand, the U.S. imported <strong>562 million pounds</strong> of honey—amounting to roughly <strong>74%</strong> of the total U.S. honey supply.
                        </p>
                        <p className="impact-sub-text">
                            The U.S. already depends heavily on imported honey. We believe imported honey should do more than fill shelves—it should support the people and communities behind it. Hola Honey makes that connection transparent, ethical, and community-centered.
                        </p>
                    </div>
                </div>

                {/* Visual Banner showcasing real beekeepers */}
                <div className="beekeepers-banner glass-panel">
                    <div className="banner-image-wrapper">
                        <img 
                            src="/images/holahoneypics/IMG_8818.jpeg" 
                            alt="Sunlight filtering through the Honduran trees near the apiary" 
                            className="banner-img" 
                        />
                        <div className="banner-overlay"></div>
                    </div>
                    <div className="banner-content">
                        <span className="quote-icon">“</span>
                        <h4>
                            “When people value our honey, they also value the work, time, and care behind every hive.”
                        </h4>
                        <p className="banner-author">— The Beekeepers of Lempira</p>
                    </div>
                </div>
            </div>

            <style>{`
                .mission-impact-section {
                    padding: 120px 0;
                    background-color: #171412; /* Marginally different background for section grouping */
                    position: relative;
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
                .mission-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    margin-bottom: 80px;
                }
                .impact-card {
                    padding: 50px 40px;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }
                .card-badge {
                    align-self: flex-start;
                    background: rgba(217, 119, 6, 0.15);
                    border: 1px solid rgba(217, 119, 6, 0.3);
                    color: var(--color-primary);
                    font-family: var(--font-body);
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    padding: 6px 14px;
                    border-radius: 50px;
                    margin-bottom: 24px;
                }
                .impact-card h3 {
                    font-size: 1.75rem;
                    margin-bottom: 24px;
                    color: var(--color-text);
                }
                .impact-main-text {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: var(--color-text);
                    margin-bottom: 16px;
                }
                .impact-sub-text {
                    font-size: 1rem;
                    line-height: 1.8;
                    color: var(--color-text-muted);
                }
                
                /* Beekeepers Banner */
                .beekeepers-banner {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    overflow: hidden;
                    border-radius: 28px;
                    min-height: 380px;
                }
                .banner-image-wrapper {
                    position: relative;
                    height: 100%;
                    min-height: 300px;
                }
                .banner-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    inset: 0;
                }
                .banner-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, transparent 60%, rgba(23, 20, 18, 0.9));
                }
                .banner-content {
                    padding: 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background: rgba(23, 20, 18, 0.65);
                    position: relative;
                }
                .quote-icon {
                    font-family: var(--font-heading);
                    font-size: 5rem;
                    color: var(--color-primary);
                    opacity: 0.2;
                    position: absolute;
                    top: 20px;
                    left: 40px;
                    line-height: 1;
                }
                .banner-content h4 {
                    font-size: 1.35rem;
                    line-height: 1.6;
                    font-weight: 500;
                    margin-bottom: 20px;
                    color: var(--color-text);
                    position: relative;
                    z-index: 1;
                }
                .banner-author {
                    font-family: var(--font-body);
                    font-weight: 500;
                    color: var(--color-primary);
                    font-size: 0.95rem;
                }

                @media (max-width: 991px) {
                    .mission-grid {
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }
                    .beekeepers-banner {
                        grid-template-columns: 1fr;
                    }
                    .banner-overlay {
                        background: linear-gradient(to bottom, transparent 40%, rgba(23, 20, 18, 0.95));
                    }
                    .banner-content {
                        padding: 40px 30px;
                    }
                }
            `}</style>
        </section>
    );
};

export default MissionImpact;
