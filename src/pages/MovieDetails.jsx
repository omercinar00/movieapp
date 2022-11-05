import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {

  const {id} = useParams()
  const [movieDetail, setMovieDetail] = useState("")
  const [video, setVideo] = useState([])


  const API_KEY = "d30a8fd3c99b3b48b8263203351de7ab";
  const DetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetail;


   

  const getDetail = async () => {
    try {
      const {data} = await axios(DetailsUrl);
      console.log("data", data);
      setMovieDetail(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getVideos = async () => {
    try {
      const { data } = await axios(videoUrl);
      console.log("data", data);
      setVideo(data.results[0].key);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getDetail();
    getVideos()
  }, []);
  

  return (
    <div className="card w-75 m-auto my-3">
      <div className="card-body">
        <div className="ratio ratio-16x9">
          <iframe
            src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails