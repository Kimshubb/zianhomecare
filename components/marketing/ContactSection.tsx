"use client";

import { useState } from "react";
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
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  }

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <FaTiktok className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-primary">
                    Connect With Us
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href="https://www.tiktok.com/@ziancareelderlyservices"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
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
                  </div>

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

            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-medium"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-medium"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+254 790 174 570"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block font-medium"
                >
                  What service are you interested in?
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue="I'm not sure yet"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                >
                  <option>I'm not sure yet</option>
                  <option>Personal & Daily Care</option>
                  <option>Clinical Care Services</option>
                  <option>Recovery & Therapy Support</option>
                  <option>Specialized Care</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium"
                >
                  How can we help?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us a little about your care needs..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                />
              </div>

              {/* Success Message */}

              {status === "success" && (
                <div
                  role="status"
                  className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-800"
                >
                  <p className="font-semibold">
                    Message sent successfully ✓
                  </p>

                  <p className="mt-1">
                    Thank you for contacting Zian SafeHarbour Care. Our team
                    will get back to you as soon as possible.
                  </p>
                </div>
              )}

              {/* Error Message */}

              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800"
                >
                  <p className="font-semibold">
                    We couldn't send your message.
                  </p>

                  <p className="mt-1">
                    Please try again, or contact us directly by phone or
                    WhatsApp.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="w-full transition-all duration-300"
              >
                {status === "sending" ? (
                  <span className="flex items-center justify-center gap-3">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </span>
                ) : status === "success" ? (
                  "Message Sent ✓"
                ) : (
                  "Send Message"
                )}
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
