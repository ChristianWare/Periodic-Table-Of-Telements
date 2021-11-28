import Head from "next/head";
import styles from "../../styles/Layout.module.css";

function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultprops = {
  title:
    "Periodic Table of Telements | One stop shop for all of your streaming needs",
  description:
    "Find the latest movies and series from netflix, hulu, hbo, and more!",
  keywords: "Netflix, Hulu, Prime, Hbo Max, Disney, Paramount, Peacock",
};

export default Layout;
