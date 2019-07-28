import React from "react"

 const  ListItems =(props)=>
    (
      <li className = "widget-body__item">
        <div className="widget-body__item-text">{props.index}. {props.text}</div>
        <button
        className = "medium-button medium-button--link"
        onClick={(e)=>{props.deleteIndividualHandler(props.text)}}>Remove</button>
      </li>
   
    )


export default ListItems