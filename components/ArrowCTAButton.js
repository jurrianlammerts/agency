import React from "react";
import Link from "next/link";
import ArrowRight from "./icons/ArrowRight";

export default function ArrowCTAButton({ text, href, large = false }) {
  return (
    <Link href={href} passHref>
      <a className={`cta cta-${large ? "large" : "small"}`}>
        {text} <ArrowRight />
      </a>
    </Link>
  );
}
