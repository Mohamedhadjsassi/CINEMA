import React, { useRef, useState } from 'react'
import movielist from './Movielist'

function Add({adding , setAdding}) {

  const [display , setDispaly]=useState(false)
  
  
  const treference =useRef()  
  const Dreference =useRef()
  const Ireference =useRef()
  const Rreference =useRef()

  console.log(adding);

  return (
    <div style={{display:'flex',justifyContent:'center' }}>
       <button style={{backgroundColor:'black',borderRadius:'5px', color:'white',width:'200px' ,height:'50px'}} 
       onClick={()=>{setDispaly(!display)}}
       >Add a movie</button> 
   
        {display ? <div style={{display:'flex' , flexDirection:'column' , marginLeft:'50px'}}>   

       <div > <h6>Title</h6> <input type='text'  ref={treference}   />   </div>
       <div>  <h6>description</h6> <input type='text'   ref={Dreference}/>  </div>
       <div>  <h6>rating</h6>  <input type='number'  ref={Rreference} />  </div>
       <div>   <h6>image</h6> <input type='text'  ref={Ireference} />   </div>
        
       <button style={{backgroundColor:'black',borderRadius:'5px', color:'white',width:'200px' ,height:'50px', marginTop:"50px"}} 
       onClick={()=>{setAdding([...adding,{Image:Ireference.current.value ,title:treference.current.value  ,desc: Dreference.current.value , rate:Rreference.current.value }])}}
       >Add it</button> 
        
        
        
       



        
        </div>
        
        : null}
   
    </div>

    
  )
}

export default Add