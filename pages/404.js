import styles from '../styles/404.module.css'
import Layout from '../src/components/Layout'

function NotFoundPage() {
    return (
        <div className={styles.notFoundPageContainer}>
        <Layout>
            <h1>404 Page Not Found</h1>
        </Layout>
            
        </div>
    )
}

export default NotFoundPage
