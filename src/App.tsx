import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickFeatures } from './components/QuickFeatures';
import { Fleet } from './components/Fleet';
import { Pricing } from './components/Pricing';
import { Packages } from './components/Packages';
import { Timeline } from './components/Timeline';
import { Benefits } from './components/Benefits';
import { Destinations } from './components/Destinations';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Gallery } from './components/Gallery';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-mana-yellow selection:text-mana-dark overflow-x-hidden font-sans scroll-smooth">
      <Helmet>
        <title>MANA CARS - Premium Car Rental in Hyderabad | Drive Smarter, Travel Better</title>
        <meta name="description" content="Book affordable city rides, airport transfers, outstation trips, and premium rental cars across Hyderabad with MANA CARS. Instant booking via WhatsApp." />
        <meta name="keywords" content="Car Rental Hyderabad, Airport Drop, Outstation Trips, Self Drive, Premium Cars, MANA CARS, Zoomcar, DriveX, Rapido" />
      </Helmet>

      <Navbar />
      
      <main>
        <Hero />
        
        <QuickFeatures />
        <Fleet />
        <Pricing />
        <Packages />
        <Timeline />
        <Benefits />
        <Destinations />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
