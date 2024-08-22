import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Trending from './Component/Trending';
import Popular from './Component/Popular';
import Movies from './Component/Movies';
import TvShow from './Component/TvShow';
import People from './Component/People';
import Moviedetails from './Component/Moviedetails';
import TvDetails from './Component/TvDetails';
import PersonDetail from './Component/PersonDetail';
import Providers from './Component/Providers';
import Trailer from './Component/Trailer';
import Notfound from './Component/Notfound';



function App() {
  console.log("jay Shree Ram")
  return (
    <div>
       <Routes>
        <Route path = "/"  element={<Home/>} />
        <Route path = "/trending"  element={<Trending/>} />
        <Route path = "/popular" element = {<Popular/>} />
        <Route path = "/movie" element = {<Movies/>} />
        <Route path = "/tv" element = {<TvShow/>} />
        <Route path="/movie/details/:id" element={<Moviedetails/>}> 
        <Route path="/movie/details/:id/trailer" element={<Trailer/>} />
         </Route>
        <Route path="/movie/details/:id/Providers" element={<Providers/>}/> 
        <Route path="/tv/details/:id" element={<TvDetails/>}>
        <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
        </Route>
        <Route path="/tv/details/:id/Providers" element= {<Providers/>}/>
        <Route path = "/person" element = {<People/>} />
        <Route path="/person/details/:id" element={<PersonDetail/>}/>
        <Route path="*" element={<Notfound/>}/>
       </Routes>
    </div>
  )
}

export default App
