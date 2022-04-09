import "@/styles/globals.scss";
import "@/styles/ErrorPages.scss";
import "@/styles/ItemList.scss";
import "@/styles/Item.scss";
import "@/styles/about.scss";
import "semantic-ui-css/semantic.min.css";

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
