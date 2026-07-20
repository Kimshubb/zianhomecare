import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SERVICES } from "@/lib/services";

import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceExperience } from "@/components/services/ServiceExperience";
/*import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceIncludes } from "@/components/services/ServiceIncludes";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceAudience } from "@/components/services/ServiceAudience";*/


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Zian SafeHarbour Care",
    };
  }

  const url = `https://ziansafeharbour.com/services/${service.slug}`;

  return {
    title: `${service.title} | Zian SafeHarbour Care`,
    description: service.shortDescription,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${service.title} | Zian SafeHarbour Care`,
      description: service.shortDescription,
      url,
      siteName: "Zian SafeHarbour Care",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_KE",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.shortDescription,
      images: [service.heroImage],
    },
  };
}

/*export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = SERVICES.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}*/
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = SERVICES.find((s) => s.slug === slug);


  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceExperience service={service} />

    </>
  );
}