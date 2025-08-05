import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: " I know there were many times I didn’t stand by you during your tough moments. I’m truly sorry Pandu for those unintentional actions on my part, Every moment with you feels like a beautiful dream that I never want to wake up from.",
    subtitle: "You are my forever Love"
  },
  {
    text: "love you so much Pandu ,You always make me feel like everything’s going to be okay. You’ve been there for me in my toughest times, right when I needed you the most. Thank you for being that person, Your smile lights up my world brighter than all the stars in the sky combined. ",
    subtitle: "My sunshine"
  },
  
  {
    text: "Specially , You make our ordinary moments extraordinary just by taking decisions for both of our happiness and creating memories. You are so perfect at loving Pandu.",
    subtitle: "Simply perfect"
  },
  {
    text: "With you, I've found my home, my best friend, my love, my everything, and my greatest love all in one person.",
    subtitle: "My heart's home"
  },
  {
    text: "I Love You Pandu , Bubu, Cutie Pie, Kamala Kay, Bubu Thalli, Bangaram, Bujji Munda, Cutu Amma, Junior, Satwika,  ",
    subtitle: "I Love You My Girl"
  }
];

const QuotesSection = () => {
  const [visibleQuotes, setVisibleQuotes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleQuotes(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const quoteElements = document.querySelectorAll('.quote-card');
    quoteElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="quotes" className="py-20 px-4 bg-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-script text-5xl md:text-6xl font-bold mb-6">
            Messages from My Heart 💝
          </h2>
          <p className="text-elegant text-xl max-w-2xl mx-auto text-muted-foreground">
            Words cannot express how much you mean to me, but here are a few thoughts from my heart
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {quotes.map((quote, index) => (
            <Card
              key={index}
              data-index={index}
              className={`quote-card relative p-8 md:p-12 shadow-soft hover:shadow-romantic transition-romantic bg-card/80 backdrop-blur-sm border-primary/20 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              } ${
                visibleQuotes.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } transition-all duration-1000`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-romantic rounded-full flex items-center justify-center shadow-glow">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Quote content */}
              <blockquote className="text-elegant text-xl md:text-2xl leading-relaxed mb-6 text-foreground/90">
                "{quote.text}"
              </blockquote>
              
              {/* Subtitle */}
              <p className="text-script text-lg md:text-xl font-medium text-primary">
                — {quote.subtitle}
              </p>

              {/* Decorative hearts */}
              <div className="absolute -bottom-2 -right-2 text-primary/30 text-3xl">
                💕
              </div>
            </Card>
          ))}
        </div>

        {/* Romantic decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 text-4xl">
            <span className="animate-pulse">💖</span>
            <span className="text-script text-2xl text-primary">Forever yours</span>
            <span className="animate-pulse">💖</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;