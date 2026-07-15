import React from 'react';

const ProductShowcase = () => {
    return (
        <section id="honey" className="showcase">
            <div className="container">
                <div className="feature-row">
                    <div className="feature-image-wrapper glass-panel">
                        <img src="/images/blurjar.png" alt="Hola Honey Luxury Jar" className="feature-image" />
                    </div>
                    <div className="feature-content">
                        <span className="section-label">Our Honey</span>
                        <h2 className="feature-title">Pure, Raw, & <br /><span className="text-gradient">Authentic</span></h2>
                        <p className="feature-text">
                            Our honey comes from small, carefully managed apiaries in Honduras and is never heated. It is minimally filtered and bottled straight from the hive to preserve the natural character, complex floral aroma, and beneficial compounds created by the bees and the land they forage.
                        </p>
                        <ul className="feature-list">
                            <li>
                                <div className="icon-wrapper">
                                    <img src="/images/holahoneypics/raw_unfiltered.png" alt="100% Raw & Unfiltered Icon" className="feature-icon-img" />
                                </div>
                                <div>
                                    <strong>100% Raw & Unfiltered</strong>
                                    <p>Retains all natural pollen, enzymes, and beneficial properties.</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-wrapper">
                                    <img src="/images/holahoneypics/never_heated.png" alt="Never Heated Icon" className="feature-icon-img" />
                                </div>
                                <div>
                                    <strong>Never Heated</strong>
                                    <p>Cold-handled to protect the delicate honey flavors and active nutrients.</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-wrapper">
                                    <img src="/images/holahoneypics/supports_families.png" alt="Supports Rural Beekeeping Families Icon" className="feature-icon-img" />
                                </div>
                                <div>
                                    <strong>Supports Rural Beekeeping Families</strong>
                                    <p>Directly contributes to consistent, dignified incomes in Honduran communities.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
                .showcase {
                    padding: 120px 0;
                    background-color: var(--color-bg);
                    position: relative;
                }
                .feature-row {
                    display: flex;
                    align-items: center;
                    gap: 80px;
                }
                .feature-image-wrapper {
                    flex: 1;
                    padding: 12px;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
                .feature-image {
                    width: 100%;
                    height: 100%;
                    max-height: 560px;
                    object-fit: cover;
                    border-radius: 18px;
                    display: block;
                    transition: var(--transition);
                }
                .feature-image-wrapper:hover .feature-image {
                    transform: scale(1.015);
                }
                .feature-content {
                    flex: 1.1;
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
                .feature-title {
                    font-size: clamp(2.5rem, 4.5vw, 3.5rem);
                    margin-bottom: 24px;
                    color: var(--color-text);
                }
                .feature-text {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: var(--color-text-muted);
                    margin-bottom: 35px;
                }
                .feature-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                .feature-list li {
                    display: flex;
                    gap: 20px;
                    align-items: flex-start;
                }
                .icon-wrapper {
                    flex-shrink: 0;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid var(--color-glass-border);
                    padding: 6px;
                    transition: var(--transition);
                }
                .feature-list li:hover .icon-wrapper {
                    border-color: var(--color-primary);
                    background: rgba(217, 119, 6, 0.05);
                    box-shadow: 0 0 12px rgba(217, 119, 6, 0.15);
                }
                .feature-icon-img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
                .feature-list h3 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: var(--color-text);
                    margin-bottom: 4px;
                }
                .feature-list p {
                    font-size: 0.95rem;
                    color: var(--color-text-muted);
                    line-height: 1.5;
                }
                @media (max-width: 991px) {
                    .feature-row {
                        flex-direction: column;
                        gap: 50px;
                    }
                    .feature-content {
                        text-align: center;
                    }
                    .feature-list {
                        text-align: left;
                    }
                    .feature-image {
                        max-height: 450px;
                    }
                }
            `}</style>
        </section>
    );
};

export default ProductShowcase;
