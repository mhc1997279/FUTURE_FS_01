import Container from "./Container";

/**
 * Standard section wrapper — large vertical padding, centered container.
 * Entrance animation only on mount (not scroll-triggered).
 */
export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-14 md:py-20 scroll-mt-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
