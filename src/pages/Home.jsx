import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import OurStory from '../components/OurStory';
import MissionImpact from '../components/MissionImpact';
import MoreThanHoney from '../components/MoreThanHoney';
import Gallery from '../components/Gallery';
import WaitlistForm from '../components/WaitlistForm';
import Footer from '../components/Footer';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    const headerOffset = 90;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 150); // Small delay to ensure rendering
            }
        }
    }, [location]);

    return (
        <main style={{ paddingTop: '90px' }}>
            <Navbar />
            <Hero />
            <ProductShowcase />
            <OurStory />
            <MissionImpact />
            <MoreThanHoney />
            <Gallery />
            <WaitlistForm />
            <Footer />
        </main>
    );
};

export default Home;
