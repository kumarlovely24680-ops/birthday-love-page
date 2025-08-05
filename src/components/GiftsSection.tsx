import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Sparkles, Star } from 'lucide-react';
import giftHamper1 from '@/assets/gift-hamper-1.jpg';
import giftHamper2 from '@/assets/gift-hamper-2.jpg';
import giftHamper3 from '@/assets/gift-hamper-3.jpg';

const gifts = [
  {
    id: 1,
    name: "Romance Collection",
    description: "Beautiful roses, artisanal chocolates, and a handwritten love letter",
    image: giftHamper1,
    price: "Priceless",
    badge: "Most Romantic",
    icon: Heart,
    color: "text-rose-500"
  },
  {
    id: 2,
    name: "Spa & Relaxation",
    description: "Luxury spa essentials, scented candles, and bath bombs for ultimate relaxation",
    image: giftHamper2,
    price: "Pure Bliss",
    badge: "Self Care",
    icon: Sparkles,
    color: "text-purple-500"
  },
  {
    id: 3,
    name: "Gourmet Delights",
    description: "Fine wine, French macarons, and gourmet treats for a perfect evening",
    image: giftHamper3,
    price: "Delicious",
    badge: "Foodie's Dream",
    icon: Star,
    color: "text-amber-500"
  }
];

const GiftsSection = () => {
  const [visibleGifts, setVisibleGifts] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleGifts(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const giftElements = document.querySelectorAll('.gift-card');
    giftElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gifts" className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-script text-5xl md:text-6xl font-bold mb-6">
            Special Gifts Just for You 🎁
          </h2>
          <p className="text-elegant text-xl max-w-2xl mx-auto text-muted-foreground">
            I've prepared these beautiful hampers to celebrate your special day and show how much you mean to me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {gifts.map((gift, index) => {
            const IconComponent = gift.icon;
            return (
              <Card
                key={gift.id}
                data-index={index}
                className={`gift-card group relative overflow-hidden shadow-soft hover:shadow-romantic transition-romantic bg-card/90 backdrop-blur-sm border-primary/20 ${
                  visibleGifts.includes(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                } transition-all duration-700`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-romantic text-white shadow-glow">
                    {gift.badge}
                  </Badge>
                </div>

                {/* Image container */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating icon */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className={`w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg ${gift.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-elegant text-2xl font-semibold mb-3 text-foreground">
                    {gift.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {gift.description}
                  </p>
                  
                  {/* Price tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-script text-xl font-medium text-primary">
                      {gift.price}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Heart 
                          key={i} 
                          className="w-4 h-4 text-rose-400 fill-current" 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <Card className="inline-block p-6 bg-romantic border-none shadow-glow">
            <p className="text-white text-lg font-medium">
              🌹 Each gift is chosen with all my love 🌹
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;