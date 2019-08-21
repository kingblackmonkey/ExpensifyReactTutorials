

import React from 'react';
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

window.moment = moment

class ExpenseForm  extends React.Component{
  // using ternary operator to set values for state
  // Expense component is being used in two component Add expense comp and
  // edit expense component
  // if it is in AddExpense component then no edit expense object
  // then default value will be string so user can enter values
  // if it is in EditExpense comp then there is edit expese object being  
  // passed down then we set values according to these values in edit 
  // object expense

  // the benefit of using state in this from component is that
  // you can validate user input in real time and transform input value in 
  // state with correct format  before you diispatch to redux

  // we dont dispatch add expense or remove expense in this form component
  // beacause we will resuse this component in edit component and in addexpense 
  // component. Each component will dispatch different action
  // if we dispatch add expense in this form compnent then we can not reuse this form
  // component to dispatch edit expense option 
    state = {
      description : this.props.expense? this.props.expense.description: '',
      amount: this.props.expense? (this.props.expense.amount / 100).toString(): '' ,
      note : this.props.expense? this.props.expense.note :'',
      timePayAt :this.props.expense?  moment( this.props.expense.timePayAt):moment(),
      focused : false,
      error: false
    }


    onchangeDescription = (e)=>{
      // console.log(e.target.value)
      const value = e.target.value ;
      this.setState ((state)=>{
        return {
          description: value
        }
      })
     
    }
  
    onAmountChange = (e)=>{
      const amount = e.target.value;
    
  
  //  set !amount so we can set state back to empty string so we can delete input number
  // when we delete number input feild it will be empty string and we make it true
  // by flipping it and set state on amount value to empty string so we can update number input
  // field with empty string as after we delete all value on the  input field
      if(!amount || /^\d{1,}(\.\d{0,2})?$/.test(amount)){
         
        this.setState((state)=>{
            return {
              amount
            }
        })
      }
    }
  
    onNoteChange = (e)=>{
      const value = e.target.value;
      this.setState ((state)=>{
        return {
          note: value
        }
      })
    }
  
    onDateChangeHandler = (timePayAt)=>{
     
     if(timePayAt){
         this.setState(()=>(
        {
          timePayAt
        }
      ))
     }
    
    }
  
    onFocusChangeHandler =({ focused })=>{
          this.setState(()=>(
            {
              focused
            }
          ))
    }
  
    onSubmitHandler = (e)=>{
        e.preventDefault();
      if(!this.state.description || !this.state.amount) {
        this.setState(()=>{
            return {
              error: true
            }
        });
      }else{

        this.props.onSubmitPassedUp(
          {
             description: this.state.description,
             amount: parseFloat(this.state.amount) * 100,
             note: this.state.note,
             timePayAt: this.state.timePayAt.valueOf()
          }
      ) 
      
      }
  
    }
    render(){
   
      return(  
      <div>
       
          {this.state.error && <p>Please Enter Description and Amount</p>}
          <form onSubmit = {this.onSubmitHandler}>
              <input 
              type='text' 
              value = {this.state.description} 
              autoFocus 
              placeholder='Description'
              onChange= {this.onchangeDescription}
              />
              
              <input 
              type='text' 
              placeholder = 'Amount'
              value = {this.state.amount}
              onChange = {this.onAmountChange}/> 
              
              
              
              <textarea 
              placeholder=' Note ' 
              value = {this.state.note}
              onChange = {this.onNoteChange}/> 
            <SingleDatePicker
                  date={this.state.timePayAt} // momentPropTypes.momentObj or null
                  onDateChange={this.onDateChangeHandler} // PropTypes.func.isRequired
                  focused={this.state.focused} // PropTypes.bool
                  onFocusChange={this.onFocusChangeHandler} // PropTypes.func.isRequired
                  numberOfMonths = {1}
                  isOutsideRange = {(day)=>{return false}}
                  id="your_unique_id" // PropTypes.string.isRequired,
                  />
  
  
  
              <button> Add Expense</button>
          </form>
  
  
      </div>
      )
    }
  
    
  
        
      
    }
  
    export default ExpenseForm;  
  