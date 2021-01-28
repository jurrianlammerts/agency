import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap';

export default function Cases({ cases }) {

  const tl = gsap.timeline()

  const onHover = (hover, index) => {
    if (hover) {
      tl.to(`#case-${index} .case-image`, 0.5, {
        ease: 'expo.easeIn',
        css: {
          clipPath: "polygon(2.5% 2.5%, 97.5% 2.5%, 97.5% 97.5%, 2.5% 97.5%)",
        },
      }).to(`#case-${index} .case-image img`, 0.5, {
        ease: 'expo.easeIn',
        duration: 0.5,
        scale: 1.05,
      }, '-=0.5')
    } else {
      tl.to(`#case-${index} .case-image img`, 0.5, {
        duration: 1,
        ease: 'expo.easeOut',
        scale: 1,
      }).to(`#case-${index} .case-image`, 0.5, {
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
          {cases.map((caseItem, index) => (
            <Link href="/" key={caseItem.id}>
              <a
                className="case"
                onMouseEnter={() => onHover(true, index)}
                onMouseLeave={() => onHover(false, index)}
                id={`case-${index}`}
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
