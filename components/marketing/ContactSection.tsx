import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  Clock3,
} from "lucide-react";
import { FaFacebook, FaTiktok } from "react-icons/fa6";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <Section id="contact-form">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}

          <article className="rounded-card bg-secondary-soft p-8">
            <span className="inline-flex rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-primary">
              Get In Touch
            </span>

            <h2 className="mt-5 text-3xl font-bold text-primary">
              We'd Love To Hear From You
            </h2>

            <p className="mt-5 leading-8 text-muted">
              Whether you're looking for immediate care or simply exploring
              your options, our friendly team is ready to help.
            </p>

            <div className="mt-10 space-y-8">
              {/* Phone */}

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-primary">
                    Call Us
                  </h3>

                  <a
                    href="tel:+254790174570"
                    className="mt-1 block transition-colors hover:text-primary"
                  >
                    +254 790 174 570
                  </a>

                  <p className="text-sm text-muted">
                    Available 24/7
                  </p>
                </div>
              </div>

              {/* WhatsApp */}

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-primary">
                    WhatsApp
                  </h3>

                  <a
                    href="https://wa.me/254790174570"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block transition-colors hover:text-primary"
                  >
                    +254 790 174 570
                  </a>

                  <p className="text-sm text-muted">
                    Fast responses during business hours
                  </p>
                </div>
              </div>

              {/* Email */}

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-primary">
                    Email
                  </h3>

                  <a
                    href="mailto:info@ziansafeharbour.com"
                    className="mt-1 block transition-colors hover:text-primary"
                  >
                    info@ziansafeharbour.com
                  </a>
                </div>
              </div>

              {/* Office Hours */}

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-primary">
                    Office Hours
                  </h3>

                  <p className="mt-1 text-muted">
                    Monday – Friday
                  </p>

                  <p className="text-sm text-muted">
                    8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              {/* Connect With Us */}

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <FaTiktok className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-primary">
                    Connect With Us
                  </h3>

                  <a
                    href="https://www.tiktok.com/@ziancareelderlyservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
                  >
                    <FaTiktok className="h-4 w-4" />
                    Follow us on TikTok
                  </a>
                  <a
                    href="https://www.facebook.com/ziansafeharbour"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    <FaFacebook className="h-4 w-4" />
                    Facebook
                  </a>

                  <p className="mt-3 text-sm text-muted">
                    Home care tips, caregiver advice and updates from our team.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Right Side */}

          <article className="rounded-card bg-surface p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-primary">
              Send Us A Message
            </h2>

            <p className="mt-3 text-muted">
              Complete the form below and we'll get back to you as soon as
              possible.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+254 790 174 570"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="info@ziansafeharbour.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  What service are you interested in?
                </label>

                <select className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none">
                  <option>I'm not sure yet</option>
                  <option>Personal Care</option>
                  <option>Medication Support</option>
                  <option>Recovery Care</option>
                  <option>Physiotherapy</option>
                  <option>Palliative Care</option>
                  <option>Respite Care</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  How can we help?
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us a little about your care needs..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
              >
                Send Message
              </Button>

              <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-muted">
                <span>✓ No obligation</span>
                <span>✓ Secure & confidential</span>
                <span>✓ Response within 24 hours</span>
              </div>
            </form>
          </article>
        </div>
      </Container>
    </Section>
  );
}