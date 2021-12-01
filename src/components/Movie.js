import Image from "next/image";
function Movie({ title, index, poster_path }) {
  const IMAGES_API = "https://image.tmdb.org/t/p/w500";

  return (
    <div key={index}>
      <Image
        src={IMAGES_API + poster_path}
        width={390}
        height={565}
        alt={title}
      />
    </div>
  );
}

export default Movie;
