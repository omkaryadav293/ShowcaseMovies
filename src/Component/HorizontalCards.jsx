import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import noimage from "/No_image.png"

const HorizontalCards = ({ data , bg, high,poster , title }) => {
  
  let reversedData = data.slice().reverse();
  return (
    <>
      <div className={`w-full ${high ?" h-[60vh]" : " h-[35vh]"}  py-2 flex overflow-x-auto  overflow-y-hidden gap-5 scroller`}>
        {reversedData.map((data, index) => (
         data.season_number || data.season_number == 0 ? <div
          key={index}
          className={`h-[100%] min-w-[24%] rounded-md ${bg && "bg-zinc-900"}  flex flex-col  relative overflow-hidden`}
        >
          {poster ?  <img
            src={
              data.poster_path || data.backdrop_path || data.profile_path?`https://image.tmdb.org/t/p/original/${data.poster_path || data.backdrop_path || data.profile_path} `: "https://st.depositphotos.com/2934765/53192/v/450/depositphotos_531920820-stock-illustration-photo-available-vector-icon-default.jpg" } 
            className="object-cover object-[center_top] w-full h-[85%] "
            alt=""/> :   <img
            src={
              data.backdrop_path  ||  data.poster_path || data.profile_path?`https://image.tmdb.org/t/p/original/${data.poster_path || data.backdrop_path || data.profile_path} `: "https://st.depositphotos.com/2934765/53192/v/450/depositphotos_531920820-stock-illustration-photo-available-vector-icon-default.jpg" } 
            className="object-cover object-[center_top] w-full h-[85%] "
            alt=""/>
          }
          
          <h1 className={`font-semibold text-xl word-break text-white w-full overflow-hidden`}>
            {data.name || data.name || data.original_title || data.title}
          </h1>
          

          
        </div>  : <Link
         to= {`/${data.media_type || title}/details/${data.id }`}
          key={index}
          className={`h-[100%] min-w-[24%] rounded-md ${bg && "bg-zinc-900"} px-4 py-3 flex flex-col  relative overflow-hidden`}
        >
       {poster ?  <img
            src={
              data.poster_path || data.backdrop_path || data.profile_path?`https://image.tmdb.org/t/p/original/${data.poster_path || data.backdrop_path || data.profile_path} `: "https://st.depositphotos.com/2934765/53192/v/450/depositphotos_531920820-stock-illustration-photo-available-vector-icon-default.jpg" } 
            className="object-cover object-[center_top] w-full h-[85%] "
            alt=""/> :   <img
            src={
              data.backdrop_path  ||  data.poster_path || data.profile_path?`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path  || data.profile_path} `: "https://st.depositphotos.com/2934765/53192/v/450/depositphotos_531920820-stock-illustration-photo-available-vector-icon-default.jpg" } 
            className="object-cover object-[center_top] w-full h-[85%] "
            alt=""/>
          }
          <h1 className={`font-semibold text-xl word-break text-white w-full overflow-hidden`}>
            {data.name || data.name || data.original_title || data.title}
          </h1>
          
          
        </Link> 
        ))}
      </div>
    </>
  );
};

export default HorizontalCards;
