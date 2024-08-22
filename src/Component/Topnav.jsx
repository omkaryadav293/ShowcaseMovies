import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header';

const Topnav = ({category , margin}) => {

  let [query, Setquery] = useState("");
  const [searches , SetSearches] = useState([]);

  const getSearches = async()=>{
    try{
      const {data} = await axios.get(`/search/${category ? category : "multi"}?query=${query}`)
        SetSearches(data.results);
        
    }
    catch(error){
      console.log(error);
    }
  }


  useEffect(()=>{
      getSearches();
  },[query])  // whenever query changes it reacts 

  return (
    
    <div className={` h-[10vh]  w-full flex justify-start gap-5 items-center   relative ${margin? "pl-5": "ml-[30%]"}`}>
      <i className="ri-search-line cursor-pointer text-zinc-200 text-2xl font-regular"></i>
      <input onChange={(e)=>( Setquery(e.target.value))}
      value={query}
      type="text" placeholder='seach here' className={`bg-transparent border-b-2 border-white w-[27%] px-1 py-3 text-zinc-200 outline-none shrink-0  `}/>
      {query && query.length >0 && <i onClick={()=> Setquery("")} className="ri-close-large-fill font-regular cursor-pointer text-white"></i>}

    <div className="absolute max-h-[45vh] w-[33%] bg-zinc-100 rounded-lg top-[95%] overflow-auto z-40">

     {searches.map((search ,  index)=><Link to={`/${category ? category : search.media_type}/details/${search.id}`} key={index} className='flex justify-between items-center  text-zinc-600 px-5 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-200 hover:text-black '> 
         <span>
          {search.original_name || search.name || search.original_title || search.title}
         </span>
         <img className='object-cover w-14 h-14 rounded-lg' src={
          search.poster_path || search.backdrop_path || search.profile_path?`https://image.tmdb.org/t/p/original/${search.poster_path || search.backdrop_path || search.profile_path} `: "public/No_image.png" } alt="" />
         </Link>)}
    
         
    </div>
    </div>
   
    
  )
}

export default Topnav
