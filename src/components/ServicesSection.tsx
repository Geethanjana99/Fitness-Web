import { DumbbellIcon, CrownIcon, SparklesIcon } from 'lucide-react';
export function ServicesSection() {
  const services = [
  {
    icon: <DumbbellIcon className="w-8 h-8 text-gold mb-4" />,
    title: 'Personal Training',
    description:
    'One-on-one sessions with elite certified trainers tailored to your unique fitness goals and physical capabilities.',
    image:
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    delay: '0ms'
  },
  {
    icon: <CrownIcon className="w-8 h-8 text-gold mb-4" />,
    title: 'Elite Equipment',
    description:
    'State-of-the-art Technogym and Hammer Strength equipment maintained perfectly in a pristine environment.',
    image:
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    delay: '200ms'
  },
  {
    icon: <SparklesIcon className="w-8 h-8 text-gold mb-4" />,
    title: 'Luxury Spa',
    description:
    'Rejuvenate with our premium spa services including sauna, steam room, cold plunge, and sports massage therapy.',
    image:
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop',
    delay: '400ms'
  }];

  return (
    <section id="services" className="py-24 px-6 bg-muted/30 relative">
      <div className="absolute top-0 left-0 w-full gold-divider"></div>

      <div className="container mx-auto">
        <div className="mb-16 text-center reveal">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-heading font-bold block mb-4">
            Our Services
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
            PREMIUM FITNESS EXPERIENCES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <div
            key={index}
            className="reveal-scale bg-card border border-gold/20 hover:border-gold rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,160,23,0.15)] group flex flex-col"
            style={{
              transitionDelay: service.delay
            }}>
            
              <div className="h-48 overflow-hidden relative">
                <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col relative -mt-12">
                <div className="bg-card w-16 h-16 rounded-full flex items-center justify-center border border-gold/20 shadow-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl uppercase tracking-wider mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}