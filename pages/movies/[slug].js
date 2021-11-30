import Layout from "../../src/components/Layout";
import Movie from "../../src/components/Movie";
import styles from "../../styles/MovieDetailsPage.module.css";

function MovieDetailsPage({ result }) {
  console.log(result);
  return (
    <Layout>
      <div className={styles.mdPageContainer}>
        {/* <div className={styles.lines}></div> */}
        <div className={styles.left}>
          <Movie title={result.title} poster_path={result.poster_path} />
        </div>
        <div className={styles.right}>
          <div className={styles.lines}></div>
          <h1>{result.title}</h1>
          <div className={styles.lines}></div>
          <h2>Overview:</h2>
          <p>{result.overview}</p>
          <br />
          <h2>Runtime:</h2>
          <p>{result.runtime} Minutes</p>
        </div>
      </div>
    </Layout>
  );
}

export default MovieDetailsPage;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  ).then((response) => response.json());

  return {
    props: {
      result: request,
    },
  };
}
