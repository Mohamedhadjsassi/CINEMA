import React, { useState } from 'react'
import TopNavbar from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Movies from './Movies';
import Add from './Add';
import Fitlered from './Filtered';
import movielist from './Movielist';


function App() {
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
      <div className="cards">
        <Movies adding={adding} />
      </div>
     <Add   adding={adding} setAdding={setAdding} />

    </>
  )
}

export default App
