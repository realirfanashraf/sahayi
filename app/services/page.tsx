import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { 
  Lightbulb, 
  Code, 
  TrendingUp, 
  Users, 
  Palette, 
  Shield, 
  BarChart3, 
  Rocket,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    description: "Develop comprehensive digital roadmaps that align technology with your business objectives. We analyze your current state, identify opportunities, and create actionable plans for digital transformation.",
    features: ["Digital maturity assessment", "Technology roadmap", "Innovation workshops", "Competitive analysis"],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build scalable, high-performance web applications using cutting-edge technologies. From responsive websites to complex enterprise platforms, we deliver solutions that drive results.",
    features: ["Custom web applications", "E-commerce platforms", "API development", "Cloud solutions"],
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Drive measurable results through data-driven marketing strategies. We combine creativity with analytics to acquire customers, increase engagement, and boost conversions.",
    features: ["SEO & content marketing", "Paid advertising", "Conversion optimization", "Marketing automation"],
  },
  {
    icon: Users,
    title: "Business Consulting",
    description: "Strategic guidance to optimize operations, reduce costs, and accelerate growth. Our consultants bring decades of experience across industries to solve your toughest challenges.",
    features: ["Process optimization", "Change management", "Market expansion", "Performance improvement"],
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Create intuitive, engaging user experiences that delight customers and drive business goals. We combine research-driven design with stunning visuals.",
    features: ["User research", "Interface design", "Prototyping", "Design systems"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with comprehensive security solutions. From risk assessment to incident response, we keep your data and systems safe.",
    features: ["Security audits", "Compliance consulting", "Threat monitoring", "Employee training"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights. We help you collect, analyze, and visualize data to make smarter business decisions.",
    features: ["Business intelligence", "Predictive analytics", "Dashboard development", "Data governance"],
  },
  {
    icon: Rocket,
    title: "Product Development",
    description: "Bring your product ideas to life with our end-to-end development services. From concept validation to market launch, we're your partner in innovation.",
    features: ["MVP development", "Product strategy", "Agile delivery", "Launch support"],
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
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3 mb-6">
                Comprehensive Solutions for Modern Business
              </h1>
              <p className="text-muted-foreground text-lg">
                We offer a full spectrum of services designed to help your business succeed in today's competitive landscape. Each solution is tailored to your unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
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
                          <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
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
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                How We Work
              </h2>
              <p className="text-muted-foreground text-lg">
                Our proven methodology ensures consistent results and transparent communication throughout every engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We dive deep into understanding your business, goals, and challenges." },
                { step: "02", title: "Strategy", description: "We develop a customized plan aligned with your objectives and timeline." },
                { step: "03", title: "Execution", description: "Our team implements the solution with agility and precision." },
                { step: "04", title: "Optimization", description: "We continuously measure, learn, and improve for maximum impact." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
