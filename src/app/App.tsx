import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MenuSection } from './components/MenuSection';
import { PartyArea } from './components/PartyArea';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <MenuSection />
      <PartyArea />
      <Footer />
      <ScrollToTop />
    </div>
  );
}