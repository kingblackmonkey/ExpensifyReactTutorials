import React from 'react';
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import { addExpenseGenerator} from '.././actions/expenses'



export const AddExpense = (props)=>(
  <div>
      <h1> Add Expense Page</h1>

      <ExpenseForm 
      onSubmitPassedUp = {(expense)=>{
        //  props.dispatch(addExpenseGenerator(expense))
      props.addExpenseGenerator(expense)

         props.history.push('/')
      }}
      />

  </div>
)

// const mapDispatchToProps = (dispatch)=>{
//   return {
//     onSubmit : (expense) => {return dispatch(addExpenseGenerator(expense))}
//   }
// }


const mapDispatchToProps = {addExpenseGenerator}

export default connect(null, mapDispatchToProps)(AddExpense);
