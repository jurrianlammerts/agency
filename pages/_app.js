import "../styles/App.scss";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimateSharedLayout exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
