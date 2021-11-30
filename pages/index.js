import React, { useState, useEffect } from "react";
import Row1 from "../src/components/Row1";
import Hulu from "../src/components/Hulu";
import Prime from "../src/components/Prime";
import Netflix from "../src/components/Netflix";
import Row8 from "../src/components/Row8";
import HBO from "../src/components/HBO";
import Hero from "../src/components/Hero";
import Disney from "../src/components/Disney";
import Paramount from "../src/components/Paramount";
import Peacock from "../src/components/Peacock";
import Leaving from "../src/components/Leaving";
import Layout from "../src/components/Layout";

export default function Home({
  huluMovies,
  primeShows,
  netflixMovies,
  netflixMovies2,
  hboShows,
  disneyMovies,
  paraMovies,
}) {

  console.log(primeShows);
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
        {/* <Row8 />
        <HBO />
        <Disney />
        <Paramount />
        <Peacock />
        <Leaving /> */}
      </Layout>
    </>
  );
}

export async function getServerSideProps(contenxt) {
  const [
    huluMoviesRes,
    primeShowsRes,
    netflixMoviesRes,
    netflixMovies2Res,
    hboShowsRes,
    disneyMoviesRes,
    paraMoviesRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=2`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=3`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=4`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=4`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_companies=disney&with_watch_monetization_types=flatrate
`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=4&with_companies=disney&with_watch_monetization_types=flatrate
`
    ),
  ]);

  const [
    huluMovies,
    primeShows,
    netflixMovies,
    netflixMovies2,
    hboShows,
    disneyMovies,
    paraMovies,
  ] = await Promise.all([
    huluMoviesRes.json(),
    primeShowsRes.json(),
    netflixMoviesRes.json(),
    netflixMovies2Res.json(),
    hboShowsRes.json(),
    disneyMoviesRes.json(),
    paraMoviesRes.json(),
  ]);

  return {
    props: {
      huluMovies: huluMovies.results,
      primeShows: primeShows.results,
      netflixMovies: netflixMovies.results,
      netflixMovies2: netflixMovies2.results,
      hboShows: hboShows.results,
      disneyMovies: disneyMovies.results,
      paraMovies: paraMovies.results,
    },
  };
}
