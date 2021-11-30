import Image from "next/image";
function Movie({ title, index, poster_path }) {
  const IMAGES_API = "https://image.tmdb.org/t/p/w500";

  return (
    <div key={index}>
      <h1>{title}</h1>
      <Image
        src={IMAGES_API + poster_path}
        width={500}
        height={750}
        // layout='fill'
        objectFit='cover'
        alt={title}
      />
    </div>
  );
}

export default Movie;
