interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>

      {children}
    </section>
  );
}
