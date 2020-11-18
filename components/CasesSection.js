import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Slider from 'react-slick';

import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

const caseStudies = [
  {
    id: 1,
    slug: 'curology',
    subtitle: 'Curology',
    title: 'A custom formula for your skin’s unique needs',
    img: 'curology-min',
  },
  {
    id: 2,
    slyg: 'yourspace',
    subtitle: 'Yourspace',
    title: 'Open space floor plans for you next venture',
    img: 'yourspace-min',
  },
  {
    id: 3,
    slug: 'solobike',
    subtitle: 'Solobike',
    title: 'A campaign for biking passionates',
    img: 'bike-min',
  },
];

export default function Cases() {
  return (
    <section className="cases">
      <div className="container-fluid">
        {/* <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <ArrowLeft />
          </div>
          <div className="cases-arrow next">
            <ArrowRight />
          </div>
        </div> */}
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <Link href={`/cases/${caseItem.slug}`}>
                <>
                  <div className="case-details">
                    <span>{caseItem.subtitle}</span>
                    <h2>{caseItem.title}</h2>
                  </div>
                  <div className="case-image">
                    <Image
                      src={`/images/${caseItem.img}.png`}
                      alt={caseItem.title}
                      layout="fill"
                    />
                  </div>
                </>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
