import React, { useEffect } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopMovies,
  fetchTopRated,
  fetchNowPlaying,
  fetchShowsPop,
} from "../../features/moviesReducer";
import Card from "../card";

const Row = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };
  const dispatchTop = useDispatch();
  const dispatchPop = useDispatch();
  const dispatchNow = useDispatch();
  const dispatchTVShow = useDispatch();
  const popularMovies = useSelector((state) => state.popularMovies.popular);

  const topRatedMovies = useSelector((state) => state.popularMovies.topRated);

  const nowPlaying = useSelector((state) => state.popularMovies.nowPlaying);

  const tvShows = useSelector((state) => state.popularMovies.tvShows);

  
  useEffect(() => {
    dispatchPop(fetchPopMovies());
    dispatchTop(fetchTopRated());
    dispatchNow(fetchNowPlaying());
    dispatchTVShow(fetchShowsPop());
  }, []);
  return (
    <>
      <div className="p-8">
        <h1>Popular</h1>
        <Slider {...settings}>
          {popularMovies.map((items, index) => {
            return <Card item={items} key={index} />;
          })}
        </Slider>
      </div>
      <div className="p-8">
        <h1>Top Rated</h1>
        <Slider {...settings}>
          {topRatedMovies.map((topMovie, index) => {
            return <Card item={topMovie} key={index} />;
          })}
        </Slider>
      </div>
      <div className="p-8">
        <h1>Now Playing</h1>
        <Slider {...settings}>
          {/* {nowPlaying[0].results.map((nowPlaying, index) => {
            return <Card item={nowPlaying} key={index} />;
          })} */}
        </Slider>
      </div>
      <div className="p-8">
        <h1>TV Shows Popular</h1>
        <Slider {...settings}>
          {/* {tvShows[0].results.map((tvShows, index) => {
          return <Card item={tvShows} key={index} />;
        })} */}
        </Slider>
      </div>
    </>
  );
};

export default Row;
