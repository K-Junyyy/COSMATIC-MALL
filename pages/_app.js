import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Top from "@/components/Top";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" ms-5 me-5">
      <Top></Top>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
