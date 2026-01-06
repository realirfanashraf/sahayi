import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Care First",
    description: "We prioritize the well-being of our clients and ensure every service is delivered with compassion and attention.",
  },
  {
    icon: Heart,
    title: "Trust & Integrity",
    description: "We build strong relationships through honesty, transparency, and consistent service quality.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Our staff are trained, verified, and committed to providing reliable care and manpower services.",
  },
  {
    icon: Eye,
    title: "Continuous Improvement",
    description: "We are always learning and improving to deliver the best experience for our clients.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3 mb-6">
                Compassionate Care & Reliable Services
              </h1>
              <p className="text-muted-foreground text-lg">
                We provide professional care services, event support, and manpower solutions with dedication and responsibility. Our goal is to make life easier, safer, and better for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                  Starting With a Vision to Serve
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We are a new service company, founded with a mission to provide trustworthy care, professional manpower, and reliable event support. 
                  </p>
                  <p>
                    Our focus is on building strong relationships with clients, offering personalized solutions, and delivering services with responsibility and professionalism.
                  </p>
                  <p>
                    Though we are just starting, our team is passionate, trained, and ready to ensure every client experience is safe, caring, and dependable.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "100%", label: "Client-Focused" },
                  { value: "Verified", label: "Professional Staff" },
                  { value: "Personalized", label: "Service Plans" },
                  { value: "Reliable", label: "Event & Manpower Support" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card rounded-2xl p-8 shadow-soft text-center">
                    <div className="font-display text-4xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-primary rounded-3xl p-10">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-3xl font-bold text-primary-foreground mb-4">Our Mission</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  To provide compassionate care, professional manpower, and reliable services that make a positive difference in the lives of our clients.
                </p>
              </div>
              <div className="bg-card rounded-3xl p-10 shadow-card">
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a trusted name for care services, manpower support, and event assistance, known for reliability, professionalism, and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                What Guides Us
              </h2>
              <p className="text-muted-foreground text-lg">
                Our values shape the way we work and define our approach to every client and service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-card rounded-2xl p-8 shadow-soft text-center hover:shadow-card transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
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

export default About;
