import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import {
  getAllCaseIds,
  getCaseData,
  getSortedCasesData,
} from '../../lib/cases';
import ScrollDown from '../../components/icons/ScrollDown';

let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing },
  },
};

export default function SingleCase({ allCases, caseData }) {
  return (
    <Layout dark>
      <motion.div className="page" initial="exit" animate="enter" exit="exit">
        <div className="single-case">
          <motion.div
            key={caseData.id}
            className="hero-image"
            variants={imageVariants}
          >
            <Image
              key={caseData.id}
              src={`/images/${caseData.img}`}
              alt={caseData.title}
              layout="fill"
            />
            <h1>{caseData.subtitle}</h1>

            <ScrollDown />
          </motion.div>
          <div className="container">
            <motion.div className="content" variants={textVariants}>
              <div dangerouslySetInnerHTML={{ __html: caseData.contentHtml }} />
            </motion.div>
          </div>
        </div>
      </motion.div>
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
