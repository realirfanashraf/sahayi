import {
  HeartPulse,
  Baby,
  UserPlus,
  Stethoscope,
  CalendarCheck,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: HeartPulse,
    title: "Home Care Services",
    description:
      "Professional home care support ensuring comfort, safety, and personalized attention for patients at home.",
  },
  {
    icon: Baby,
    title: "Baby Care",
    description:
      "Trained caregivers providing reliable and compassionate baby care for newborns and infants.",
  },
  {
    icon: UserPlus,
    title: "Nurse Visit",
    description:
      "Qualified nurses available for home visits, post-hospital care, and medical assistance.",
  },
  {
    icon: Stethoscope,
    title: "Health Checkups & Insulin Care",
    description:
      "Regular health monitoring, basic checkups, insulin administration, and medication support.",
  },
  {
    icon: CalendarCheck,
    title: "Event Management",
    description:
      "End-to-end event planning and management services for corporate, promotional, and social events.",
  },
  {
    icon: Users,
    title: "Promoter & Manpower Services",
    description:
      "Skilled promoters and manpower solutions for events, marketing campaigns, and business needs.",
  },
  {
    icon: Sparkles,
    title: "More Services Coming Soon",
    description:
      "We are expanding our offerings to serve you better. Stay tuned for new professional services.",
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
            What We Deliver
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide trusted care services, professional manpower, and event
            management solutions tailored to your needs.
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
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
