import React from 'react'
import notfound from "../assets/404.gif";
import { Link, useNavigate } from 'react-router-dom';


const Notfound = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center relativ w-full h-screen'>
        <Link>
                {" "}
                <i
                  onClick={() => navigate(-1)}
                  className="ri-close-fill absolute mr-3 font-thin text-4xl text-white top-[10%] left-[93%] hover:text-[#665BCD] "
                ></i>{" "}
              </Link>{" "}
      <img src={notfound} alt="" />
    </div>
  )
}

export default Notfound
