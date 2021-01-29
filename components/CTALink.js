import Link from "next/link";

export default function CTALink({ text, href }) {
  return (
    <Link href={href}>
      <a className="cta-link">
        <span className="cta-inner">{text}</span>
      </a>
    </Link>
  );
}
