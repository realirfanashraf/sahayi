"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@nexus.com",
    description: "We typically respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 9am to 6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Business Ave, Suite 100",
    description: "New York, NY 10001",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Friday",
    description: "9:00 AM - 6:00 PM EST",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3 mb-6">
                Let's Start a Conversation
              </h1>
              <p className="text-muted-foreground text-lg">
                Have a question or want to work together? We'd love to hear from you. Reach out and let's discuss how we can help your business grow.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-card rounded-3xl p-10 shadow-card">
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company Name</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or question..."
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90 transition-opacity group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-2">Get in Touch</h2>
                  <p className="text-muted-foreground">Prefer to reach out directly? Here's how you can contact us.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="bg-muted rounded-2xl p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground font-medium">{item.details}</p>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="bg-gradient-primary rounded-3xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <p className="font-display text-xl font-semibold">New York Office</p>
                    <p className="opacity-80 text-sm mt-1">123 Business Ave, Suite 100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Common Questions
              </h2>
              <div className="space-y-4 text-left mt-12">
                {[
                  { q: "What industries do you work with?", a: "We work with clients across all industries, including technology, healthcare, finance, retail, and manufacturing." },
                  { q: "How long does a typical project take?", a: "Project timelines vary based on scope, but most engagements range from 2-6 months." },
                  { q: "Do you offer ongoing support?", a: "Yes, we offer retainer-based support packages for clients who need continuous assistance." },
                ].map((faq, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 shadow-soft">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
