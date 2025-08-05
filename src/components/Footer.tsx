import { Heart, Calendar, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary via-accent to-rose-gold py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main message */}
        <div className="mb-12">
          <h3 className="text-script text-4xl md:text-5xl font-bold text-white mb-6">
            Until the End of Time 💫
          </h3>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Thank you for being the most amazing person in my life. Every day with you is a gift, 
            and I can't wait to create many more beautiful memories together.
          </p>
        </div>

        {/* Special info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Calendar className="w-8 h-8 text-white mb-3" />
            <p className="text-white font-medium">Your Special Day</p>
            <p className="text-white/80 text-sm">
              August 7, 2025
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <Heart className="w-8 h-8 text-white mb-3" />
            <p className="text-white font-medium">Made With Love</p>
            <p className="text-white/80 text-sm">For the most wonderful person</p>
          </div>
          
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-white mb-3" />
            <p className="text-white font-medium">From My Heart</p>
            <p className="text-white/80 text-sm">To yours, always</p>
          </div>
        </div>

        {/* Romantic quote */}
        <div className="border-t border-white/20 pt-8">
          <blockquote className="text-script text-2xl md:text-3xl text-white/90 mb-4">
            "In your eyes, I have found my home. In your heart, I have found my love."
          </blockquote>
          <p className="text-white/70 text-sm">
            Happy Birthday, my beautiful love ✨
          </p>
        </div>

        {/* Floating hearts animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/20 text-xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            >
              💕
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;