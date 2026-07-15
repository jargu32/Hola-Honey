import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LearnMore = () => {
    return (
        <main className="learn-more-page" style={{ paddingTop: '90px' }}>
            <Navbar />
            
            <div className="container">
                <div className="content-wrapper glass-panel">
                    
                    {/* Header */}
                    <div className="page-header">
                        <span className="section-label">Deep Dive</span>
                        <h1 className="page-title">Ownership & <span className="text-gradient">Impact</span></h1>
                        <p className="page-subtitle">A detailed look at why Hola Honey exists and the mission behind our jars.</p>
                    </div>

                    {/* Section 1: Ownership */}
                    <section className="detail-section">
                        <div className="detail-image-wrapper">
                            <img src="/images/holahoneypics/IMG_9158.jpeg" alt="Scenic overlook of La Virtud, Honduras" className="detail-image" />
                        </div>
                        <div className="detail-content">
                            <h2>Why Ownership Matters</h2>
                            <p>
                                Many products use culture as part of their image, but the ownership and profits do not always stay connected to the communities being represented. Historically, culture becomes a marketing mascot while the actual wealth and ownership flow elsewhere.
                            </p>
                            <p>
                                Hola Honey was created to do things differently. We are building a Latino-owned honey brand rooted in Honduras—one where the people, land, and stories behind the product are part of the ownership, not just the branding.
                            </p>
                        </div>
                    </section>
                    
                    {/* Section 2: Beekeeping & Declining Livelihoods */}
                    <section className="detail-section reverse">
                        <div className="detail-image-wrapper">
                            <img src="/images/holahoneypics/worker.jpg" alt="Honduran beekeepers working at the apiary" className="detail-image contain-fit" />
                        </div>
                        <div className="detail-content">
                            <h2>Supporting Honduran Beekeepers</h2>
                            <p>
                                Beekeeping in Honduras is declining. Many small-scale beekeepers struggle to earn a sustainable, predictable income, forcing families to abandon their hives in search of seasonal or informal work elsewhere.
                            </p>
                            <p>
                                When beekeeping disappears, more than livelihoods are lost. Bees are essential pollinators that support local forests, crops, and biodiversity. Fewer bees mean reduced pollination, weaker ecosystems, and long-term impacts on the local environment.
                            </p>
                            <p>
                                We partner directly with small-scale beekeepers and pay fair, livable wages that make beekeeping a viable, dignified livelihood. By ensuring sustainable compensation, we help keep hives active, support rural families, and protect the pollinators our ecosystems depend on.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Poverty context & US Market opportunity */}
                    <section className="detail-section">
                        <div className="detail-image-wrapper">
                            <img src="/images/beehives.jpg" alt="Beehives in La Virtud" className="detail-image" />
                        </div>
                        <div className="detail-content">
                            <h2>Why This Matters Globally</h2>
                            <p>
                                Nearly half of Hondurans are estimated to live below the $8.30-per-day poverty line, adjusted for purchasing power. Hola Honey exists to help change that trajectory by creating steady, stable demand for Honduran honey.
                            </p>
                            <p>
                                At the same time, the U.S. is the largest honey consumer in the world, importing 562 million pounds in 2024 (roughly 74% of total supply). The demand is there, but the transparency is not.
                            </p>
                            <p>
                                We believe imported honey should do more than fill shelves—it should support the people and communities behind it. When you choose Hola Honey, you help sustain beekeeping traditions, support rural families, and protect the environment.
                            </p>
                        </div>
                    </section>

                    <div className="actions">
                        <Link to="/#waitlist" className="btn-primary">Join the Waitlist</Link>
                        <Link to="/" className="btn-secondary">Back to Home</Link>
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
