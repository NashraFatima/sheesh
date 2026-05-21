"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { menuImages } from "@/lib/menu-images";

export function CateringPageContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-24">
      <div className="section-padding mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <SectionHeading
            align="left"
            eyebrow="Catering"
            title="Events Elevated"
            subtitle="From intimate gatherings to grand celebrations — our culinary team and lounge specialists craft bespoke Sheesh experiences at your venue."
          />
          <div className="group relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl border border-[#d4af37]/10">
            <Image
              src={menuImages.catering}
              alt="Sheesh catering"
              fill
              className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
          </div>
          <ul className="mt-8 space-y-3 font-[family-name:var(--font-body)] text-sm text-white/55">
            <li>— Full-service catering & premium hookah stations</li>
            <li>— Custom menus & dietary accommodations</li>
            <li>— On-site chefs and dedicated event hosts</li>
            <li>— Corporate, wedding, and private celebrations</li>
          </ul>
          <p className="mt-6 font-[family-name:var(--font-body)] text-sm text-white/40">
            Questions? Call <span className="text-[#d4af37]">(214) 407-7941</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass-luxury glow-gold luxury-shadow rounded-3xl p-8 md:p-10"
        >
          {submitted ? (
            <div className="py-16 text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl text-gold-gradient">
                Thank You
              </p>
              <p className="mt-4 font-[family-name:var(--font-body)] text-white/55">
                Our events team will reach out within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(214) 407-7941"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Guest Count</Label>
                  <Input id="guests" name="guests" type="number" min={1} placeholder="50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Input id="date" name="date" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Event Details</Label>
                <Textarea
                  id="details"
                  name="details"
                  required
                  placeholder="Tell us about your vision, venue, and preferences..."
                  rows={5}
                />
              </div>
              <MagneticButton type="submit" variant="gold" className="w-full sm:w-auto">
                Submit Inquiry
              </MagneticButton>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
