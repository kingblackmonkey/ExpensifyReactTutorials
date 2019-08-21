import React from 'react';
import {NavLink} from 'react-router-dom';
const Header= ()=>{
  
  
    return (
   
    <header>
        <h1>Expense App</h1>
        <div>
            <NavLink  to="/"  exact = {true}  activeClassName="selected" >               
               DashBorad           
            </NavLink>
        </div>
       
        <div>
            <NavLink to={`/addExpense`} activeClassName="selected">           
               
         Add Expense
                 
            </NavLink>
        </div>
     
       
            
    </header>
  
    )
  }

  export default Header;