import React from 'react';
import {AddExpense } from '../../Components/AddExpense'
import { shallow} from 'enzyme';
import expenses from '../dummyExpenses/dummyExpenses'


// jest give life cycle method to  run each time before each test
// we can set up one test case once  and reuse it if you so we can just write assertion 
// it works if you finds you repeatedly set up the test case
// there is other life cycle methods too
// it is global 
// this global function will run once before each case

let  mockAddExpenseGenerator , mockHistory, wrapper 

beforeEach(()=>{
     mockAddExpenseGenerator = jest.fn();   
     mockHistory = {push:  jest.fn()}    
 
    wrapper = shallow(<AddExpense 
        addExpenseGenerator = {mockAddExpenseGenerator} 
        history = {mockHistory}

        />)
})
test ('should render add expense component ',()=>{
 
       
    //   wrapper.find('ExpenseForm').prop('onSubmitPassedUp')(expenses[0])

      expect (wrapper).toMatchSnapshot()   
      
})



test ('should render add expense component and dispatch and add expense',()=>{

       
     wrapper.find('ExpenseForm').prop('onSubmitPassedUp')(expenses[0])

      expect ( mockAddExpenseGenerator).toHaveBeenCalledWith(expenses[0])   
      expect ( mockHistory.push).toHaveBeenCalledWith('/')  
})