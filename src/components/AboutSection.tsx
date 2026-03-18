import React from 'react';
export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-background relative">
      <div className="absolute top-0 left-0 w-full gold-divider"></div>

      <div className="container mx-auto">
        <div className="mb-16 reveal">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-heading font-bold block mb-4">
            About Us
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
            WHERE EXCELLENCE MEETS FITNESS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal-left space-y-8">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                At Fitness Sports Center, we believe that achieving your
                ultimate physical potential requires more than just equipment—it
                requires an environment engineered for excellence. We have
                curated a space where luxury meets hardcore training.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our elite personal trainers are industry veterans dedicated to
                crafting bespoke fitness journeys. Whether your goal is
                strength, endurance, or complete transformation, our exclusive
                facility provides the privacy, premium amenities, and expert
                guidance you need to succeed.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Join a community of driven individuals who refuse to settle for
                average. Experience the pinnacle of fitness and wellness.
              </p>
            </div>

            
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/50">
              <div className="flex flex-col">
                <span className="text-3xl font-heading font-bold text-gold">
                  15+
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Years
                </span>
              </div>
              <div className="w-px h-12 bg-gold/30 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-heading font-bold text-gold">
                  50+
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Trainers
                </span>
              </div>
              <div className="w-px h-12 bg-gold/30 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-heading font-bold text-gold">
                  10K+
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Members
                </span>
              </div>
              <div className="w-px h-12 bg-gold/30 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-heading font-bold text-gold">
                  24/7
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Access
                </span>
              </div>
            </div>
          </div>

          
          <div className="reveal-right">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-gold/20 hover:border-gold/40 transition-colors shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
                alt="Luxury Gym Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}