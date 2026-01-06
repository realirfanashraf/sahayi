import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  "Trained and background-verified professionals",
  "Personalized care and service planning",
  "Reliable support for families and businesses",
  "Quality-focused and transparent service delivery",
];

const AboutPreview = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-primary overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="font-display text-6xl font-bold mb-4">
                    New
                  </div>
                  <div className="text-xl font-medium opacity-90">
                    Trusted Service Provider
                  </div>
                  <div className="mt-8 w-24 h-1 bg-secondary mx-auto rounded-full" />
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
              Built on Care, Trust & Responsibility
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We are a growing service organization focused on delivering
              compassionate care services, professional manpower, and dependable
              event support. Though we are new, our approach is rooted in
              responsibility, trained professionals, and a strong commitment to
              quality.
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
