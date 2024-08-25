import Header from './components/Header';
import Hero from './components/Hero';
import OptionChain from './components/OptionChain';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './globals.css';
import Explore from './components/Explore';
import Banner from './components/Banner';
import Screening from './components/Screening';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Explore />
      <OptionChain />
      <Features />
      <Banner />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Screening />
      <Footer />
    </div>
  );
}
