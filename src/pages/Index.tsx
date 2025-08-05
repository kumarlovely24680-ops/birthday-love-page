import HeroSection from '@/components/HeroSection';
import QuotesSection from '@/components/QuotesSection';
import GiftsSection from '@/components/GiftsSection';
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuotesSection />
      <GiftsSection />
      <PhotoGallery />
      <Footer />
    </div>
  );
};

export default Index;
