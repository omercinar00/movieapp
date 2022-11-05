import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const [movies, setMovies] = useState([])
  const API_KEY = "d30a8fd3c99b3b48b8263203351de7ab";

  // !Veri Kullanımı
  const VERI_URL =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  // !film Arama
  // https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=
  // !film detayları için
  // https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}
  // !görüntü için
  //  https://image.tmdb.org/t/p/w1280${poster_path}
  // src

  const getApi=async()=>{
    try {
     const {data} = await axios(VERI_URL)     
     console.log('data', data.results) 
     setMovies(data.results);

    } catch (error) {
      console.log('error', error)

    }
  }

  useEffect(() => {
    getApi()
  }, [])
  
  return <div>
    {movies.map((movie,index)=>(
      <MovieCard key={index} {...movie} />
    ))}

  </div>;
};

export default Main;
