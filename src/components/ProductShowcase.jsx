import React from 'react';

const ProductShowcase = () => {
    return (
        <section className="showcase">
            <div className="container">
                {/* Product Feature */}
                <div className="feature-row">
                    <div className="feature-image-wrapper glass-panel">
                        <img src="/images/product.jpg" alt="Hola Honey Jar" className="feature-image" />
                    </div>
                    <div className="feature-content">
                        <h2 className="feature-title">Pure, Raw, & <span className="text-gradient">Authentic</span></h2>
                        <p className="feature-text">
                            Our honey comes straight from the hive to your home. No processing, no additives—just the golden essence of nature.
                            Packaged in sustainable materials, every jar tells a story of tradition and quality.
                        </p>
                        <ul className="feature-list">
                            <li>✓ 100% Raw & Unfiltered</li>
                            <li>✓ Sustainably Harvested</li>
                            <li>✓ Supports Local Farmers</li>
                        </ul>
                    </div>
                </div>

                {/* Origin Story Feature */}
                <div className="feature-row reverse">
                    <div className="feature-image-wrapper glass-panel">
                        <img src="/images/beehives.jpg" alt="Beehives in Honduras" className="feature-image" />
                    </div>
                    <div className="feature-content">
                        <h2 className="feature-title">Roots in <span className="text-gradient">Honduras</span></h2>
                        <p className="feature-text">
                            Deep in the lush landscapes of Honduras, our beekeepers work in harmony with nature.
                            Hola Honey isn't just a brand; it's a bridge between these rich communities and your table.
                            We ensure that every drop contributes to livable wages and community growth.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                .showcase {
                    padding: 120px 0;
                    background-color: var(--color-bg);
                }
                .feature-row {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    margin-bottom: 120px;
                }
                .feature-row:last-child {
                    margin-bottom: 0;
                }
                .feature-row.reverse {
                    flex-direction: row-reverse;
                }
                .feature-image-wrapper {
                    flex: 1;
                    padding: 10px;
                    border-radius: 20px;
                    overflow: hidden;
                }
                .feature-image {
                    width: 100%;
                    height: 100%;
                    max-height: 500px;
                    object-fit: cover;
                    border-radius: 12px;
                    transition: transform 0.5s ease;
                }
                .feature-image-wrapper:hover .feature-image {
                    transform: scale(1.02);
                }
                .feature-content {
                    flex: 1;
                }
                .feature-title {
                    font-size: 3rem;
                    margin-bottom: 24px;
                }
                .feature-text {
                    font-size: 1.125rem;
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 30px;
                }
                .feature-list {
                    list-style: none;
                }
                .feature-list li {
                    font-size: 1.125rem;
                    margin-bottom: 12px;
                    color: var(--color-primary);
                }
                @media (max-width: 900px) {
                    .feature-row, .feature-row.reverse {
                        flex-direction: column;
                        gap: 40px;
                        text-align: center;
                    }
                    .feature-list {
                        display: inline-block;
                        text-align: left;
                    }
                }
            `}</style>
        </section>
    );
};

export default ProductShowcase;
