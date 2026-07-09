import { ContactHero } from "@/components/marketing/ContactHero";
import { ContactSection } from "@/components/marketing/ContactSection";
import { FAQ } from "@/components/marketing/FAQ";
/*import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { InsurancePartners } from "@/components/contact/InsurancePartners";
import { FAQ } from "@/components/contact/FAQ";*/
import { EmergencyCTA } from "@/components/marketing/sections/EmergencyCTA";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection/>
      <FAQ/>
     {/*<ContactInfo />
      <ContactForm />
      <InsurancePartners />
      <FAQ />*/}
      <EmergencyCTA />
    </>
  );
}