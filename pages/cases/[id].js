import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import {
  getAllCaseIds,
  getCaseData,
  getSortedCasesData,
} from '../../lib/cases';

export default function SingleCase({ postData }) {
  return (
    <Layout>
      <div className="page">
        <div className="header-image">
          <Image
            src={`/images/${postData.img}.png`}
            alt={postData.title}
            layout="fill"
          />
          <h2>{postData.subtitle}</h2>
          <h1>{postData.title}</h1>
        </div>
        <div className="container"></div>
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
  const postData = await getCaseData(params.id);
  const allPosts = getSortedCasesData();
  return {
    props: {
      postData,
      allPosts,
    },
  };
}
