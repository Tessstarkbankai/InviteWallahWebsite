import React, { useState, useEffect, useRef } from 'react';
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
    title: "Grandeur Wedding Invites",
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

function App({ heading = "Wedding Invitations", dataone = "Beautiful", datatwo = "Digital Invites" }) {
  // Ensure we always show at least the number of cards per view
  const [cardsPerView, setCardsPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  // Set up a proper implementation that correctly duplicates items
  // to allow for infinite scrolling without showing empty space
  const items = React.useMemo(() => {
    // Create a duplicate set on either side to allow for infinite scrolling
    return [...invites, ...invites, ...invites];
  }, []);

  // Determine how many cards to show based on screen width
  const updateCardsPerView = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setCardsPerView(1);
    } else if (width < 1024) {
      setCardsPerView(2);
    } else {
      setCardsPerView(3);
    }
  };

  // Initialize responsive behavior
  useEffect(() => {
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    // Set initial position to the middle set to allow movement in either direction
    setCurrentIndex(invites.length);
    
    return () => {
      window.removeEventListener('resize', updateCardsPerView);
    };
  }, []);

  // Reset carousel to middle set when it reaches end of either duplicate set
  // This creates the illusion of infinite scrolling
  useEffect(() => {
    if (currentIndex < invites.length - 1) {
      // If we're near the beginning of the first set, jump to the middle set
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + invites.length);
      }, 500);
    } else if (currentIndex >= invites.length * 2) {
      // If we've gone past the middle set, jump back to the middle
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - invites.length);
      }, 500);
    }
  }, [currentIndex]);

  // Handle auto-play with proper cleanup
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayTimerRef.current = setInterval(() => {
        if (!isPaused) {
          setIsTransitioning(true);
          setCurrentIndex(prev => prev + 1);
        }
      }, 4000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPaused]);
  
  // Handle navigation with proper transition state
  const handleNavigation = (direction) => {
    setIsTransitioning(true);
    setIsPaused(true);
    
    if (direction === 'next') {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
    
    // Resume auto-play after user interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };
  
  // Handle dot navigation
  const goToSlide = (index) => {
    setIsTransitioning(true);
    setIsPaused(true);
    // Position within middle set for consistent behavior
    setCurrentIndex(invites.length + index);
    
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left - next slide
      handleNavigation('next');
    } else if (touchStart - touchEnd < -75) {
      // Swipe right - previous slide
      handleNavigation('prev');
    }
    
    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
    
    // Resume auto-play after interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Event handlers for mouse interaction
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Get current slide's real index for dot indicator
  const getCurrentRealIndex = () => {
    return currentIndex % invites.length;
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-6 sm:py-8 md:py-12 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-roboto text-center mb-2 sm:mb-4">{heading}</h1>

        <div className="text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto mb-5 sm:mb-8 md:mb-10">
          <p className="text-sm sm:text-base md:text-lg text-gray-800 font-cursive">
            {dataone} {datatwo}
          </p>
        </div>

        <div 
          className="relative" 
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ${isTransitioning ? 'ease-out' : 'ease-none'}`}
              style={{
                width: `${(items.length * 100) / cardsPerView}%`,
                transform: `translateX(-${(currentIndex * 100) / cardsPerView / items.length * cardsPerView}%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {items.map((invite, index) => (
                <div
                  key={`${invite.id}-${index}`}
                  className="px-1 sm:px-2 md:px-3 lg:px-4"
                  style={{ width: `${100 / items.length}%` }}
                >
                  <div className="bg-neutral-100 rounded-lg p-2 sm:p-3 md:p-4 shadow-lg h-full">
                    <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                      <img
                        src={invite.image}
                        alt={invite.title}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-2 sm:mt-4 text-center">
                      <div className="inline-block px-2 py-1 border-2 border-amber-200 mb-1 sm:mb-2">
                        <span className="font-serif text-amber-800 text-xs sm:text-sm">POSH</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-medium mb-1">{invite.title}</h3>
                      <p className="text-xs text-gray-600 mb-1 sm:mb-2">{invite.subtitle}</p>
                      <p className="text-xs text-gray-500 mb-1 sm:mb-2">Easily Send Via</p>
                      <div className="flex justify-center gap-2 sm:gap-3">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-amber-600 transition-colors" />
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-amber-600 transition-colors" />
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-amber-600 transition-colors" />
                        <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-amber-600 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Better positioned for all screen sizes */}
          <button
            onClick={() => handleNavigation('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => handleNavigation('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator - Proper current slide tracking */}
          <div className="flex justify-center gap-1 sm:gap-2 mt-3 sm:mt-4 md:mt-6">
            {invites.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                  getCurrentRealIndex() === index ? 'bg-amber-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;