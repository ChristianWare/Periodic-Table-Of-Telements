import Layout from "../../src/components/Layout";
import Movie from "../../src/components/Movie";
import styles from "../../styles/MovieDetailsPage.module.css";

function MovieDetailsPage({ result }) {
  return (
    <Layout title={result.title} description={result.overview}>
      <div className={styles.mdPageContainer}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Movie
              className={styles.img}
              title={result.title}
              poster_path={result.poster_path}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.lines}></div>
          <h1>{result.title}</h1>
          <div className={styles.lines2}></div>
          <div className={styles.metaInfo}>
            <h2 className={styles.overview}>Overview:</h2>
            <p>{result.overview}</p>
            <br />
            <h2>Runtime:</h2>
            <p>{result.runtime} Minutes</p>
            <h2>Release Date:</h2>
            <p>{result.release_date}</p>
            <h2>Average Viewer Rating:</h2>
            <p>{result.vote_average}</p>
          </div>
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
