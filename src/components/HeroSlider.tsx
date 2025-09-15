import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import hero images
import heroSlide1 from '@/assets/hero-slide-3-new.png';
import heroSlide2 from '@/assets/hero-slide-2.png';
import heroSlide3 from '@/assets/hero-slide-1.png';
import heroSlide4 from '@/assets/hero-slide-4.png';
import heroSlide5 from '@/assets/hero-slide-5.png';
const slides = [{
  image: heroSlide1,
  title: 'Study & Knowledge',
  description: 'Excellence in Action',
  alt: 'Professional students studying in modern library setting'
}, {
  image: heroSlide2,
  title: 'Events & Networking',
  description: 'Excellence in Action',
  alt: 'Professional networking event in modern auditorium'
}, {
  image: heroSlide3,
  title: 'Professional Excellence',
  description: 'Excellence in Action',
  alt: 'Professional panel discussion with speakers'
}, {
  image: heroSlide4,
  title: 'Community & Impact',
  description: 'Excellence in Action',
  alt: 'Group photo of professional association members'
}, {
  image: heroSlide5,
  title: 'Kolkata Professional Hub',
  description: 'Excellence in Action',
  alt: 'Kolkata cityscape with BBD Bagh financial district'
}];
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, []);
  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, []);
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isPlaying]);
  return <section className="relative h-screen w-full overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} role="banner" aria-label="Hero slider showcasing BBD Bag Professional Association">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" loading={index === 0 ? 'eager' : 'lazy'} />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 gradient-hero" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="animate-fade-up">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    BBD Bag Professional Association
                  </h1>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 opacity-90">
                    कर्मसु कौशलम्
                  </p>
                  <p className="text-lg sm:text-xl mb-8 opacity-75 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="btn-primary text-lg px-8 py-3 rounded-xl font-semibold hover:shadow-red" asChild>
                      
                    </Button>
                    <Button variant="outline" size="lg" className="btn-outline text-lg px-8 py-3 rounded-xl font-semibold border-white text-white hover:bg-white hover:text-secondary" asChild>
                      
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <Button variant="ghost" size="lg" onClick={prevSlide} className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white border-0 rounded-full w-12 h-12" aria-label="Previous slide">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <Button variant="ghost" size="lg" onClick={nextSlide} className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white border-0 rounded-full w-12 h-12" aria-label="Next slide">
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white/75'}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>

      {/* Play/Pause Control */}
      <div className="absolute bottom-8 right-8">
        <Button variant="ghost" size="sm" onClick={() => setIsPlaying(!isPlaying)} className="bg-black/20 hover:bg-black/40 text-white border-0 rounded-full w-10 h-10" aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}>
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </Button>
      </div>
    </section>;
};
export default HeroSlider;
