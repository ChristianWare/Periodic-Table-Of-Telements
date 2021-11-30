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
  hulu,
  prime,
  netflix,
  netflix2,
  hbo,
  disney,
  para,
  peacock,
  nfLeaving,
  huluLeaving,
  primeLeaving,
  hboLeaving,
}) {
  return (
    <>
      <Layout>
        <Hero />
        <Row1 />
        <Hulu hulu={hulu} />
        <Prime prime={prime} />
        <Netflix netflix={netflix} netflix2={netflix2} />
        <Row8 />
        <HBO hbo={hbo} />
        <Disney disney={disney} />
        <Paramount para={para} />
        <Peacock peacock={peacock} />
        <Leaving
          nfLeaving={nfLeaving}
          huluLeaving={huluLeaving}
          primeLeaving={primeLeaving}
          hboLeaving={hboLeaving}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // ******* hulu start
  const res = await fetch(
    "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=prime&type=series&genre=18&page=20&output_language=en&language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const hulu = await res.json();

  // ******* hulu end

  // ******* prime start
  const primeRes = await fetch(
    "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=prime&type=movie&genre=18&page=20&output_language=en&language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const prime = await primeRes.json();

  // ******* prime end

  // ******* netflix start
  const netflixRes = await fetch(
    "https://streaming-availability.p.rapidapi.com/search/ultra?country=us&services=netflix%2Chulu&type=movie&order_by=imdb_vote_count&year_min=2000&year_max=2020&page=4&genres=18%2C80&genres_relation=or&desc=true&language=en&min_imdb_rating=70&max_imdb_rating=90&min_imdb_vote_count=10000&max_imdb_vote_count=1000000&output_language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const netflix = await netflixRes.json();

  // ******* netflix end

  // ******* netflix 2 start
  const netflix2Res = await fetch(
    "https://streaming-availability.p.rapidapi.com/search/ultra?country=us&services=netflix&type=series&order_by=imdb_vote_count&year_min=2000&year_max=2020&page=1&genres=18%2C80&genres_relation=or&desc=true&language=en&min_imdb_rating=70&max_imdb_rating=90&min_imdb_vote_count=10000&max_imdb_vote_count=1000000&output_language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const netflix2 = await netflix2Res.json();

  // ******* netflix 2 end

  // ******* HBO start

  const hboRes = await fetch(
    "https://streaming-availability.p.rapidapi.com/search/ultra?country=us&services=hbo&type=series&order_by=imdb_vote_count&year_min=2000&year_max=2020&page=1&genres=18%2C80&genres_relation=or&desc=true&language=en&min_imdb_rating=70&max_imdb_rating=90&min_imdb_vote_count=10000&max_imdb_vote_count=1000000&output_language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const hbo = await hboRes.json();

  // ******* HBO end

  // ******* Disney Start

  const disneyRes = await fetch(
    "https://streaming-availability.p.rapidapi.com/search/ultra?country=us&services=disney&type=movie&order_by=imdb_vote_count&year_min=2000&year_max=2020&page=1&genres=18%2C80&genres_relation=or&desc=true&language=en&min_imdb_rating=70&max_imdb_rating=100&min_imdb_vote_count=10000&max_imdb_vote_count=1000000&output_language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const disney = await disneyRes.json();

  // ******* Paramount start

  const paraRes = await fetch(
    "https://streaming-availability.p.rapidapi.com/search/ultra?country=us&services=paramount&type=series&order_by=imdb_vote_count&year_min=2000&year_max=2020&page=1&genres=18%2C80&genres_relation=or&desc=true&language=en&min_imdb_rating=70&max_imdb_rating=100&min_imdb_vote_count=10000&max_imdb_vote_count=1000000&output_language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const para = await paraRes.json();

  // ******* Paremount end

  // ******* Peacock start

  const peacockRes = await fetch(
    "https://streaming-availability.p.rapidapi.com/search/pro?country=us&service=peacock&type=movie&order_by=original_title&year_min=2000&year_max=2020&genre=18&page=1&desc=true&language=en&output_language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const peacock = await peacockRes.json();

  // ******* Peacock end

  // ******* netflixLeaving start

  const nfLeavingRes = await fetch(
    "https://streaming-availability.p.rapidapi.com/changes?service=netflix&country=us&change_type=new&type=movie&output_language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const nfLeaving = await nfLeavingRes.json();

  // ******* netflixLeaving end

  // ******* huluLeaving start

  const huluLeavingRes = await fetch(
    "https://streaming-availability.p.rapidapi.com/changes?service=hulu&country=us&change_type=new&type=movie&output_language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const huluLeaving = await huluLeavingRes.json();

  // ******* huluLeaving end

  // ******* primeLeaving start

  const primeLeavingRes = await fetch(
    "https://streaming-availability.p.rapidapi.com/changes?service=prime&country=us&change_type=removed&type=movie&output_language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const primeLeaving = await primeLeavingRes.json();

  // ******* primeLeaving end

  // ******* hboLeaving start

  const hboLeavingRes = await fetch(
    "https://streaming-availability.p.rapidapi.com/changes?service=hbo&country=us&change_type=removed&type=movie&output_language=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": process.env.PRIVATE_API_KEY,
      },
    }
  );

  const hboLeaving = await hboLeavingRes.json();

  // ******* hboLeaving end

  return {
    props: {
      hulu,
      prime,
      netflix,
      netflix2,
      hbo,
      disney,
      para,
      peacock,
      nfLeaving,
      huluLeaving,
      primeLeaving,
      hboLeaving,
    },
  };
}
