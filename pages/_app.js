import "@/styles/globals.scss";
import "@/styles/ItemList.scss";
import "@/styles/Item.scss";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Top from "@/components/Top";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: "1000px", margin: "0px auto" }}>
      <Top></Top>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
