import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
import SpecsSection from '@/components/SpecsSection';
import SocialProof from '@/components/SocialProof';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <FeaturesGrid />
        <SpecsSection />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
