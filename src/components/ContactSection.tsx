import React, { useState } from 'react';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  CheckCircleIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon } from
'lucide-react';
export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30 relative">
      <div className="absolute top-0 left-0 w-full gold-divider"></div>

      <div className="container mx-auto">
        <div className="mb-16 reveal text-center md:text-left">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-heading font-bold block mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
            START YOUR JOURNEY
          </h2>
        </div>

        <div className="reveal liquid-glass rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Info (Gold Gradient) */}
            <div className="bg-gradient-to-br from-gold/90 to-gold-dark text-black p-10 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6">
                  Let's Build Your Dream Physique
                </h3>
                <p className="text-black/80 leading-relaxed mb-10">
                  Ready to elevate your fitness experience? Contact our
                  membership team to schedule a private tour of our facilities
                  or to inquire about our elite personal training packages.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPinIcon className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">
                        123 Luxury Avenue, Beverly Hills
                      </p>
                      <p className="text-black/80">CA 90210, United States</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <PhoneIcon className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">+1 (310) 555-0199</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MailIcon className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">
                        elite@fitnesssportscenter.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ClockIcon className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Members: 24/7 Access</p>
                      <p className="text-black/80">
                        Staffed: Mon-Sun, 6AM - 10PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-12">
                <a
                  href="#"
                  className="rounded-full bg-black/10 hover:bg-black/20 p-2.5 transition-colors text-black">
                  
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-black/10 hover:bg-black/20 p-2.5 transition-colors text-black">
                  
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-black/10 hover:bg-black/20 p-2.5 transition-colors text-black">
                  
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card p-10 md:p-12">
              {isSubmitted ?
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                  <CheckCircleIcon className="w-20 h-20 text-gold mb-6" />
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-4 uppercase tracking-wider">
                    Message Sent Successfully
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. Our elite membership team will
                    contact you within 24 hours.
                  </p>
                  <button
                  onClick={() => setIsSubmitted(false)}
                  className="border border-gold text-gold font-heading font-bold uppercase tracking-wider px-8 py-3 rounded-full hover:bg-gold/10 transition-colors">
                  
                    Send Another
                  </button>
                </div> :

              <form
                onSubmit={handleSubmit}
                className="space-y-6 h-full flex flex-col justify-center">
                
                  <div>
                    <label
                    htmlFor="name"
                    className="block text-sm font-heading font-bold text-foreground uppercase tracking-wider mb-2">
                    
                      Full Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value
                    })
                    }
                    className="w-full bg-transparent border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-all font-body"
                    placeholder="John Doe" />
                  
                  </div>
                  <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-heading font-bold text-foreground uppercase tracking-wider mb-2">
                    
                      Email Address
                    </label>
                    <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                    }
                    className="w-full bg-transparent border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-all font-body"
                    placeholder="john@example.com" />
                  
                  </div>
                  <div>
                    <label
                    htmlFor="message"
                    className="block text-sm font-heading font-bold text-foreground uppercase tracking-wider mb-2">
                    
                      Your Message
                    </label>
                    <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value
                    })
                    }
                    className="w-full bg-transparent border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-all font-body min-h-[150px] resize-y"
                    placeholder="How can we help you achieve your fitness goals?">
                  </textarea>
                  </div>
                  <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-gold-light text-black font-heading font-bold uppercase tracking-wider px-8 py-4 rounded-full gold-glow transition-all mt-4">
                  
                    Send Message
                  </button>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </section>);

}