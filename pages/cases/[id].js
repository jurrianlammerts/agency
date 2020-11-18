import Layout from '../../components/Layout';
import {
  getAllCaseIds,
  getCaseData,
  getSortedCasesData,
} from '../../lib/cases';

export default function SingleCase(props) {
  console.log(props);
  return (
    <Layout>
      <div className="page">
        <div className="container">
          <div className="row">
            <h2>Case: </h2>
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
  const postData = await getCaseData(params.id);
  const allPosts = getSortedCasesData();
  return {
    props: {
      postData,
      allPosts,
    },
  };
}
