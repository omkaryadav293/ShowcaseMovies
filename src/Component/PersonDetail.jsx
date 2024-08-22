import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/PersonActions";
import HorizontalCards from "./HorizontalCards";
import Siteloader from "./Siteloader";
import Dropdown from "./Dropdown";


const PersonDetail = () => {
  document.title = " Showcase | PersonDetails"
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  const navigate = useNavigate();
  const [cast, setCast] = useState("movie");
  const [crew, setCrew] = useState("movie");
  const [show, setshow] = useState(false);
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id,cast,crew]);

  
  

   

  return info? (
    <div className=" w-full h-[100vh] text-white" >
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
      <div className="flex gap-5 w-full h-80vh py-10 px-24 text-white">
            <div className="left  w-[25vw]  ">
              <img
                className="object-cover h-[63vh] w-[23vw] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
                alt=""/>
            
            </div>
            <div className="right w-[70vw] ">
              <h1 className="text-5xl font-bold word-break hover:text-zinc-300 title">
                {info.detail.original_name ||
                  info.detail.name ||
                  info.detail.original_title ||
                  info.detail.title}{" "}
                <span className="text-zinc-300">{`(${
                  info.detail.birthday.split("-")[0]
                })`}</span>{" "}
              </h1>
              <div className="font-regular text-lg mt-2">
                <span>{info.detail.birthday } &nbsp; </span>
                <span>to &nbsp; </span>
                <span> { info.detail.deathday !== null && info.detail.deathday  } &nbsp; &nbsp; </span>
                
                <span>{info.detail.known_for_department.includes("ing")? info.detail.known_for_department.replace("ing","or") : info.detail.known_for_department }</span>
              
                
              </div>
              
              <div className="flex items-center gap-10 text-lg font-bold mt-5  ">
                <h3>Social Medias </h3>
             { info.externalid.imdb_id &&  <a
                  href={`https://www.imdb.com/name/${info.externalid.imdb_id}`}
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
                </a> }
               {info.externalid.wikidata_id && <a
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
                </a> }
               {info.externalid.twitter_id && <a
                  href={`https://x.com/${info.externalid.twitter_id}`}
                  target="_blank"
                  className="   flex justify-center items-center    flex-col text-sm font-semibold  shrink-0"
                >
                  {" "}
                  <img
                    className="shrink-0"
                    width={34}
                    height={34}
                    src="../../src/assets/twitter.svg"
                    alt=""
                  />{" "}
                  Twitter{" "}
                </a>}
               {info.externalid.facebook_id && <a
                  href={`https://www.facebook.com/${info.externalid.facebook_id}`}
                  target="_blank"
                  className="   flex justify-center items-center    flex-col text-sm font-semibold  shrink-0"
                >
                  {" "}
                  <img
                    className="shrink-0"
                    width={34}
                    height={34}
                    src="../../src/assets/facebook.svg"
                    alt=""
                  />{" "}
                  Facebook
                </a> }
              { info.externalid.facebook_id &&  <a
                  href={`https://www.instagram.com/${info.externalid.instagram_id}`}
                  target="_blank"
                  className="   flex justify-center items-center    flex-col text-sm font-semibold  shrink-0"
                >
                  {" "}
                  <img
                    className="shrink-0"
                    width={34}
                    height={34}
                    src="../../src/assets/instagram.svg"
                    alt=""
                  />{" "}
                  Istagram
                </a> }
              </div> 

              

              <div className="mt-2">
                <h1 className="font-bold text-xl ">Biography</h1>
                <div className="font-regular text-md relative" >
                  <p className="inline" >{ info.detail.biography.slice(0, info.detail.biography.length/2) }</p>
                   <span onClick={()=>{ setshow(prev=> !prev ) }} className={` cursor-pointer text-blue-400 ${show? "hidden" :"initial"}`}>...more</span>
                  <p className={`absoulute ${show ===false?"hidden": "initial"} top-[25%]  inline`}>{info.detail.biography.slice(info.detail.biography.length/2)}</p>
                  <span onClick={()=>{ setshow(prev=> !prev ) }} className={`text-zinc-400 ${show?"block":"hidden"} cursor-pointer`}>...less</span>
              </div>
              </div>
              
            </div>
          </div>
          <div className="bottom px-20 text-white ">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold px-5 pb-2" >Cast</h1>
             <Dropdown
            options={["movie", "tv"]}
            title={cast}
            fnc={(e) => setCast(e.target.innerHTML) }
          />
              </div>
              <HorizontalCards title={cast}  data={cast == "movie" ? info.movieCredits.cast : info.tvCredits.cast}/>
            </div>
          <div className="bottom px-20 text-white ">
          <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold px-5 pb-2" >Crew</h1>
              <Dropdown
            options={["movie", "tv"]}
            title={crew}
            fnc={(e) => setCrew(e.target.innerHTML) }
          />
              </div>
              <HorizontalCards title={crew}  data={crew == "movie" ? info.movieCredits.crew : info.tvCredits.crew}/>
            </div>
            <div className=" w-[86vw] mx-auto border-b-[1px] rounded-md"></div>
            <div className="w-full  px-28 py-5 h-[95vh] text-white flex gap-5 mx-auto "  >
              <div>
              <h1 className="text-3xl font-semibold mt-10 ">Personal Info</h1>
              <div className="aleft w-[27vw] h-full  overflow-x-hidden overflow-y-auto   ">
                <h3 className="font-semibold text-xl mt-5">Known For</h3>
                <h4 className="text-zinc-400 text-md font-bold" >{info.detail.known_for_department}</h4>
                <h3 className="font-semibold text-xl mt-5">Gender</h3>
                <h4 className="text-zinc-400 text-md font-bold" >{info.detail.gender == 2 ? "Male" : 'Female' }</h4>
                <h3 className="font-semibold text-xl mt-5">BirthDay</h3>
                <h4 className="text-zinc-400 text-md font-bold" >{info.detail.birthday}</h4>
                <h3 className="font-semibold text-xl mt-5">Place of Birth</h3>
                <h4 className="text-zinc-400 text-md font-bold" >{info.detail.place_of_birth}</h4>
                <h3 className="font-semibold text-xl mt-5">Also known as</h3>
                {info.detail.also_known_as && info.detail.also_known_as.map((data,index)=><h4 key={index} className="text-zinc-400 text-md font-bold mt-2" >{data}</h4>)}
               
              </div>
              </div>
              <div>
              <h1 className="text-3xl font-semibold mt-10 ">Acting</h1>
              <div className=" w-[27vw] h-full  overflow-x-hidden overflow-y-auto   "> 
                {info.combinedCredits.cast.map((data, index)=><div key={index}>
                  <h3 className="font-semibold text-xl mt-5">{data.title}</h3>
                  <h4 className="text-zinc-400 text-md font-bold" >{data.character}</h4>
                </div>)}

                  </div>
                  </div>
              <div>
              <h1 className="text-3xl font-semibold mt-10 ">Crew</h1>
              <div className="aright w-[27vw] h-full  overflow-x-hidden overflow-y-auto   "> 
                {info.combinedCredits.crew.map((data, index)=><div key={index}>
                  <h3 className="font-semibold text-xl mt-5">{data.title || data.name || data.original_name }</h3>
                  <h4 className="text-zinc-400 text-md font-bold" >{data.job || data.department }</h4>
                </div>)}

                  </div>
                  </div>
            </div>
    </div> 
  ): <Siteloader/>
}

export default PersonDetail
