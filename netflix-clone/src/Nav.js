import React, { useState, useEffect } from 'react'
import './Nav.css';

function Nav(){
    const [show,handleShow]=useState(false);
    useEffect(() =>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100){
                handleShow(true);

            } else handleShow(false);

        });
        return()=>{
            window.removeEventListener("scroll",null);
        };


    },[]);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='nav_logo'
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix Logo"/>
            
        
        </div>
    )
}
export default Nav