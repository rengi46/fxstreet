import React, { useEffect } from 'react'
import "./NF.css"
import Filter from "../../assets/img/Filter.png"

export const NavAndFilter = ({actived , setActived,setModal,modal}) => {
    
    const handelClick = (e)=>{
        setActived(e.target.innerHTML.toLowerCase());
    }
    let clasLatest = "selector latest"
    let clasPopular = "selector popular"
    if(actived === "latest"){
        clasLatest += " activate"
    }
    else if(actived === "popular"){
        clasPopular += " activate"
    }

    const filterModal = ()=>{
        setModal(!modal)
    }
  return (
    <div className='backNF'>
        <div onClick={handelClick} className={clasLatest}>Latest</div>
        <div onClick={handelClick} className={clasPopular}>Popular</div>
        <div className='filter' onClick={filterModal}>
            <img src={Filter}/>
        </div>
    </div>
  )
}
