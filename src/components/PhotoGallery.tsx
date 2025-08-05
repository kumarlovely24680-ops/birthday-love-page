import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Camera, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Placeholder photos - you can replace these with actual photos
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
  }
];

const PhotoGallery = () => {
  const [visiblePhotos, setVisiblePhotos] = useState<number[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisiblePhotos(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const photoElements = document.querySelectorAll('.photo-card');
    photoElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <Card
                  data-index={index}
                  className={`photo-card group relative overflow-hidden cursor-pointer shadow-soft hover:shadow-romantic transition-romantic bg-card border-primary/20 ${
                    visiblePhotos.includes(index) 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="photo-overlay">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Camera className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Heart indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="w-6 h-6 text-white fill-current drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {photo.caption}
                    </p>
                    <p className="text-script text-primary text-center mt-2 font-medium">
                      {photo.date}
                    </p>
                  </div>
                </Card>
              </DialogTrigger>

              {/* Photo modal */}
              <DialogContent className="max-w-4xl border-none bg-black/90 p-0">
                <div className="relative">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg md:text-xl text-center leading-relaxed">
                      {photo.caption}
                    </p>
                    <p className="text-script text-primary text-center mt-2 text-lg font-medium">
                      {photo.date}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
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