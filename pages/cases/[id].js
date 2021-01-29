import Image from "next/image";
import { motion } from "framer-motion";
import {
  getAllCaseIds,
  getCaseData,
  getSortedCasesData,
} from "../../lib/cases";

import Layout from "../../components/Layout";

export default function SingleCase({ allCases, caseData }) {
  return (
    <Layout dark>
      <div className="page">
        <div className="single-case">
          <motion.div
            key={caseData.id}
            className="hero-image"
            layoutId="image"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              key={caseData.id}
              src={`/images/${caseData.img}`}
              alt={caseData.title}
              layout="fill"
            />
            <h1>{caseData.subtitle}</h1>
          </motion.div>
          <div className="container">
            <div className="content">
              <div dangerouslySetInnerHTML={{ __html: caseData.contentHtml }} />
            </div>
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
