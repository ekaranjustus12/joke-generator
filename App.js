import './App.css';
import {useEffect, useState} from 'react';


function App(){
 const [joke,setJoke]=useState();
 useEffect(()=>{
 getJoke();
 },[]);
 const getJoke = async ()=>{
   const response= await fetch('https://type.fit/api/quotes');
   const data = await response.json();
   console.log(data);
   let random =Math.floor(Math.random()*data.length);
   setJoke(data[random]);
 };
 
   return(
    
     <div className='App'
     style={{height:'80%',width:'400px',background:'beige'}}>
    <div>
      <h1 style={{fontSize:'25px'}}>Joke</h1>
      <p style={{fontSize:'20px',fontWeight:'300'}}>{joke.text}</p>
      <p style={{fontSize:'15px',fontWeight:'300'}}>{joke.author}</p>
    </div>
    
    <button onClick={getJoke}style={{background:'lightblue',border:'1px solid'}}>Fetch</button>
     </div>
    
   )
     
    
  
}

export default App;
