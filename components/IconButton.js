export default function IconButton({ href, children }) {
  return (
    <a className="icon-button" rel="noopener nofollow" href={href}>
      {children}
    </a>
  );
}
