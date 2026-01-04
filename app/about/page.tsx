import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";

const team = [
  { name: "Sarah Johnson", role: "CEO & Founder", initials: "SJ" },
  { name: "Michael Chen", role: "CTO", initials: "MC" },
  { name: "Emily Rodriguez", role: "Head of Strategy", initials: "ER" },
  { name: "David Kim", role: "Creative Director", initials: "DK" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We set high standards and consistently strive to exceed them in everything we do.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We build trust through honest communication, ethical practices, and transparency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions emerge when diverse perspectives come together.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We embrace change and continuously seek new ways to create value.",
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
                Building the Future of Business
              </h1>
              <p className="text-muted-foreground text-lg">
                For over 15 years, we've been helping companies navigate change, embrace innovation, and achieve sustainable growth.
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
                  From Startup to Industry Leader
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010, Nexus began as a small consulting firm with a big vision: to help businesses harness the power of technology and strategy to achieve extraordinary results.
                  </p>
                  <p>
                    Today, we've grown into a full-service business solutions provider with offices across three continents. Our team of 50+ experts has helped over 500 companies—from ambitious startups to Fortune 500 enterprises—transform their operations and accelerate growth.
                  </p>
                  <p>
                    What hasn't changed is our commitment to our clients' success. We still approach every engagement with the same curiosity, dedication, and passion that defined us from day one.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Projects Completed" },
                  { value: "50+", label: "Team Members" },
                  { value: "15+", label: "Years Experience" },
                  { value: "12", label: "Countries Served" },
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
                  To empower organizations with the strategies, technologies, and insights they need to thrive in an ever-changing world. We measure our success by the success of our clients.
                </p>
              </div>
              <div className="bg-card rounded-3xl p-10 shadow-card">
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted partner for business transformation globally, known for our expertise, innovation, and unwavering commitment to client outcomes.
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
                What Drives Us
              </h2>
              <p className="text-muted-foreground text-lg">
                Our values are the foundation of everything we do. They guide our decisions and shape our culture.
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

        {/* Team */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Meet the Leadership
              </h2>
              <p className="text-muted-foreground text-lg">
                Our leadership team brings decades of combined experience across industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-display text-3xl font-bold">{member.initials}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
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
