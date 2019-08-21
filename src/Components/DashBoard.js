import React from 'react';
import WrapperListExpense  from './ListExpense'
import WrapperExpenseFilters from './ExpenseFIlters'


const DashBoard = ()=>{
    

    return(
   
        <div>
             <p>This Is Your Expenses</p>
             <WrapperExpenseFilters />
             <WrapperListExpense  />



        </div>
      
    )
  }
  
  export default DashBoard;