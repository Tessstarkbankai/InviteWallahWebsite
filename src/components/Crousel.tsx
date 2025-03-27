import React, { useState, useEffect } from 'react';
import './font.css';
import { ChevronLeft, ChevronRight, Mail, MessageCircle, Instagram, Phone } from 'lucide-react';

interface WeddingInvite {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const invites: WeddingInvite[] = [
  {
    id: 1,
    title: "Regal Wedding Invites",
    subtitle: "WEDDING VIDEO DIGITAL INVITES",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=3869",
  },
  {
    id: 2,
    title: "GAndeur Wedding Invites",
    subtitle: "WEDDING VIDEO DIGITAL INVITES",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=3870",
  },
  {
    id: 3,
    title: "Pichwai Wedding Invites",
    subtitle: "WEDDING VIDEO DIGITAL INVITES",
    image: "https://images.unsplash.com/photo-1549417229-7686ac5595fd?auto=format&fit=crop&q=80&w=3774",
  },
  {
    id: 4,
    title: "Backwater Wedding Invites",
    subtitle: "WEDDING VIDEO DIGITAL INVITES",
    image: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&q=80&w=3870",
  },
  {
    id: 5,
    title: "Royal Wedding Invites",
    subtitle: "WEDDING VIDEO DIGITAL INVITES",
    image: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&q=80&w=3870",
  },
  {
    id: 6,
    title: "Classic Wedding Invites",
    subtitle: "WEDDING VIDEO DIGITAL INVITES",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=3870",
  },
];

function App(data) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create a circular array by duplicating the first few items at the end
  const extendedInvites = [...invites, ...invites.slice(0, 3)];

  const moveSlide = (direction: 'next' | 'prev') => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    if (direction === 'next') {
      setCurrentIndex(current => {
        const nextIndex = current + 1;
        return nextIndex >= invites.length ? 0 : nextIndex;
      });
    } else {
      setCurrentIndex(current => {
        const prevIndex = current - 1;
        return prevIndex < 0 ? invites.length - 1 : prevIndex;
      });
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      moveSlide('next');
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const getTransformValue = () => {
    const baseTransform = -(currentIndex * (100 / 3));
    return `translateX(${baseTransform}%)`;
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl [word-spacing:0.1em] font-roboto text-center mb-4">{data.heading}</h1>
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-0">
          <p className="text-lg text-gray-800 font-cursive">
            {data.dataone}
         
            {data.datatwo}
          </p>
        </div>

        <div className="relative px-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: getTransformValue() }}
            >
              {extendedInvites.map((invite, index) => (
                <div 
                  key={`${invite.id}-${index}`}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-neutral-100 rounded-lg p-4 shadow-lg">
                    <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={invite.image} 
                        alt={invite.title}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="mt-4 text-center">
                      <div className="inline-block px-3 py-1 border-2 border-amber-200 mb-2">
                        <span className="font-serif text-amber-800 text-sm">POSH</span>
                      </div>
                      <h3 className="text-base font-medium mb-1">{invite.title}</h3>
                      <p className="text-xs text-gray-600 mb-2">{invite.subtitle}</p>
                      
                      <p className="text-xs text-gray-500 mb-2">Easily Send Via</p>
                      <div className="flex justify-center gap-3">
                        <Mail className="w-4 h-4 text-gray-600 hover:text-amber-600 transition-colors" />
                        <MessageCircle className="w-4 h-4 text-gray-600 hover:text-amber-600 transition-colors" />
                        <Phone className="w-4 h-4 text-gray-600 hover:text-amber-600 transition-colors" />
                        <Instagram className="w-4 h-4 text-gray-600 hover:text-amber-600 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => moveSlide('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => moveSlide('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {invites.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-amber-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

















