import Row1 from "../src/components/Row1";
import Hulu from "../src/components/Hulu";
import Prime from "../src/components/Prime";
import Netflix from "../src/components/Netflix";
import HBO from "../src/components/HBO";
import Hero from "../src/components/Hero";
import Disney from "../src/components/Disney";
import Paramount from "../src/components/Paramount";
import Peacock from "../src/components/Peacock";
import Leaving from "../src/components/Leaving";
import Layout from "../src/components/Layout";

export default function Home({
  huluMovies,
  netflixMovies,
  netflixMovies2,
  hboShows,
  disneyMovies,
  paraMovies,
  peacockMovies,
}) {
  return (
    <>
      <Layout>
        <Hero />
        <Row1 huluMovies={huluMovies} />
        <Hulu huluMovies={huluMovies} />
        <Prime huluMovies={huluMovies} />
        <Netflix
          netflixMovies={netflixMovies}
          netflixMovies2={netflixMovies2}
        />
        <HBO hboShows={hboShows} />
        <Disney disneyMovies={disneyMovies} />
        <Paramount paraMovies={paraMovies} />
        <Peacock peacockMovies={peacockMovies} />
        <Leaving
          peacockMovies={peacockMovies}
          paraMovies={paraMovies}
          disneyMovies={disneyMovies}
          netflixMovies2={netflixMovies2}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const [
    huluMoviesRes,
    netflixMoviesRes,
    netflixMovies2Res,
    hboShowsRes,
    disneyMoviesRes,
    paraMoviesRes,
    peacockMoviesRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=3`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=4`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=2`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_companies=disney&with_watch_monetization_types=flatrate
`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=4&with_companies=disney&with_watch_monetization_types=flatrate
`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=5&with_companies=disney&with_watch_monetization_types=flatrate
`
    ),
  ]);

  const [
    huluMovies,
    netflixMovies,
    netflixMovies2,
    hboShows,
    disneyMovies,
    paraMovies,
    peacockMovies,
  ] = await Promise.all([
    huluMoviesRes.json(),
    netflixMoviesRes.json(),
    netflixMovies2Res.json(),
    hboShowsRes.json(),
    disneyMoviesRes.json(),
    paraMoviesRes.json(),
    peacockMoviesRes.json(),
  ]);

  return {
    props: {
      huluMovies: huluMovies.results,
      netflixMovies: netflixMovies.results,
      netflixMovies2: netflixMovies2.results,
      hboShows: hboShows.results,
      disneyMovies: disneyMovies.results,
      paraMovies: paraMovies.results,
      peacockMovies: peacockMovies.results,
    },
  };
}
