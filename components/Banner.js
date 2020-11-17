import ArrowRight from '../components/icons/ArrowRight';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Creating unique brands is</span>
            </div>
            <div className="line">
              <span>what we do.</span>
            </div>
          </h2>
          <div className="btn-row">
            <Link href="/about" passHref>
              <a>
                More about us <ArrowRight />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
