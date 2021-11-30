import styles from "../styles/About.module.css";
import Layout from "../src/components/Layout";
import Link from 'next/link'
import Image from 'next/image'
import Movie from "../src/components/Movie";

function about({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}) {
  console.log(popularMovies);

  const BASE_URL = "https://image.tmdb.org/t/p/w500/";


     return (
       <Layout title='About Telements'>
         <div className={styles.aboutContainer}>
           {popularMovies.map((pm, index) => (
             <Link key={pm.id} href={`/movies/${pm.id}`}>
               <div>
                 <h1>{pm.title}</h1>
               </div>
             </Link>
           ))}
         </div>
       </Layout>
     );
}

export default about;


export async function getServerSideProps(contenxt) {
  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ),
  ]);

  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] = await Promise.all([
    popularMoviesRes.json(),
    popularShowsRes.json(),
    top_ratedMoviesRes.json(),
    top_ratedShowsRes.json(),
  ])

  return {
    props: {
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
  
}