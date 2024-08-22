import React, { useEffect, useState } from 'react'
import Topnav from './Topnav'
import Dropdown from './Dropdown'
import { Link, useNavigate } from 'react-router-dom'
import VerticalCards from './VerticalCards'
import axios from '../utils/Axios'
import InfiniteScroll from 'react-infinite-scroll-component';


const TvShow = () => {
    document.title = "Showcase | TV Shows"

const navigate = useNavigate();
const [tv, settv] = useState([]);
const [category , setCategory] = useState("popular");
const [page, setPage] = useState(1);
const [hasmore, setHasmore] = useState(true)

const handleCards = async()=>{
    try{
      const {data} = await axios(`/tv/${category}?page=${page}`);
      if(data.results.length>0 ) {
      settv((prev)=>[...prev, ...data.results])
      setPage(page + 1);
      }else{
        setHasmore(false);
      }
    }
    catch{(error)=>
      console.log(error)
    }
  }

  const refreshHandler = ()=>{
    if(tv.length===0){
      handleCards();
    } else{
      setPage(1);
      settv([]);
      handleCards();
    }
  }

  useEffect(()=>{
       refreshHandler(); 
   },[category])
  return  (
    <div className='h-full w-full relative overflow-hidden overflow-y-auto'>
      
    <h1 className=' text-3xl font-semibold  text-center w-full text-white  flex  p-4 capitalize'> <Link > <i onClick={()=>navigate(-1)} className="ri-arrow-left-line mr-3 font-thin  hover:text-[#665BCD] "></i> </Link> TV Shows   </h1>
    <div className="flex items-center justify-between px-10">
      <Topnav category={"tv"} margin={1}/>
      <div className='flex gap-5 items-center'>
        <Dropdown options={["on_the-air","airing_today","popular", "top-rated"]} title={category} fnc={(e)=>setCategory(e.target.innerHTML) }
        />
        
      </div> 
    </div>
   
    <InfiniteScroll
    dataLength={tv.length} //This is important field to render the next data
    next={handleCards}
    hasMore={hasmore}>

    <VerticalCards data = {tv} title={"tv"}/>
    
    </InfiniteScroll>

 
  </div>
  )
}

export default TvShow
