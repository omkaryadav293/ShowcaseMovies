import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Siteloader = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    let category = pathname.includes("movie")? "movie" : "tv"; 
    let arr = [1,2,3,4]
  return (
    <div>
    <div className="h-[132vh] w-full relative overflow-hidden ">
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
          <div className='h-[63vh] w-[23vw] bg-zinc-700 rounded-md '></div>
      
        </div>
        <div className="right w-[70vw] ">
          <div className='w-[55%] py-4 px-4 rounded-md bg-zinc-700'></div>
          <div className="py-3 px-5 rounded-md w-[30%] mt-3 bg-zinc-700" ></div>
          <div className='w-[18%] py-2 px-5 rounded-md mt-3 bg-zinc-700' ></div>
    
          
     </div>  
    </div> 
      
      <div className='w-full px-28 py-8 flex overflow-x-auto  overflow-y-hidden gap-12 scroller '>
      {arr.map((data, index)=>  <div key={index} className="h-[26vh] w-[22%]  bg-zinc-700 px-4 py-3 flex flex-col shrink-0 relative rounded-md">
      </div>)}
      </div>
      { category === "tv" &&
      <>
     
      <div className='w-full px-28 py-8 flex overflow-x-auto  overflow-y-hidden gap-12 scroller '>
      {arr.map((data, index)=>  <div key={index} className="h-[26vh] w-[22%]  bg-zinc-700 px-4 py-3 flex flex-col shrink-0 relative rounded-md">
      </div>)}
      </div>
      </>}

    </div>
    </div>
  
  )
}

export default Siteloader
