import React, { useEffect, useState } from "react";
import axios from "axios";
import tmdb from "../api/tmdb";
import { MoviesCard } from "./MoviesCard";

function Main() {
  const [MoviesData, setMoviesData] = useState([]);

  //making full api call

  //   useEffect(() => {
  //     let url =
  //       "https://api.themoviedb.org/3/movie/popular?api_key=f96b20d81006ea5ddd8f1aaf0adbc828&language=en-US&page=1";

  //     axios
  //       .get(url)
  //       .then((res) => {
  //         console.log(res.data.results);
  //         const results = res.data.results;
  //         setMoviesData(results);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  // declaring params and api_key in separate file and calling the api from there.. looks clean

  useEffect(() => {
    const FetchData = async () => {
      const { data } = await tmdb.get("/movie/popular");
      setMoviesData(data.results);
    };

    FetchData();
  }, []);

  return (
    <div>
      <h1>This is Main page where we will get Data from API</h1>
      {MoviesData.map((movie, index) => {
        return <MoviesCard key={index} {...movie} />;
      })}
    </div>
  );
}

export default Main;
