import React, { useEffect, useState } from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Header from "./Header";
import axios from "../utils/Axios";
import HorizontalCards from "./HorizontalCards";
import Dropdown from "./Dropdown";
import Loader from "./Loader";

function Home() {
  document.title = "Showcase | HomePage";

  const [wallpaper,Setwallpaper] = useState(null);
  const [trending, Settrending] = useState(null);
  const [popular, Setpopular] = useState(null);
  const [category, Setcategory] = useState("all");
  const [popularcategory, SetpopularCategory] = useState("movie");
  

  const handleWallpaper = async () => {
    const { data } = await axios.get("/trending/all/week");
    let randomData = Math.floor(Math.random() * data.results.length);
    Setwallpaper(data.results[randomData]);
    
  };

  const handleTrending = async () => {
    const { data } = await axios.get(`/trending/${category}/week`);
    Settrending(data.results);
    // console.log(data.results)
  };
  const handlePopular = async () => {
    const { data } = await axios.get(`/${popularcategory}/popular`);
    Setpopular(data.results);
    // console.log(data.results)
  };
  useEffect(() => {
    !wallpaper && handleWallpaper();
    handleTrending();
    handlePopular();
  }, [category, popularcategory]);

  const handleClick = (e) => {
    Setcategory(e.target.innerHTML);
  };
  const popularClick = (e) => {
    SetpopularCategory(e.target.innerHTML);
  };
 
 

  return wallpaper && trending && category && popular && popularcategory ? (
    <div className="w-scren h-screen text-white flex ">
      <Sidenav />
      <div className="w-[80%] h-full max-xl:w-full overflow-x-hidden overflow-y-auto">
        <div className="relative">
          <Topnav />
          <Header data={wallpaper}  />
        </div>
        <div className="flex justify-between items-center  pt-2">
          <h1 className="font-bold text-2xl text-zinc-400 mb-3 mt-2">
            Trending
          </h1>
          <Dropdown
            options={["all", "movie", "tv"]}
            title={category}
            fnc={handleClick}
          />
        </div>
        <HorizontalCards data={trending} para={1}  bg={1} high={1} poster={1} title={category} />
        <div className="flex justify-between items-center  pt-2">
          <h1 className="font-bold text-2xl text-zinc-400 mb-3 mt-2">
            Popular
          </h1>
          <Dropdown
            options={["movie", "tv"]}
            title={category}
            fnc={popularClick}
          />
        </div>
        <HorizontalCards data={popular} para={1}  bg={1} high={1} poster={1} title={popularcategory} />
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Home;
