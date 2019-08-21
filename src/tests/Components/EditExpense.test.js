import React from 'react';
import {EditExpense } from '../../Components/EditExpense'
import { shallow} from 'enzyme';
import expenses from '../dummyExpenses/dummyExpenses'

let   mockEditExpenseGenerator, 
    mockRemoveExpenseGenerator,
    mockId,
    mockHistory,
    wrapper

beforeEach(()=>{
    mockEditExpenseGenerator = jest.fn();
    mockRemoveExpenseGenerator = jest.fn();
    mockId = {      
            params:{
                id: expenses[0].id
            }
        };

    mockHistory = {push: jest.fn()}    
    wrapper = shallow(
   
        <EditExpense 
    expenses = {expenses} 
    editExpenseGenerator = {mockEditExpenseGenerator}
    removeExpenseGenerator = {mockRemoveExpenseGenerator}    
    history = {mockHistory}
    match = {mockId}
        />)
})

test ('should render edit expense component ',()=>{    


    expect (wrapper).toMatchSnapshot()   
      
})

test ('should render edit expense component when edit expense and dispatch it ',()=>{
 
      wrapper.find('ExpenseForm').prop('onSubmitPassedUp')(expenses[0])
    expect (mockEditExpenseGenerator).toHaveBeenLastCalledWith(expenses[0])

    
      
})

test ('should render edit expense component when edit expense and dispatch it ',()=>{
 
    wrapper.find('button').simulate('click');
  expect (mockRemoveExpenseGenerator).toHaveBeenLastCalledWith({ id: expenses[0].id})
expect (mockHistory.push).toHaveBeenLastCalledWith('/')
  
    
})