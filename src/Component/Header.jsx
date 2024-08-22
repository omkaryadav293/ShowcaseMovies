import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";


const Header = ({ data , show }) => {
  const handleClick = ()=>{
    show(prev => !prev);
  }
  return (
    <div   className="min-h-[50vh] ">
      
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6) ), url(https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path || data.profile_path
          } )`,
          backgroundPosition: "0% 25%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[100%] h-[60vh] pointer-events-none flex-shrink-0 absolute top-0 -z-10"
      ></div>
      <div className="px-20 py-10">
        <h1 className="text-5xl w-[70%] font-bold word-break">
          {data.original_name || data.name || data.original_title || data.title}
        </h1>
        <p className="w-[60%] text-zinc-200 mt-5">
          {data.overview.slice(0, 150)}{" "}
          <Link
            to={`/${data.media_type}/details/${data.id}`}
            className="text-sm text-blue-600 hover:border-b-[1px] border-blue-600"
          >
            ...more
          </Link>
        </p>
        <div className="mt-1 text-zinc-200">
          Original language: &nbsp; &nbsp; "{data.original_language}"
        </div>
        <div className="text-xl text-zinc-300 mt-3 flex gap-5">
          <h1>
            <i className="ri-megaphone-fill text-yellow-400"></i> Release Date:{" "}
            {data.release_date || data.first_air_date
              ? data.release_date || data.first_air_date
              : "No information"}
          </h1>{" "}
          <h2>
            <i className="ri-album-fill text-yellow-400"></i> {data.media_type}
          </h2>
        </div>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="px-5 py-3 block rounded-lg bg-blue-500 text-lg text-zinc-200 w-fit mt-5 cursor-pointer hover:bg-blue-600 hover:text-white">
          {" "}
          Watch Trailer <i className="ri-play-large-fill"></i>{" "}
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default Header;
