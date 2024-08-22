import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  
  return (
    <div className={`w-[20%]  h-full p-5 `}>
    
        <h1 className='font-bold text-2xl   '> 
        <i className=" text-[#4854BB] ri-tv-fill mr-2 "/> 
        <span>Showcse</span>
       
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl gap-1'>
            <h1 className='font-semibold text-xl mt-10 mb-5 text-zinc-300'>New Feeds</h1>
            <Link to="/trending" className= "p-4 rounded-lg hover:bg-[#4854BB] duration-300 hover:text-white " >
            <i className="ri-fire-fill mr-2"></i>
            <span>Trending</span></Link>
            <Link to="/popular" className=" p-4 rounded-lg hover:bg-[#4854BB] duration-300 hover:text-white ">
            <i className="ri-bard-fill mr-2"></i>
            <span>Popular</span></Link>
            <Link to="/movie" className=" p-4 rounded-lg hover:bg-[#4854BB] duration-300 hover:text-white ">
            <i className="ri-movie-2-fill mr-2"></i>
            <span>Movies</span></Link>
            <Link to="/tv" className=" p-4 rounded-lg hover:bg-[#4854BB] duration-300 hover:text-white ">
            <i className="ri-tv-2-fill mr-2"></i>
            <span>TV Shows</span></Link>
            <Link to="/person" className=" p-4 rounded-lg hover:bg-[#4854BB] duration-300 hover:text-white ">
            <i className="ri-team-fill mr-2"></i>
            <span>People</span></Link>
            
        </nav>
        <div className="underline border-b border-zinc-200 mt-5 mb-5"></div>
        <nav className='flex flex-col text-zinc-400 text-xl gap-1'>
            <h1 className='font-semibold text-xl mt-5 mb-5 text-zinc-300'>Website Information</h1>
            <Link className=" p-4 rounded-lg hover:bg-[#4854BB] duration-300 hover:text-white ">
            <i className="ri-information-2-fill mr-2 "></i>
            <span>About Showcase</span></Link>
            <Link className=" p-4 rounded-lg hover:bg-[#4854BB] duration-300 hover:text-white ">
            <i className="ri-phone-fill mr-2"></i>
            <span>Contact Us</span></Link>
        </nav> 
    </div>
  )
}

export default Sidenav
