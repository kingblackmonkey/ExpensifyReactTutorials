import React from "react"
export const Header = (props)=>
    (
    <div className = 'header'> 
       <h1 className= 'header__title' style = {props.style}>{props.title}</h1>
       <h4 className="header__sub-title">{props.subTitle}</h4>       
     </div>
   
   )


Header.defaultProps = {title: "Big APPPP"};