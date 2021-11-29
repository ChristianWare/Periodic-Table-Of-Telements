import Layout from "../../src/components/Layout";

function MovieDetailsPage({ movies }) {
  console.log(movies)
  return (
    <Layout>
      <div>
        {movies.title}
      </div>
    </Layout>
  );
}

export default MovieDetailsPage;

export async function getServerSideProps({ query: { slug } }) {
   const res = await fetch(
     "https://streaming-availability.p.rapidapi.com/search/ultra?country=us&services=netflix%2Chulu&type=movie&order_by=imdb_vote_count&year_min=2000&year_max=2020&page=4&genres=18%2C80&genres_relation=or&desc=true&language=en&min_imdb_rating=70&max_imdb_rating=90&min_imdb_vote_count=10000&max_imdb_vote_count=1000000&output_language=en",
     {
       method: "GET",
       headers: {
         "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
         "x-rapidapi-key": process.env.PRIVATE_API_KEY,
       },
     }
   );
   const movies = await res.json()

  return {
    props: {
      movies,
    },
  };
}
