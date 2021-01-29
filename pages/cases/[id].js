import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  getAllCaseIds,
  getCaseData,
  getSortedCasesData,
} from "../../lib/cases";

import Layout from "../../components/Layout";
import Date from "../../components/Date";
import ArrowLeft from "../../components/icons/ArrowLeft";
import ArrowRight from "../../components/icons/ArrowRight";

export default function SingleCase({ allCases, caseData }) {
  const arrayLength = allCases.length - 1;

  const nextCase = () => {
    let i = caseData.index;
    if (caseData.index >= arrayLength) {
      i = 0; // if we've gone too high, start from `0` again
    } else {
      i = caseData.index + 1; // increase i by one
    }
    // console.log('next: ', i, allCases[i].slug);
    return allCases[i].slug; // give us back the item of where we are now
  };

  const prevCase = () => {
    let i = caseData.index;
    if (i == 0) {
      // i would become 0
      i = arrayLength; // so put it at the other end of the array
    } else {
      i = caseData.index - 1; // decrease by one
    }
    return allCases[i].slug; // give us back the item of where we are now
  };

  const nextSlug = nextCase();
  const prevSlug = prevCase();

  return (
    <Layout>
      <div className="page">
        <div className="single-case">
          <motion.div
            key={caseData.id}
            className="hero-image"
            layoutId="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              key={caseData.id}
              src={`/images/${caseData.img}.png`}
              alt={caseData.title}
              layout="fill"
            />
            <h1>{caseData.subtitle}</h1>
          </motion.div>
          <div className="container">
            <div className="content">
              <h2>{caseData.title}</h2>
              <Date dateString={caseData.date} />

              <div dangerouslySetInnerHTML={{ __html: caseData.contentHtml }} />
            </div>
          </div>
          <div className="cases-navigation">
            <Link href={`/cases/${prevSlug}`} passHref>
              <a>
                <div className="cases-arrow">
                  <ArrowLeft />
                </div>
              </a>
            </Link>
            <Link href={`/cases/${nextSlug}`} passhref>
              <a>
                <div className="cases-arrow">
                  <ArrowRight />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllCaseIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const caseData = await getCaseData(params.id);
  const allCases = getSortedCasesData();
  return {
    props: {
      caseData,
      allCases,
    },
  };
}
