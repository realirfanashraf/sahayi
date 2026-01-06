import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import {
  HeartPulse,
  Baby,
  UserPlus,
  Stethoscope,
  CalendarCheck,
  Users,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: HeartPulse,
    title: "Home Care Services",
    description:
      "Personalized home care solutions designed to support patients, elderly individuals, and families with comfort and dignity at home.",
    features: [
      "Elderly care",
      "Patient assistance",
      "Daily activity support",
      "Post-hospital care",
    ],
  },
  {
    icon: Baby,
    title: "Baby Care Services",
    description:
      "Trusted baby care services delivered by trained caregivers to ensure safety, hygiene, and proper nurturing.",
    features: [
      "Newborn care",
      "Infant handling",
      "Feeding & hygiene",
      "Day & night support",
    ],
  },
  {
    icon: UserPlus,
    title: "Nurse Visit Services",
    description:
      "Professional nurse visits at home for medical care, recovery support, and routine health assistance.",
    features: [
      "Post-surgery care",
      "Wound dressing",
      "Medical monitoring",
      "Doctor-prescribed care",
    ],
  },
  {
    icon: Stethoscope,
    title: "Health Checkups & Insulin Care",
    description:
      "Basic health monitoring and medical assistance services to help patients manage their health safely at home.",
    features: [
      "Vital checks",
      "Blood sugar monitoring",
      "Insulin administration",
      "Medication support",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Event Management",
    description:
      "Complete event planning and execution services for corporate events, promotions, and special occasions.",
    features: [
      "Event planning",
      "On-ground coordination",
      "Staff & logistics",
      "Brand promotions",
    ],
  },
  {
    icon: Users,
    title: "Promoter & Manpower Services",
    description:
      "Reliable manpower and promoter services to support events, marketing campaigns, and business operations.",
    features: [
      "Event promoters",
      "Field staff",
      "Temporary manpower",
      "Campaign support",
    ],
  },
  {
    icon: Sparkles,
    title: "More Services Coming Soon",
    description:
      "We are continuously expanding our service offerings to better serve our customers.",
    features: [
      "Professional services",
      "Specialized care",
      "New support solutions",
      "Service expansions",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3 mb-6">
                Trusted Care & Professional Services
              </h1>
              <p className="text-muted-foreground text-lg">
                We provide reliable care services, event management, and manpower
                solutions focused on quality, trust, and professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                How We Deliver Our Services
              </h2>
              <p className="text-muted-foreground text-lg">
                A simple, transparent process to ensure quality service and
                customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Requirement Assessment",
                  description:
                    "We understand your care or service requirements in detail.",
                },
                {
                  step: "02",
                  title: "Service Planning",
                  description:
                    "We assign trained professionals and plan service delivery.",
                },
                {
                  step: "03",
                  title: "Service Execution",
                  description:
                    "Our team delivers services with care, safety, and professionalism.",
                },
                {
                  step: "04",
                  title: "Ongoing Support",
                  description:
                    "We ensure continuous support and quality follow-ups.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
