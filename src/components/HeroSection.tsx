import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from 'lucide-react';
const HERO_IMAGES = [`${import.meta.env.BASE_URL}Background.jpg`, `${import.meta.env.BASE_URL}Background2.jpg`];





export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 30000);
    return () => clearInterval(timer);
  }, [currentSlide]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length
    );
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      
      {HERO_IMAGES.map((img, index) =>
      <div
        key={index}
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url("${img}")`,
          backgroundPosition: 'center 20%'
        }}>
        
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
        </div>
      )}

      
      <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center justify-start h-full pt-20">
        
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 border border-white/10 items-center justify-center cursor-pointer hover:bg-gold hover:border-gold transition-colors group z-30"
          aria-label="Previous slide">
          
          <ChevronLeftIcon className="text-white group-hover:text-black w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 border border-white/10 items-center justify-center cursor-pointer hover:bg-gold hover:border-gold transition-colors group z-30"
          aria-label="Next slide">
          
          <ChevronRightIcon className="text-white group-hover:text-black w-6 h-6" />
        </button>

        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {HERO_IMAGES.map((_, index) =>
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gold scale-125' : 'bg-white/30 hover:bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`} />

          )}
        </div>

        
        <div className="w-full md:w-2/3 lg:w-1/2 text-left flex flex-col items-start">
          <div
            className="animate-fade-in-up"
            style={{
              animationDelay: '0.2s'
            }}>
            
            <span className="text-gold font-heading text-sm uppercase tracking-[0.3em] font-bold mb-4 block">
              Shape Your Body
            </span>
          </div>

          <h1
            className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 animate-fade-in-up"
            style={{
              animationDelay: '0.4s'
            }}>
            
            UNLEASH YOUR <br />
            <span className="text-gold">ELITE</span> POTENTIAL
          </h1>

          <p
            className="text-gray-300 font-body text-lg md:text-xl max-w-lg mb-10 animate-fade-in-up"
            style={{
              animationDelay: '0.6s'
            }}>
            
            Transform your body and mind with world-class training in an
            exclusive luxury environment.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up w-full sm:w-auto"
            style={{
              animationDelay: '0.8s'
            }}>
            
            <button className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light text-black font-heading font-bold uppercase tracking-wider px-10 py-4 gold-glow transition-all w-full sm:w-auto">
              Join Now
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="rounded-full border-2 border-gold/60 text-gold hover:bg-gold/10 hover:border-gold backdrop-blur-sm bg-white/5 transition-all duration-300 font-heading font-bold uppercase tracking-wider px-10 py-4 w-full sm:w-auto">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>);

}