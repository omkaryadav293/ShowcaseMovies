import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import Topnav from "./Topnav";
import HorizontalCards from "./HorizontalCards";
import Siteloader from "./Siteloader";

const Moviedetails = () => {

  document.title = " Showcase | MovieDetails"
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removemovie());
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
        <div className="h-[132vh] w-full relative  ">
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
                info.detail.belongs_to_collection === null
                  ? info.detail.backdrop_path
                  : info.detail.belongs_to_collection.backdrop_path
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

              {info.watchproviders && (
                <Link
                  to={`/movie/details/${id}/Providers`}
                  className="bg-[#032541] py-2 w-[23vw] rounded-md flex  justify-center items-center gap-3 stream"
                >
                  {info.watchproviders.flatrate && (
                    <img
                      className=" object-cover h-[5.5vh] w-[5.5vh] rounded-md "
                      src={`https://image.tmdb.org/t/p/original/${info.watchproviders.flatrate[0].logo_path}`}
                      alt=""
                    />
                  )}
                  <div>
                    <h2 className="text-zinc-300 text-md font-regular leading-none tracking-normal ">
                      Now Streaming
                    </h2>
                    <h2 className="text-white text-md font-semibold tracking-normal ">
                      Watch Now
                    </h2>
                  </div>
                </Link>
              )}
            </div>
            <div className="right w-[70vw] ">
              <h1 className="text-5xl font-bold word-break hover:text-zinc-300 title">
                {info.detail.original_name ||
                  info.detail.name ||
                  info.detail.original_title ||
                  info.detail.title}{" "}
                <span className="text-zinc-300">{`(${
                  info.detail.release_date.split("-")[0]
                })`}</span>{" "}
              </h1>
              <div className="font-regular text-lg mt-2">
                <span>{info.detail.release_date} (IN) &nbsp; &nbsp;</span>
                <span>
                  {info.detail.genres.map((g) => g.name).join(", ")} &nbsp;
                  &nbsp;
                </span>
                <span>{formatMinutes(info.detail.runtime)}</span>
              </div>
              <div className="flex gap-5 items-center mt-3">
                {info.detail.vote_average && (
                  <div className="relative w-[9vh] h-[9vh] hover:scale-110 duration-300">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(#21D07A calc( ${(
                          info.detail.vote_average * 10
                        ).toFixed()} * 1%), #ddd 0)`,
                      }}
                    >
                      <div className="absolute inset-0  bg-[#081C22] rounded-full m-[4px] flex justify-center items-center font-semibold text-xl ">
                        {(info.detail.vote_average * 10).toFixed()}
                        <sup className="text-xs">%</sup>
                      </div>
                    </div>
                  </div>
                )}
                <div className="w-[3%] font-semibold text-lg leading-6 ">
                  User Score
                </div>
                <Link to={`${pathname}/trailer`} className="px-5 py-3 block rounded-lg text-lg w-fit  cursor-pointer  text-white hover:text-zinc-400">
                {" "}
                <i className="ri-play-large-fill"/> Watch Trailer {" "}
              </Link>
              </div>
              <div className="flex items-center gap-10 text-lg font-bold mt-5  ">
                <h3>Read Articles on </h3>
                <a
                  href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
                  target="_blank"
                  className="  flex justify-center items-center flex-col text-sm font-semibold  "
                >
                  {" "}
                  <img
                    width={54}
                    height={54}
                    src="../../src/assets/imdb.svg"
                    alt=""
                  />{" "}
                  imdb{" "}
                </a>
                <a
                  href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                  target="_blank"
                  className=" flex justify-center items-center  flex-col text-sm font-semibold"
                >
                  {" "}
                  <img
                    width={34}
                    height={34}
                    src="../../src/assets/wiki.svg"
                    alt=""
                  />{" "}
                  wikipedia{" "}
                </a>
                <a
                  href={`${info.detail.homepage}`}
                  target="_blank"
                  className="   flex justify-center items-center    flex-col text-sm font-semibold  shrink-0"
                >
                  {" "}
                  <img
                    className="shrik-0"
                    width={34}
                    height={34}
                    src="../../src/assets/earth.svg"
                    alt=""
                  />{" "}
                  Website{" "}
                </a>
              </div>

              <div className="mt-2 font-bold text-zinc-300 italic text-xl ">
                {info.detail.tagline && info.detail.tagline}
              </div>

              <div className="mt-2">
                <h1 className="font-bold text-xl ">Overview</h1>
                <p className=" text-md font-regular ">
                  {" "}
                  {info.detail.overview}{" "}
                </p>
              </div>
              
            </div>
          </div>
          <div className="bottom px-20 text-white ">
              <h1 className="text-xl font-semibold px-5 pb-2" >Reccomendations</h1>
              <HorizontalCards title={"movie"}  data={info.recommendations>0? info.recommendations : info.similar
              }/>
            </div>
            <Outlet/>
        </div>
      </div>
    ): (<Siteloader/>)
  )
};

export default Moviedetails;
