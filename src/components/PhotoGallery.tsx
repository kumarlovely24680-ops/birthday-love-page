import { useState, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Camera, Heart, X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 10 beautiful photos of her - you can replace these with actual photos
const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1494790108755-2616c78107a0?w=800&h=800&fit=crop&crop=face",
    caption: "Your beautiful smile that lights up my world ✨",
    date: "Forever in my heart"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=800&fit=crop&crop=face",
    caption: "The way you laugh makes everything better 💕",
    date: "Pure joy"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face",
    caption: "Your eyes hold all the stars I need to see ⭐",
    date: "My universe"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=800&fit=crop&crop=face",
    caption: "Every moment with you is a treasure 💎",
    date: "Precious memories"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop&crop=face",
    caption: "You are absolutely perfect just as you are 🌹",
    date: "My love"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=800&fit=crop&crop=face",
    caption: "Together we create the most beautiful story 📖",
    date: "Our journey"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop&crop=face",
    caption: "Your beauty takes my breath away every time 🌸",
    date: "Mesmerizing"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&h=800&fit=crop&crop=face",
    caption: "In your presence, everything feels magical ✨",
    date: "Pure magic"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop&crop=face",
    caption: "You are the missing piece to my puzzle 🧩",
    date: "My soulmate"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=800&fit=crop&crop=face",
    caption: "With you, every day feels like a beautiful dream 💫",
    date: "My dream come true"
  }
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  // Auto-rotate functionality
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-rotate timer
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Pause auto-rotate on hover
  const handleMouseEnter = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPlaying(true);
  }, []);

  return (
    <section id="gallery" className="py-20 px-4 bg-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-script text-5xl md:text-6xl font-bold mb-6">
            Beautiful Memories 📸
          </h2>
          <p className="text-elegant text-xl max-w-2xl mx-auto text-muted-foreground">
            A collection of moments that capture your beauty and the joy you bring to my life
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-soft"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Images */}
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="text-center">
                  <p className="text-white text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-2">
                    {photo.caption}
                  </p>
                  <p className="text-script text-primary text-lg md:text-xl font-medium">
                    {photo.date}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>

          {/* Photo Counter */}
          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-white text-sm font-medium">
              {currentIndex + 1} / {photos.length}
            </span>
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-romantic rounded-full px-8 py-4 shadow-glow">
            <Heart className="w-6 h-6 text-white" />
            <span className="text-white text-lg font-medium">
              Every photo tells our beautiful story
            </span>
            <Heart className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;