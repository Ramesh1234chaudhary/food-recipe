import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import IndexContainer from './IndexContainer'
const Meal = () => {
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem]=useState();
     const[show,setShow]=useState(false);
    const [search,setSearch]=useState();

    useEffect(()=>{
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.meals);
        setItem(data.meals);
       setShow(true)
    })
    },[url])

    const setIndex=(alpha)=>{
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }
     
     const serchreciepe=(evt)=>{
      if(evt.key=="Enter"){
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      }
     }
   

  return (
    <>
    <div className='main'>
    <div className='heading'> 
        <h1>Search Your Food Recipe</h1>
        <h4>Lorem,fhgjkj wth mfsx jkksg gjjrsd fhgkjs.
        dhgiym hkydds kednfj ktrdx gkkj</h4>
    </div>
       <div className='searchBox'>
        <input type="search" className='search-bar' onKeyUp={serchreciepe}  value={search} onChange={(e)=>setSearch(e.target.value)}/>
       </div>
       <div className='container'>
        {
            show? <MealItem data={item}/>:"not found"
        }
        
       </div>
       <div className="index">
          <IndexContainer alphaindex={(alpha)=>setIndex(alpha)}/>
       </div>
    </div>
    </>
  )
}

export default Meal
