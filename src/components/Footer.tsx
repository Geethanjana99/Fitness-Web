import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-charcoal dark:bg-charcoal py-12 px-6 relative text-white">
      <div className="absolute top-0 left-0 w-full gold-divider"></div>

      <div className="container mx-auto reveal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-6">
              <img src="/Logo.png" alt="Logo" className="h-10 w-auto object-contain" />
              <span className="font-heading font-bold text-2xl tracking-wider text-white">
                FITNESS
              </span>
              <span className="font-heading font-bold text-2xl tracking-wider text-gold">
                SPORTS CENTER
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              The premier destination for elite personal training, luxury
              amenities, and unparalleled fitness experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg uppercase tracking-wider mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-gold transition-colors font-heading text-sm uppercase tracking-wider">
                  
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-gold transition-colors font-heading text-sm uppercase tracking-wider">
                  
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-gold transition-colors font-heading text-sm uppercase tracking-wider">
                  
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-gold transition-colors font-heading text-sm uppercase tracking-wider">
                  
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg uppercase tracking-wider mb-6 text-white">
              Connect With Us
            </h4>
            <div className="flex items-center gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors">
                
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors">
                
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors">
                
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for exclusive offers and fitness tips.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Fitness Sports Center. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}