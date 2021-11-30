import Layout from "../../src/components/Layout";
import Image from 'next/image'
import Movie from "../../src/components/Movie";

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieDetailsPage({ result }) {
  console.log(result);
  return (
    <Layout>
      <div>
        <Movie title={result.title} poster_path={result.poster_path} />
        <p>{result.overview}</p>
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



