import Image from "next/image";
import Link from "next/link";
import CTALink from "../components/CTALink";

export default function Cases({ cases }) {
  return (
    <section className="home-cases">
      <div className="container">
        <div className="column">
          {cases.map((caseItem) => (
            <Link href={`/cases/${caseItem.slug}`} key={caseItem.id}>
              <a className="case">
                <div className="case-details">
                  <h2>{caseItem.subtitle}</h2>
                  <span>{caseItem.title}</span>
                </div>
                <div className="case-image">
                  <Image
                    src={`/images/${caseItem.img}`}
                    alt={caseItem.title}
                    layout="fill"
                    quality={50}
                    priority
                  />
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="cta">
          <CTALink text="All projects" href="/about" />
        </div>
      </div>
    </section>
  );
}
