import React, { useState } from 'react';

const WaitlistForm = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    phone,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                alert(result.error || 'Something went wrong. Please try again.');
                setStatus('idle');
                return;
            }

            setStatus('success');
            setEmail('');
            setPhone('');
        } catch (error) {
            console.error('Waitlist error:', error);
            alert('Something went wrong. Please try again.');
            setStatus('idle');
        }
    };

    return (
        <section id="waitlist" className="waitlist-section">
            <div className="container">
                <div className="glass-panel waitlist-card">
                    <h2 className="waitlist-title">Be Part of the Hive</h2>
                    <p className="waitlist-desc">
                        Join our community and get early access to our first batch of authentic, ethically sourced honey.
                    </p>

                    {status === 'success' ? (
                        <div className="success-message">
                            <span className="check-icon">✓</span>
                            <h3>Welcome to Hola Honey!</h3>
                            <p>We've added you to the list. Keep an eye on your inbox.</p>
                            <button className="btn-reset" onClick={() => setStatus('idle')}>Add another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="waitlist-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="form-input"
                                    disabled={status === 'submitting'}
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number (Optional)"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form-input"
                                    disabled={status === 'submitting'}
                                />
                                <button type="submit" className="btn-primary submit-btn" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
                                </button>
                            </div>
                            <p className="spam-notice">No spam, just sweet updates.</p>
                        </form>
                    )}
                </div>
            </div>

            <style>{`
                .waitlist-section {
                    padding: 100px 0;
                    background: linear-gradient(to top, #111, var(--color-bg));
                }
                .waitlist-card {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 60px 40px;
                    text-align: center;
                }
                .waitlist-title {
                    font-size: 2.5rem;
                    margin-bottom: 16px;
                    color: var(--color-primary);
                }
                .waitlist-desc {
                    margin-bottom: 40px;
                    color: rgba(255, 255, 255, 0.7);
                }
                .waitlist-form {
                    width: 100%;
                    max-width: 400px;
                    margin: 0 auto;
                }
                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-bottom: 16px;
                }
                .form-input {
                    width: 100%;
                    padding: 14px 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    font-family: var(--font-body);
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.2s;
                }
                .form-input:focus {
                    border-color: var(--color-primary);
                    background: rgba(255, 255, 255, 0.1);
                }
                .submit-btn {
                    width: 100%;
                    padding: 14px 32px;
                    border-radius: 12px;
                    margin-top: 8px;
                }
                .spam-notice {
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.4);
                    margin-top: 16px;
                }
                .success-message {
                    animation: fadeIn 0.5s ease;
                }
                .check-icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 60px;
                    height: 60px;
                    background: var(--color-primary);
                    color: white;
                    font-size: 30px;
                    border-radius: 50%;
                    margin-bottom: 20px;
                }
                .btn-reset {
                    background: none;
                    border: none;
                    color: var(--color-primary);
                    text-decoration: underline;
                    margin-top: 16px;
                    cursor: pointer;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default WaitlistForm;
