import React from "react"
import ListItems from ".././ListItems/ListItems"
import Button from 'react-bootstrap/Button'
import FormAction from '../Form/Form'
export const OptionLists = (props)=>
    (
      <div>
      
      <ul className = "widget" > 
           
         
          <div>

           <Button className="big-button btn-info" 
           
             disabled= {!props.hasOption}
            onClick={props.pickIt}> Pick It
            </Button>
         
          </div>

      
       
        <div className = "widget-header">
          <span className="widget-header__title">Your Options</span>

          <button 
          onClick = {props.handleRemoveItemsAll}
          className = "medium-button medium-button--link"
          >           
                Remove All
          </button> 
        </div>  
        <div className = "widget-body">
          {props.items.length === 0 && <p className='widget-body__title' >Add items to get started</p>} 
          
          {props.items.map((item, index)=> ( 
            
            <ListItems

             key={item} 
            text = {item } 
            index ={index + 1}
            deleteIndividualHandler = {props.deleteIndividualHandler}/> 
            
            )    ) }

          <FormAction click = {props.click} />
        </div>
    
      </ul>  
  
  </div>
   
   )
  