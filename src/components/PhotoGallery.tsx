import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Camera, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import local images
import photo1 from '@/assets/Airbrush-Image-Enhancer-1754424414105.jpg';
import photo2 from '@/assets/IMG-20241114-WA0004.jpg';
import photo3 from '@/assets/Snapchat-1416106150.jpg';
import photo4 from '@/assets/Snapchat-1471188292.jpg';
import photo5 from '@/assets/Snapchat-83227776.jpg';
import photo6 from '@/assets/Snapchat-1811996845.jpg';
import photo7 from '@/assets/IMG-20250216-WA0003.jpg';
import photo8 from '@/assets/Snapchat-973599530.jpg';
import photo9 from '@/assets/Snapchat-1653494793.jpg';
import photo10 from '@/assets/Snapchat-874580915.jpg';
import photo11 from '@/assets/Snapchat-2113921069-Pica.png';
import photo12 from '@/assets/snapedit_1754426760510.jpeg';

// Your beautiful photos - replaced with your actual images
const photos = [
  {
    id: 1,
    url: photo1,
    caption: "You Look Beautiful in this saree  ✨"
  },
  {
    id: 2,
    url: photo2,
    caption: "Ewwwww Corporate Girl "
  },
  {
    id: 3,
    url: photo3,
    caption: "Eeee Half Saree Lo Nv Super Cute maa ⭐"
  },
  {
    id: 4,
    url: photo4,
    caption: "My All Time Favourite Picture 💎"
  },
  {
    id: 5,
    url: photo5,
    caption: "Cuteness Overloaded  🌹"
  },
  {
    id: 6,
    url: photo6,
    caption: "Cutie Pie ,Thingari Buchiii 📖"
  },
  {
    id: 7,
    url: photo7,
    caption: "You + this saree = Mesmerizing 🌸"
  },
  {
    id: 8,
    url: photo8,
    caption: "Heyyyy Burgerrr pillaaaa ✨"
  },
  {
    id: 9,
    url: photo9,
    caption: "Ewwwwww Ah Style Chuuduu.... 🧩"
  },
  {
    id: 10,
    url: photo10,
    caption: "My all time Favourite Picture clicked by me 💫"
  },
  {
    id: 11,
    url: photo11,
    caption: "Ahhhh You are thinking that `Nenu Veediki Ela Padipoyaaa!!!!` ✨"
  },
  {
    id: 12,
    url: photo12,
    caption: "You have some magic in your eyes 🌟"
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

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

        {/* Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {photos.map((photo) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden bg-white shadow-soft hover:shadow-glow transition-all duration-500 transform hover:scale-105 border-0">
                  <div className="relative aspect-square bg-gradient-to-br from-pink-100 to-purple-100">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-contain p-2"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Camera className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-elegant text-sm font-medium text-gray-700 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-transparent border-0 shadow-none">
                <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-contain p-8"
                  />
                  <div className="absolute top-4 right-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full"
                      onClick={() => setSelectedPhoto(null)}
                    >
                      <X className="w-5 h-5 text-white" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <p className="text-white text-lg font-medium text-center">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center">
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