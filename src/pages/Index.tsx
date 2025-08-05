import HeroSection from '@/components/HeroSection';
import QuotesSection from '@/components/QuotesSection';
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuotesSection />
      <PhotoGallery />
      <Footer />
    </div>
  );
};

export default Index;
