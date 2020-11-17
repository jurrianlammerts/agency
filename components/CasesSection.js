import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

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
    subtitle: 'Solobike',
    title: 'A campaign for biking passionates',
    img: 'bike-min',
  },
  {
    id: 4,
    subtitle: 'Lumin',
    title: 'For your best look ever',
    img: 'lumin-min',
  },
  {
    id: 5,
    subtitle: 'Era',
    title: 'Communicating high tech sport garments',
    img: 'sports-min',
  },
];

export default function Cases() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: (
    //   <div className="cases-arrow next">
    //     <ArrowRight />
    //   </div>
    // ),
    // prevArrow: (
    //   <div className="cases-arrow prev disabled">
    //     <ArrowLeft />
    //   </div>
    // ),
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="cases">
      <Slider {...settings} arrows={false}>
        {caseStudies.map((caseItem) => (
          <div className="case" key={caseItem.id}>
            <div className="case-details">
              <span>{caseItem.subtitle}</span>
              <h2>{caseItem.title}</h2>
              <div className="btn-row">
                <Link href="/about" passHref>
                  <a>
                    Case <ArrowRight />
                  </a>
                </Link>
              </div>
            </div>
            <div className="case-image">
              <Image
                src={`/images/${caseItem.img}.png`}
                alt={caseItem.title}
                layout="fill"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
