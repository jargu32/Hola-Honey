import React from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import WaitlistForm from './components/WaitlistForm';

function App() {
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
}

export default App;
