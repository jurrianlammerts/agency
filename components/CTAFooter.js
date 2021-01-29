import Link from "next/link";
import { gsap } from "gsap/dist/gsap";

export default function CTA() {
  const tl = gsap.timeline();

  const changeBackground = (hover) => {
    if (hover) {
      tl.to(".home-cta-link", 0, {
        duration: 0.5,
        css: {
          borderBottom: "none",
        },
      })
        .to(".link-dot", 0, {
          duration: 0.5,
          css: {
            backgroundColor: "#000",
          },
        })
        .to(".home-cta", 0.25, {
          duration: 0.5,
          css: {
            backgroundColor: "#7245FB",
          },
        });
    } else {
      tl.to(".home-cta-link", 0, {
        duration: 0.5,
        css: {
          borderBottom: "1px solid #fff",
        },
      })
        .to(".link-dot", 0, {
          duration: 0.5,
          css: {
            backgroundColor: "#7245FB",
          },
        })
        .to(".home-cta", 0.25, {
          duration: 0.5,
          css: {
            backgroundColor: "#000",
          },
        });
    }
  };

  return (
    <section className="home-cta">
      <Link href="/contact">
        <a
          className="home-cta-link"
          onMouseEnter={() => changeBackground(true)}
          onMouseLeave={() => changeBackground(false)}
        >
          Get in touch
          <div className="link-dot" />
        </a>
      </Link>
    </section>
  );
}
