import styles from "../styles/404.module.css";
import Layout from "../src/components/Layout";
import Link from 'next/link'

function NotFoundPage() {
  return (
    <Layout>
      <div className={styles.notFoundPageContainer}>
        <div className={styles.lines}></div>
        <h1>404 Page Not Found</h1>
        <h1>
          PLEASE GO
          <Link href='/'>
            <a>
              <span>HOME</span>
            </a>
          </Link>
        </h1>
        <div className={styles.lines}></div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
