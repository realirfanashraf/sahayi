"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-soft mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">
              One Platform. Trusted Services.
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            All the Services You Need{" "}
            <span className="text-gradient">One Trusted Destination</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            From healthcare and education to home services, events, travel, and
            daily essentials — we connect you with verified professionals to
            simplify life, all in one place.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity group"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "100+", label: "Service Categories" },
              { value: "500+", label: "Happy Customers" },
              { value: "1K+", label: "Verified Professionals" },
              { value: "24/7", label: "Support & Assistance" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
