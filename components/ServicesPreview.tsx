import { Lightbulb, Code, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    description:
      "Develop comprehensive digital roadmaps that align technology with your business objectives.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build scalable, high-performance web applications using cutting-edge technologies.",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description:
      "Drive measurable results through data-driven marketing strategies and campaigns.",
  },
  {
    icon: Users,
    title: "Business Consulting",
    description:
      "Strategic guidance to optimize operations, reduce costs, and accelerate growth.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What We Do Best
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive suite of services designed to help your
            business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="group">
            <Link href="/services" className="flex items-center justify-center">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
