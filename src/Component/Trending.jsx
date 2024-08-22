import React, { useEffect, useState } from 'react'
import Topnav from './Topnav'
import Dropdown from './Dropdown'
import { Link, useNavigate } from 'react-router-dom'
import VerticalCards from './VerticalCards'
import axios from '../utils/Axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import Notfound from './Notfound'


const Trending = () => {
   
  document.title = "Showcase | Trending"

  const navigate = useNavigate();
  const [trending, settrending] = useState([]);
  const [category , setCategory] = useState("all");
  const [duration , setDuration] = useState("day");
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true)
   
  const handleCards = async()=>{
    try{
     

      const {data} = await axios(`/trending/${category}/${duration}?page=${page}`);
      // setCard(data.results);
      if(data.results.length>0 ) {
      settrending((prev)=>[...prev, ...data.results])
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
    if(trending.length===0){
      handleCards();
    } else{
      setPage(1);
      settrending([]);
      handleCards();
    }
  }

  useEffect(()=>{
       refreshHandler(); 
   },[category, duration])


  return  trending && (
    <div className='h-full w-full relative overflow-hidden overflow-y-auto'>
      
      <h1 className=' text-3xl font-semibold  text-center w-full text-white  flex  p-4 capitalize'> <Link > <i onClick={()=>navigate(-1)} className="ri-arrow-left-line mr-3 font-thin  hover:text-[#665BCD] "></i> </Link> Trending  {category=="all"?"Movies & All": category }</h1>
      <div className="flex items-center justify-between px-10">
        <Topnav margin={1}/>
        <div className='flex gap-5 items-center'>
          <Dropdown options={["movie","tv","all"]} title={"Category"} fnc={(e)=>setCategory(e.target.innerHTML) }
          />
          <Dropdown options={["day", "week"]} fnc={(e)=>setDuration(e.target.innerHTML) } title={"Duration"}/>
        </div> 
      </div>
      
      <InfiniteScroll
      dataLength={trending.length} //This is important field to render the next data
      next={handleCards}
      hasMore={hasmore}
      >
     
      <VerticalCards data = {trending} title={category} />
      
      </InfiniteScroll>
    
    </div>
  ) 
}

export default Trending
