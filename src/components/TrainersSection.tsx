import React from 'react';
import { InstagramIcon, TwitterIcon } from 'lucide-react';
export function TrainersSection() {
  const trainers = [
  {
    name: 'Marcus Vance',
    role: 'Head Strength Coach',
    description:
    'Former Olympian specializing in powerlifting and functional hypertrophy.',
    image:
    'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop',
    delay: '0ms'
  },
  {
    name: 'Elena Rostova',
    role: 'Elite Conditioning',
    description:
    'Expert in high-intensity interval training and athletic performance optimization.',
    image:
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop',
    delay: '150ms'
  },
  {
    name: 'David Chen',
    role: 'Mobility & Recovery',
    description:
    'Doctor of Physical Therapy focused on injury prevention and biomechanics.',
    image:
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=800&fit=crop',
    delay: '300ms'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Nutrition & Wellness',
    description:
    'Certified sports nutritionist helping clients fuel for peak performance.',
    image:
    'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&h=800&fit=crop',
    delay: '450ms'
  }];

  return (
    <section id="trainers" className="py-24 px-6 bg-muted/10 relative">
      <div className="absolute top-0 left-0 w-full gold-divider"></div>

      <div className="container mx-auto">
        <div className="mb-16 text-center reveal">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-heading font-bold block mb-4">
            Our Experts
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            MEET THE ELITE TRAINERS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Work with industry-leading professionals dedicated to pushing your
            limits and achieving extraordinary results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) =>
          <div
            key={index}
            className="reveal-scale group overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,160,23,0.15)]"
            style={{
              transitionDelay: trainer.delay
            }}>
            
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Social Links (appear on hover) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors">
                  
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors">
                  
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Text Content — Always Visible */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                  {trainer.name}
                </h3>
                <p className="text-gold text-sm font-heading uppercase tracking-wider mb-3">
                  {trainer.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {trainer.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}