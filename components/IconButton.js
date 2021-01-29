export default function IconButton({ href, children, label }) {
  return (
    <a
      aria-label={`${label}-icon`}
      className="icon-button"
      rel="noopener nofollow"
      href={href}
    >
      {children}
    </a>
  );
}
