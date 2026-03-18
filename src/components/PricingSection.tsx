import React from 'react';
import { CheckIcon } from 'lucide-react';
export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-background relative">
      <div className="absolute top-0 left-0 w-full gold-divider"></div>

      <div className="container mx-auto">
        <div className="mb-16 text-center reveal">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-heading font-bold block mb-4">
            Membership Plans
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            CHOOSE YOUR PATH TO GREATNESS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the membership tier that matches your fitness ambitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
          <div
            className="reveal-scale bg-card border border-border rounded-2xl p-8 hover:border-gold/50 transition-all"
            style={{
              transitionDelay: '0ms'
            }}>
            
            <div className="inline-block bg-amber-900/20 text-amber-600 px-4 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-6">
              BRONZE
            </div>
            <div className="mb-6">
              <span className="text-4xl font-heading font-bold text-foreground">
                Rs. 3,000
              </span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
            <div className="h-px bg-border my-6"></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Access to gym floor
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Basic equipment usage
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Locker room access
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  2 group classes/week
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Free parking</span>
              </li>
            </ul>
            <button className="border border-border text-foreground hover:border-gold hover:text-gold rounded-full px-8 py-3 font-heading font-bold uppercase tracking-wider transition-all w-full text-center">
              Select Bronze
            </button>
          </div>

          
          <div
            className="reveal-scale relative bg-card border-2 border-gold rounded-2xl p-8 shadow-[0_0_40px_rgba(212,160,23,0.15)] md:scale-105 z-10"
            style={{
              transitionDelay: '200ms'
            }}>
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gold to-gold-light text-black px-6 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap">
              Most Popular
            </div>
            <div className="inline-block bg-gold/20 text-gold px-4 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-6 mt-2">
              GOLD
            </div>
            <div className="mb-6">
              <span className="text-5xl font-heading font-bold text-gold">
                Rs. 5,000
              </span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
            <div className="h-px bg-border my-6"></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">
                  Everything in Silver
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Unlimited personal training
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Priority equipment booking
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Luxury spa full access
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Nutrition consultation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Private locker & towel service
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">VIP lounge access</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Guest passes (2/month)
                </span>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-gold to-gold-light text-black rounded-full px-8 py-3 font-heading font-bold uppercase tracking-wider gold-glow w-full transition-all">
              Select Gold
            </button>
          </div>

          
          <div
            className="reveal-scale bg-card border border-border rounded-2xl p-8 hover:border-gold/50 transition-all"
            style={{
              transitionDelay: '400ms'
            }}>
            
            <div className="inline-block bg-gray-400/20 text-gray-400 px-4 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-6">
              SILVER
            </div>
            <div className="mb-6">
              <span className="text-4xl font-heading font-bold text-foreground">
                Rs. 4,000
              </span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
            <div className="h-px bg-border my-6"></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">
                  Everything in Bronze
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Full equipment access
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  5 group classes/week
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">1 PT session/week</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Sauna & steam room
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Fitness assessment monthly
                </span>
              </li>
            </ul>
            <button className="border border-border text-foreground hover:border-gold hover:text-gold rounded-full px-8 py-3 font-heading font-bold uppercase tracking-wider transition-all w-full text-center">
              Select Silver
            </button>
          </div>
        </div>
      </div>
    </section>);

}