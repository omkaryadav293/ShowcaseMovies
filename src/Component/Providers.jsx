import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import Siteloader from "./Siteloader";

const Providers = () => {
    const { pathname } = useLocation();
    const { id } = useParams();
    const dispatch = useDispatch();
    const category = pathname.includes("movie")? "movie" : "tv";
    const { info } = useSelector((state) => state[category]);
    const navigate = useNavigate();
   
    
   
   category == "movie" && useEffect(() => {
      dispatch(asyncloadmovie(id));
  
      return () => {
        dispatch(removemovie());
      };
      
    }, [id]);

   category == "tv" && useEffect(() => {
      dispatch(asyncloadtv(id));
  
      return () => {
        dispatch(removetv());
      };
    }, [id]);
  
    function formatMinutes(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours}h ${mins < 10 ? "0" : ""}${mins}m`;
    }
      
     
    return (
      info ? (
        <div>
          <div className="h-[100vh] w-full relative  ">
            <nav className="w-full h-[10vh]  flex items-center  text-zinc-200  gap-10 px-14">
              <h1 className=" text-3xl font-semibold  text-center w-full text-white  flex  gap-5 p-4 capitalize">
                {" "}
                <Link>
                  {" "}
                  <i
                    onClick={() => navigate(-1)}
                    className="ri-arrow-left-line mr-3 font-thin  hover:text-[#665BCD] "
                  ></i>{" "}
                </Link>{" "}
                SHOWCASE{" "}
              </h1>
              <Link
                to="/movie"
                className=" h-[4vh] w-[5%] font-semibold text-xl hover:border-b-[2px] "
              >
                <span>Movies</span>
              </Link>
              <Link
                to="/tv"
                className="  font-semibold text-xl h-[4vh] w-[5%] hover:border-b-[2px]"
              >
                <span>TVShow</span>
              </Link>
              <Link
                to="/person"
                className=" h-[4vh] w-[5%] hover:border-b-[2px]  font-semibold text-xl "
              >
                <span>People</span>
              </Link>
            </nav>
            <div
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6) ), url(https://image.tmdb.org/t/p/original/${
                  info.detail.backdrop_path
                    ? info.detail.backdrop_path
                    : info.detail.belongs_to_collection
                } )`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="w-[100%] h-[100%] pointer-events-none flex-shrink-0 absolute top-0 -z-40 "
            ></div>

            
            
            <div className="w-[100%] h-[100%] pointer-events-none flex-shrink-0 absolute top-0 -z-10 cover"></div>
  
            <div className="flex gap-5 w-full h-80vh py-10 px-24 text-white">
              <div className="left  w-[25vw]  ">
                <img
                  className="object-cover h-[63vh] w-[23vw] rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path}`}
                  alt=""
                />
  
                
                
              </div>
              <div className="right w-[70vw] ">
                <h1 className="text-5xl font-bold word-break hover:text-zinc-300 title">
                  {info.detail.original_name ||
                    info.detail.name ||
                    info.detail.original_title ||
                    info.detail.title}{" "}
                  <span className="text-zinc-300">{`(${
                   info.detail.release_date ? info.detail.release_date.split("-")[0] :  info.detail.first_air_date.split("-")[0]
                  })`}</span>{" "}
                </h1>
                <div className="font-regular text-lg mt-2">
                  <span>{info.detail.release_date ?info.detail.release_date : info.detail.first_air_date} (IN) &nbsp; &nbsp;</span>
                  <span>
                    {info.detail.genres.map((g) => g.name).join(", ")} &nbsp;
                    &nbsp;
                  </span>
                 { info.detail.runtime ? formatMinutes(info.detail.runtime) :
                 <>
                  <span>Seasons {info.detail.number_of_seasons} </span>
                  <span>episodes  {info.detail.number_of_episodes}  </span></> }
                </div>
                
                <div className="flex flex-col justify-center gap-3 font-semibold mt-5 ">
                {info.watchproviders.flatrate && <>
                    <h2 className="text-xl " >Stream </h2>
                    <div className="flex gap-5">
                   {info.watchproviders.flatrate.map((item, index)=><div key={index} className=" cursor-pointer  group relative  " ><img className="w-14 h-14 rounded-md  object-cover" src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt="" /> <h3 className="hidden absolute  px-3 bg-zinc-300 top-[80%] left-[20%] group-hover:block text-zinc-600 rounded tex-xs w-24 pb-1 z-40 ">{item.provider_name.length>9? item.provider_name.split(" ")[0] : item.provider_name}</h3> 
                   </div>  )}
                    </div> </>}
                  

                </div>
                <div className="flex flex-col justify-center gap-3 font-semibold mt-5 ">
                {info.watchproviders.buy && <>
                    <h2 className="text-xl " >Buy </h2>
                    <div className="flex gap-5">
                    {info.watchproviders.buy && info.watchproviders.buy.map((item, index)=> <div key={index} className=" cursor-pointer  group relative " ><img className="w-14 h-14 rounded-md  object-cover  " src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt="" /> <h3 className="hidden absolute  px-3 bg-zinc-300 top-[80%] left-[20%] group-hover:block text-zinc-600 rounded tex-xs w-24 pb-1 z-40 ">{item.provider_name.length>10? item.provider_name.split(" ")[0] : item.provider_name}</h3> </div>  )}
                    </div> </>}
                  

                </div>
                <div className="flex flex-col  justify-center gap-3 font-semibold mt-5 ">
                {info.watchproviders.rent && <>
                    <h2 className="text-xl " >Rent  </h2>
                    <div className="flex gap-5">
                    {info.watchproviders.rent && info.watchproviders.rent.map((item, index)=> <div key={index} className="cursor-pointer  group relative " ><img className="w-14 h-14 rounded-md  object-cover  " src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt="" /> <h3 className="hidden absolute  px-3 bg-zinc-300 top-[80%] left-[20%] group-hover:block text-zinc-600 rounded tex-xs w-24 pb-1 z-40  ">{item.provider_name.length>10? item.provider_name.split(" ")[0] : item.provider_name }</h3> </div>  )}
                    </div> </>}

                </div>
           
                
                
              </div>
            </div>
          </div>
        </div>
      )  : <Siteloader/>
    )
  };
  

export default Providers
