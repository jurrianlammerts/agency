import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

// import ArrowLeft from './icons/ArrowLeft';
// import ArrowRight from './icons/ArrowRight';

export default function Cases({ cases }) {
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
          {cases.map((caseItem) => (
            <Link href={`/cases/${caseItem.slug}`} key={caseItem.id}>
              <div className="case">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
