import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../../styles/Layout.module.css'

function Layout({ title, keywords, description, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultprops = {
  title:
    "Periodic Table of Telements | One stop shop for all of your streaming needs",
  description:
    "Find the latest movies and series from netflix, hulu, hbo max, and more!",
  keywords: "Netflix, Hulu, Prime, Hbo Max, Disney, Paramount, Peacock",
};

export default Layout;
