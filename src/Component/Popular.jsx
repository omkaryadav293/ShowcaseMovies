import React, { useEffect, useState } from 'react'
import Topnav from './Topnav'
import Dropdown from './Dropdown'
import { Link, useNavigate } from 'react-router-dom'
import VerticalCards from './VerticalCards'
import axios from '../utils/Axios'
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {

  document.title = "Showcase | Popular"

  const navigate = useNavigate();
  const [popular, setPopular] = useState([]);
  const [category , setCategory] = useState("movie");
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true)

  const handleCards = async()=>{
    try{
     

      const {data} = await axios(`/${category}/popular?page=${page}`);
      if(data.results.length>0 ) {
      setPopular((prev)=>[...prev, ...data.results])
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
    if(popular.length===0){
      handleCards();
    } else{
      setPage(1);
      setPopular([]);
      handleCards();
    }
  }

  useEffect(()=>{
       refreshHandler(); 
   },[category])


  return (
    <div className='h-full w-full relative overflow-hidden overflow-y-auto'>
      
      <h1 className=' text-3xl font-semibold  text-center w-full text-white  flex  p-4 capitalize'> <Link > <i onClick={()=>navigate(-1)} className="ri-arrow-left-line mr-3 font-thin  hover:text-[#665BCD] "></i> </Link> Popular  {category == "tv" ? "TV Shows" : category }</h1>
      <div className="flex items-center justify-between px-10">
        <Topnav margin={1}/>
        <div className='flex gap-5 items-center'>
          <Dropdown options={["movie","tv"]} title={"category"} fnc={(e)=>setCategory(e.target.innerHTML) }
          />
        </div> 
      </div>
     
      <InfiniteScroll
  dataLength={popular.length} //This is important field to render the next data
  next={handleCards}
  hasMore={hasmore}
  >
     
      <VerticalCards data = {popular} title={category} />
      
      </InfiniteScroll>

   
    </div>
  )
}

export default Popular
