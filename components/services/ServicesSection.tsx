interface ServiceSectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}

export function ServiceSection({
  id,
  eyebrow,
  title,
  children,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-40 py-10"
    >
      {eyebrow && (
        <span className="inline-flex rounded-full bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold text-primary">
        {title}
      </h2>

      <div className="mt-8">
        {children}
      </div>
    </section>
  );
}
