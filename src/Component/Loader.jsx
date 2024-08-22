import React from 'react'
import Sidenav from './Sidenav'
import Dropdown from './Dropdown'
import Topnav from './Topnav';

const Loader = () => {
 let arr = [1,2,3,4,5,6,7,8,9,10];



  return (
    <div className='w-full h-screen text-white flex'>
      <Sidenav/>
      <div className='w-[80%] h-full overflow-y-auto overflow-x-hidden '>
      <div className="relative h-[60vh]">
      <Topnav/>
      <div className='w-full h-[60vh] bg-zinc-700 px-5 py-2 flex overflow-x-auto  overflow-y-hidden gap-5 absolute top-0 -z-10'> </div>
      </div>
      <div className="flex justify-between items-center px-5 pt-2">
      <h1 className='font-bold text-2xl text-zinc-400 mb-3 mt-2'>Trending</h1>
      <Dropdown options={["all", "movie", "tv"]} title={"category"}/>
      </div>
      <div className='w-full h-[60vh] px-5 py-2 flex overflow-x-auto  overflow-y-hidden gap-5'>
      {arr.map((data, index)=>  <div key={index} className="h-[100%] min-w-[23%] rounded-md bg-zinc-700 px-4 py-3 flex flex-col  relative">
      </div>)}
      </div>
    
    </div>
    </div>
    
  )
}

export default Loader
