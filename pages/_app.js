import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function MyApp({Component, pageProps}) {
  // wrap with layout component which contains navbar
  return(
  <Layout>
    <Component {...pageProps} />
  </Layout>)
}

export default MyApp;
