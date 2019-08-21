import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {editExpenseGenerator,removeExpenseGenerator} from '../actions/expenses'




// this named export here is for testing 
export const EditExpense= (props)=> {

    return (
    <div>
        <p>This is edit page</p>
        
        <ExpenseForm 
        
            expense = {props.expenses.find((expense)=>{
                return props.match.params.id === expense.id
           })} 
           
           
           onSubmitPassedUp={(expense)=>{
        //    dispatch 
            props.editExpenseGenerator({ ...props.expense ,...expense})

        // redirect
           props.history.push('/');
        //    console.log(expense)
        }}/>

        <button  onClick = {()=>{
            // dispatch to remove expense
            props.removeExpenseGenerator({id : props.match.params.id });
            // redirect
            props.history.push('/');

        }}>
            remove
        </button>
        
    </div>
    )
} 
    




const mapStateToProps = (state)=>{
    
       
          return {
           expenses:    state.expenses
        }
}

const mapDispatchToProps = {editExpenseGenerator, removeExpenseGenerator }
   
export default connect(mapStateToProps, mapDispatchToProps)(EditExpense) ; 
