// Screenshot if available, otherwise an on-brand placeholder.
export default function ProjectCover({ src, title, alt = "", className = "" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`object-cover ${className}`}
      />
    );
  }

  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center bg-gradient-to-br from-sand via-white to-accent-soft ${className}`}
    >
      <span className="font-display text-6xl italic text-ink/15">{initials}</span>
    </div>
  );
}
