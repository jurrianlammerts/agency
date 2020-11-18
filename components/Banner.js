import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import ArrowRight from '../components/icons/ArrowRight';

const quotes = [
  {
    first: 'Creating unique brands is',
    second: 'what we do.',
  },
  {
    first: 'Solve important problems',
    second: 'through design.',
  },
  {
    first: 'We build',
    second: 'your dream.',
  },
];

export default function Banner() {
  const router = useRouter();
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [router.pathname]);

  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>{quote && quote.first}</span>
            </div>
            <div className="line">
              <span>{quote && quote.second}</span>
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
