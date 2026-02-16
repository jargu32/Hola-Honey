import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import WaitlistForm from '../components/WaitlistForm';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure rendering
            }
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <ProductShowcase />
            <WaitlistForm />

            <footer style={{
                textAlign: 'center',
                padding: '2rem',
                color: 'rgba(255,255,255,0.3)',
                fontSize: '0.875rem'
            }}>
                <p>&copy; {new Date().getFullYear()} Hola Honey. All rights reserved.</p>
            </footer>
        </main>
    );
};

export default Home;
