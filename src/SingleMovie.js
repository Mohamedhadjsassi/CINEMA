import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import movielist from './Movielist';

function SingleMovie() {
  const params = useParams();
  const navigate=useNavigate();
  const [single, setSingle] = useState(null);
  
  useEffect(() => {
    const foundMovie = movielist.find(movie => movie.id == parseInt(params.id));
    {setSingle(foundMovie);
    console.log(foundMovie);}
  }, [params.id]);
  console.log(params , single);
  return (
    <div>
      {single && 
      <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , gap:'10px'}}>

      <h1>{single.title}</h1>
      <h4 style={{color:'white', fontSize:'15px'}}>{single.desc}</h4>
      


      
<iframe width="1000" height="500" src={`https://www.youtube.com/embed/${single?.trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<button  onClick={()=>{navigate('/Movies')}}  style={{width:"300px", height:"50px",  borderRadius:"15px", marginBottom:"100px"}} >return to Movies </button>



   
      </div>
      
     
      }


    </div>
  );
}

export default SingleMovie;
