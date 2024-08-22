import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import {Link, useLocation, useNavigate} from 'react-router-dom'

import Notfound from './Notfound';

const Trailer = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const category = (pathname.includes("movie")?  "movie" : "tv")
  
  const trailer = useSelector((state) => state[category].info.videos);
  console.log(trailer);
   console.log(pathname);
 
  return (
    <div className='bg-[rgba(0,0,9,0.8)] absolute top-0 left-0 w-full h-screen flex justify-center items-center  z-[100]  '>
      <Link>
                {" "}
                <i
                  onClick={() => navigate(-1)}
                  className="ri-close-fill absolute mr-3 font-thin text-4xl text-white top-[10%] left-[93%] hover:text-[#665BCD] "
                ></i>{" "}
              </Link>{" "}
      
     { trailer ? <ReactPlayer 
       controls
       height={600}
       width={1200}
       url={`https://www.youtube.com/watch?v=${trailer.key}`}/> : <Notfound/>}
    </div>
  )
}

export default Trailer
