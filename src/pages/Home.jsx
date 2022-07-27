import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from "../api/tmdbApi";

const Home = () => {
  useEffect(() => {
    document.title = "Trang chủ | Galaxy Play";
  }, []);
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section">
          <div className="section__header">
            {/* việt hoá chỗ này */}
            <h2>Trending Movies</h2>
            <Link to="/movie">
              {/* việt hoá chỗ này */}
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section">
          <div className="section__header">
            {/* việt hoá chỗ này */}
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              {/* việt hoá chỗ này */}
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section">
          <div className="section__header">
            {/* việt hoá chỗ này */}
            <h2>Trending TV</h2>
            <Link to="/tv">
              {/* việt hoá chỗ này */}
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className="section">
          <div className="section__header">
            {/* việt hoá chỗ này */}
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              {/* việt hoá chỗ này */}
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Home;
