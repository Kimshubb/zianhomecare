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
}

export default async function ServicePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = SERVICES.find(
    (item) => item.slug === slug
  );

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