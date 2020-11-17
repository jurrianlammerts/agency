import Image from 'next/image';

import ArrowLeft from '../components/icons/ArrowLeft';
import ArrowRight from '../components/icons/ArrowRight';

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
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <ArrowLeft />
          </div>
          <div className="cases-arrow next">
            <ArrowRight />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                {console.log(`../assets/${caseItem.img}.png`)}
                <Image
                  src={`/images/${caseItem.img}.png`}
                  alt={caseItem.title}
                  // width={500}
                  // height={500}
                  layout="fill"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
