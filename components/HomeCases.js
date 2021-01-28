import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"

const caseStudies = [
  {
    id: 1,
    subtitle: 'Curology',
    title: 'A custom formula for your skin’s unique needs',
    img: 'curology-min',
  },
  {
    id: 2,
    subtitle: 'Yourspace',
    title: 'Open space floor plans for you next venture',
    img: 'yourspace-min',
  },
  {
    id: 3,
    subtitle: 'Lumin',
    title: 'For your best look ever',
    img: 'lumin-min',
  },
];

export default function Cases() {
  return (
    <section className="home-cases">
      <div className="container">
        <div className="column">
          {caseStudies.map((caseItem) => (
            <Link href="/" key={caseItem.id}>
              <a className="case">
                <div className="case-details">
                  <h2>{caseItem.subtitle}</h2>
                  <span>{caseItem.title}</span>
                </div>
                <motion.div
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                  whileHover={{
                    clipPath:
                      "polygon(2.5% 2.5%, 97.5% 2.5%, 97.5% 97.5%, 2.5% 97.5%)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="case-image"
                >
                  <Image
                    src={`/images/${caseItem.img}.png`}
                    alt={caseItem.title}
                    layout="fill"
                  />
                </ motion.div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
