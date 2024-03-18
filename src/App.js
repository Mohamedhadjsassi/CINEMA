import React, { useState } from 'react'
import TopNavbar from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Movies from './Movies';
import Add from './Add';
import Fitlered from './Filtered';
import movielist from './Movielist';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';
import TVshow from './TVshow';
import SingleMovie from './SingleMovie';


function App() {
  //states 
  const[search , setSearch]=useState('');
  const[rating , setRating]=useState(0);
  const [adding,setAdding]=useState(movielist) 
  
  return (
    <>
      <TopNavbar setSearch={setSearch} setRating={setRating} />
     <div className='searched' style={{display:'flex' , justifyContent:'center'}}>
     <Fitlered  search={search}   rating={rating}  adding={adding} />
     
     
     </div>
     <hr/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movies' element={<Movies adding={adding}/>}/>
        <Route path='/Movies/:id' element={<SingleMovie/>}/>
        <Route path='/TVshow' element={<TVshow/>}/>

        </Routes>


     
     
     
     <Add   adding={adding} setAdding={setAdding} />

    </>
  )
}

export default App
