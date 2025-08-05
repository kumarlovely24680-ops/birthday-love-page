import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Gift } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Romantic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-script text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
            Happy Birthday
          </h1>
          <h2 className="text-script text-4xl md:text-6xl lg:text-7xl font-medium mb-8">
            My Beautiful Love ✨
          </h2>
          <p className="text-elegant text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed text-foreground/80">
            Today is your special day, and I wanted to create something beautiful just for you. 
            You bring so much joy and love into my life every single day.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('quotes')}
              className="bg-romantic hover:shadow-glow transition-romantic px-8 py-6 text-lg font-medium rounded-full"
            >
              <Heart className="w-5 h-5 mr-2" />
              Read My Messages
            </Button>
            <Button 
              onClick={() => scrollToSection('gifts')}
              variant="outline"
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-romantic px-8 py-6 text-lg font-medium rounded-full"
            >
              <Gift className="w-5 h-5 mr-2" />
              See Your Gifts
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;