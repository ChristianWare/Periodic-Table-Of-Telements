import styles from "../styles/About.module.css";
import Layout from "../src/components/Layout";
import Link from "next/link";

function about({}) {
  return (
    <Layout title='About Telements'>
      <div className={styles.aboutContainer}>
        <h1>About Page</h1>
      </div>
    </Layout>
  );
}

export default about;

