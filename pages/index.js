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
import Layout from '../src/components/Layout'

export default function Home({

}) {
  return (
    <>
      <Layout>
        <Hero />
        {/* <Row1 />
        <Hulu />
        <Prime />
        <Netflix />
        <Row8 />
        <HBO />
        <Disney />
        <Paramount />
        <Peacock />
        <Leaving /> */}
      </Layout>
    </>
  );
}

// export async function getStaticProps() {



//   const nfLeavingRes = await fetch(
//     "https://streaming-availability.p.rapidapi.com/changes?service=netflix&country=us&change_type=new&type=movie&output_language=en",
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
//         "x-rapidapi-key": process.env.PRIVATE_API_KEY,
//       },
//     }
//   );

//   const nfLeaving = await nfLeavingRes.json();

//   // ******* netflixLeaving end

//   // ******* huluLeaving start

//   const huluLeavingRes = await fetch(
//     "https://streaming-availability.p.rapidapi.com/changes?service=hulu&country=us&change_type=new&type=movie&output_language=en",
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
//         "x-rapidapi-key": process.env.PRIVATE_API_KEY,
//       },
//     }
//   );

//   const huluLeaving = await huluLeavingRes.json();

//   // ******* huluLeaving end
  
//   // ******* primeLeaving start

//     const primeLeavingRes = await fetch(
//       "https://streaming-availability.p.rapidapi.com/changes?service=prime&country=us&change_type=removed&type=movie&output_language=en",
//       {
//         method: "GET",
//         headers: {
//           "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
//           "x-rapidapi-key": process.env.PRIVATE_API_KEY,
//         },
//       }
//     );

//     const primeLeaving = await primeLeavingRes.json();

//   // ******* primeLeaving end

//   // ******* hboLeaving start

//   const hboLeavingRes = await fetch(
//     "https://streaming-availability.p.rapidapi.com/changes?service=hbo&country=us&change_type=removed&type=movie&output_language=en",
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
//         "x-rapidapi-key": process.env.PRIVATE_API_KEY,
//       },
//     }
//   );

//   const hboLeaving = await hboLeavingRes.json();


//   // ******* hboLeaving end

//   return {
//     props: {
//       hulu,
//       prime,
//       netflix,
//       netflix2,
//       hbo,
//       disney,
//       para,
//       peacock,
//       nfLeaving,
//       huluLeaving,
//       primeLeaving,
//       hboLeaving,
//     },
//   };
// }
