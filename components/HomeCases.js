import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap';

export default function Cases({ cases }) {
  const tl = gsap.timeline()

  const onHover = (hover) => {
    if (hover) {
      tl.to(`.case-image`, 0.5, {
        ease: 'expo.easeIn',
        css: {
          clipPath: "polygon(2.5% 2.5%, 97.5% 2.5%, 97.5% 97.5%, 2.5% 97.5%)",
        },
      }).to(`.case-image img`, 0.5, {
        ease: 'expo.easeIn',
        duration: 0.5,
        scale: 1.05,
      }, '-=0.5')
    } else {
      tl.to(`.case-image img`, 0.5, {
        ease: 'expo.easeOut',
        scale: 1
      }).to(`.case-image`, 0.5, {
        duration: 1,
        ease: 'expo.easeOut',
        css: {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      }, '-=0.5')
    }
  }

  return (
    <section className="home-cases">
      <div className="container">
        <div className="column">
          {cases.map((caseItem) => (
            <Link href="/" key={caseItem.id}>
              <a
                className="case"
                onMouseEnter={() => onHover(true)}
                onMouseLeave={() => onHover(false)}
              >
                <div className="case-details">
                  <h2>{caseItem.subtitle}</h2>
                  <span>{caseItem.title}</span>
                </div>
                <div className="case-image">
                  <Image
                    src={`/images/${caseItem.img}`}
                    alt={caseItem.title}
                    layout="fill"
                  />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
