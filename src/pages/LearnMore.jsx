import React from 'react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
    return (
        <main className="learn-more-page">
            <div className="container">
                <div className="content-wrapper glass-panel">
                    {/* Ownership Section */}
                    <section className="story-section">
                        <div className="story-image-wrapper">
                            <img src="/images/Grandmahoney.jpg" alt="Grandma handling honeycomb" className="story-image" />
                        </div>
                        <div className="story-content">
                            <h1 className="page-title">Ownership <span className="text-gradient">Matters</span></h1>
                            <div className="text-content">
                                <p>
                                    Many brands that appear to represent our culture aren’t actually owned by our communities.
                                    Abuelita chocolate looks Mexican but is owned by a Swiss corporation.
                                    Aunt Jemima represented Black culture for decades while profits left those communities.
                                    This happens often — culture becomes a mascot while ownership and wealth go elsewhere.
                                </p>
                                <p>
                                    Hola Honey was created to change that. We are building a Latino-owned honey brand that
                                    represents our people, our land, and our stories — not just in image, but in ownership.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Beekeepers Section */}
                    <section className="story-section reverse">
                        <div className="story-image-wrapper">
                            <img src="/images/beekeepers.jpg" alt="Beekeepers tending to hives" className="story-image" />
                        </div>
                        <div className="story-content">
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                                Supporting Beekeepers & <span className="text-gradient">Protecting Pollinators</span>
                            </h2>
                            <div className="text-content">
                                <p>
                                    Beekeeping in Honduras is declining. Many small beekeepers struggle to earn a sustainable income,
                                    forcing families to abandon their hives in search of other work.
                                </p>
                                <p>
                                    When beekeeping disappears, more than livelihoods are lost. Bees are essential pollinators that
                                    support forests, crops, and biodiversity. Fewer bees mean reduced pollination, weaker ecosystems,
                                    and long-term impacts on food systems and the environment.
                                </p>
                                <p>
                                    Hola Honey was created to change this trajectory.
                                </p>
                                <p>
                                    We partner with small-scale beekeepers and pay fair, livable wages that make beekeeping a viable livelihood.
                                    By ensuring beekeepers are compensated sustainably, we help keep hives active, support rural families,
                                    and protect the pollinators our ecosystems depend on.
                                </p>
                                <p>
                                    When you choose Hola Honey, you do more than enjoy pure, raw honey — you help sustain beekeeping traditions,
                                    support families, and protect the vital role bees play in our environment.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="process-section">
                        <h2 className="section-title">What Makes <span className="text-gradient">Our Honey Different</span></h2>
                        <div className="text-content center-text">
                            <p>
                                Many large honey producers source honey from multiple regions, blend it together for uniform taste,
                                and heat it to improve shelf stability and appearance. While this process creates consistency,
                                heat and heavy filtration reduce the natural enzymes, pollen, and beneficial compounds found in raw honey.
                            </p>
                            <p>
                                Hola Honey is handled differently. Our honey comes from small, carefully managed apiaries in Honduras
                                and is never heated. It is minimally filtered and bottled to preserve the natural character, aroma,
                                and beneficial properties created by the bees and the land they forage.
                            </p>
                        </div>
                    </section>

                    <div className="actions">
                        <Link to="/#waitlist" className="btn-primary">Join Waitlist</Link>
                        <Link to="/" className="btn-secondary">Back to Home</Link>
                    </div>
                </div>
            </div>

            <style>{`
                .learn-more-page {
                    padding: 120px 0;
                    min-height: 100vh;
                    background: var(--color-bg);
                }
                .content-wrapper {
                    max-width: 1000px; /* Increased width */
                    margin: 0 auto;
                    padding: 60px;
                }
                .story-section {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    margin-bottom: 100px;
                }
                .story-section.reverse {
                    flex-direction: row-reverse;
                }
                .story-image-wrapper {
                    flex: 1;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                }
                .story-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .story-content {
                    flex: 1;
                }
                .page-title {
                    font-size: clamp(2.5rem, 4vw, 3.5rem);
                    margin-bottom: 30px;
                    text-align: left;
                }
                .section-title {
                    font-size: clamp(2rem, 3.5vw, 3rem);
                    margin-bottom: 40px;
                    text-align: center;
                }
                .text-content p {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 24px;
                }
                .center-text {
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: center;
                }
                .process-section {
                    margin-bottom: 60px;
                }
                .actions {
                    text-align: center;
                    margin-top: 60px;
                }
                @media (max-width: 900px) {
                    .story-section, .story-section.reverse {
                        flex-direction: column;
                        text-align: center;
                    }
                    .page-title, .section-title {
                        text-align: center !important;
                    }
                    .page-title {
                        text-align: center;
                    }
                    .content-wrapper {
                        padding: 40px 20px;
                    }
                }
            `}</style>
        </main>
    );
};

export default LearnMore;
