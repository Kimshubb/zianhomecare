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

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl text-white">
                  📞
                </div>

                <div>
                  <h3 className="font-semibold text-primary">
                    Call Us
                  </h3>

                  <p className="mt-1 text-muted">
                    +254 XX XXX XXXX
                  </p>

                  <p className="text-sm text-muted">
                    Available 24/7
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-white">
                  💬
                </div>

                <div>
                  <h3 className="font-semibold text-primary">
                    WhatsApp
                  </h3>

                  <p className="mt-1 text-muted">
                    +263 XX XXX XXXX
                  </p>

                  <p className="text-sm text-muted">
                    Fast responses during business hours
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl text-white">
                  ✉️
                </div>

                <div>
                  <h3 className="font-semibold text-primary">
                    Email
                  </h3>

                  <p className="mt-1 text-muted">
                    info@ziansafeharbour.co.zw
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-white">
                  🕒
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
                    placeholder="+263..."
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
                  placeholder="you@example.com"
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
                  <option>Companionship</option>
                  <option>Transportation</option>
                  <option>Meal Preparation</option>
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
