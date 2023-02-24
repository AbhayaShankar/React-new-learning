import SingleMovie from "./SingleMovie";

const getImagePath = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
};

export const MoviesCard = ({
  original_title,
  release_date,
  poster_path,
  id,
}) => {
  return (
    <div className="container">
      <img id={id} src={getImagePath(poster_path)} alt="" />
      <h4>{original_title}</h4>
      <h4>{release_date}</h4>
    </div>
  );
};
