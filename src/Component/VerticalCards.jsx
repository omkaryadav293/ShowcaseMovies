import React from 'react'
import { Link } from 'react-router-dom'

const VerticalCards = ({data, title }) => {

  return ( <div className=' h-full w-full flex flex-wrap  gap-x-8 overflow-x-hidden p-8 relative'>
   {  data.map((data, index)=>  <Link to={`/${data.media_type || title}/details/${data.id}`} key={index} className='w-[18%] h-[65%]  flex flex-col overflow-hidden relative '>
    <img src={`https://image.tmdb.org/t/p/original/${ data.poster_path || data.backdrop_path || data.profile_path || data.profile_path && data.poster_path || data.backdrop_path || data.profile_path || data.profile_path }`} className="block object-cover object-[center_top] w-full h-[75%] rounded-md" alt=""  />
    <h1 className='text-white h-20 text-2xl font-semibold leading-none mt-3'>{data.name|| data.name || data.original_title || data.title && data.name|| data.name || data.original_title || data.title}</h1>
    {data.vote_average &&
    <div className="absolute w-[7vh] h-[7vh] rounded-full bg-yellow-600 text-white font-semibold text-xl flex justify-center items-center left-[80%] top-[68%] z-40 ">{(data.vote_average *10).toFixed()} <sup className='text-xs'>%</sup></div>
}

  </Link>)  
  } 
  </div>
  )
}

export default VerticalCards
