import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  "Industry-leading expertise and proven methodologies",
  "Dedicated team of 50+ specialists",
  "Tailored solutions for every business size",
  "24/7 support and continuous optimization",
];

const AboutPreview = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-primary overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="font-display text-7xl font-bold mb-4">
                    15+
                  </div>
                  <div className="text-xl font-medium opacity-90">
                    Years of Excellence
                  </div>
                  <div className="mt-8 w-24 h-1 bg-secondary mx-auto rounded-full" />
                </div>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                  <span className="text-xl font-bold text-accent-foreground">
                    ★
                  </span>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground">
                    4.9/5
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Client Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              We Build Success Stories
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Since 2010, Nexus has been at the forefront of business
              transformation. We combine strategic thinking with cutting-edge
              technology to deliver results that matter. Our approach is simple:
              understand your challenges, create tailored solutions, and drive
              measurable outcomes.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              asChild
            >
              <Link href="/about" className="flex items-center justify-center">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
