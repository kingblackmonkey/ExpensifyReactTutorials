import React from 'react'


import {Link} from 'react-router-dom'
const ListExpenseItem = ({id,description, amount,timePayAt,dispatch})=>(
    <div>
        <li >
        <Link  to= {`/editExpense/${id}`}> <span>{description}</span></Link> <span>{amount}</span> <span>{timePayAt}</span> 
                           
        </li>
   </div>
)


export default ListExpenseItem;