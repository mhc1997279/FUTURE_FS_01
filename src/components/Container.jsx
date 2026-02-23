/**
 * Centered max-width container with responsive padding.
 * max prop: "6xl" | "7xl" (default "7xl")
 */
export default function Container({ children, max = "7xl", className = "" }) {
  const w = { "6xl": "max-w-6xl", "7xl": "max-w-7xl", "5xl": "max-w-5xl" };
  return (
    <div className={`mx-auto w-full ${w[max] ?? "max-w-7xl"} px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
