import React from 'react';
import {ExpenseFilters } from '../../Components/ExpenseFIlters'
import { shallow} from 'enzyme';
import {filters, alternativeFilters} from '../dummyFilters/dummyFilters'


let wrapper,  mockFilterTextGenerator,
mockFilterAmountGenerator,  mockFilterDateGenerator,
mockFilterStartDateGenerator, mockFilterEndDateGenerator
;


beforeEach(()=>{
    mockFilterTextGenerator = jest.fn();
  mockFilterAmountGenerator = jest.fn();
    mockFilterDateGenerator = jest.fn();
   mockFilterStartDateGenerator = jest.fn();
 mockFilterEndDateGenerator = jest.fn();

    wrapper = shallow(
   <ExpenseFilters 
   filters = {filters}
   filterTextGenerator = {mockFilterTextGenerator}
   filterAmountGenerator = {mockFilterAmountGenerator}
   filterDateGenerator = {mockFilterDateGenerator}
   filterStartDateGenerator = {mockFilterStartDateGenerator}
   filterEndDateGenerator = {mockFilterEndDateGenerator}
   
   />
   
   )
})


test ('render filters component ', ()=>{


   expect (wrapper).toMatchSnapshot();

})


test ('render filters component with alternative filters data', ()=>{
  // because we did use one set up for many test cases
// we need to change props value for filters prop of ExpenseFilter before pass it in.
// we change it before we test
  wrapper.setProps({ filters: alternativeFilters });
  expect (wrapper).toMatchSnapshot();

})

test (' filters component  with change event and dispatch with correct text filter', ()=>{
const value = '';
wrapper.find('input').simulate('change',{target: {value}} );

  expect ( mockFilterTextGenerator).toHaveBeenLastCalledWith({text: value});

})



test (' filters component  with change event and dispatch with correct amount filter ', ()=>{
  const value = 'Amount';
  wrapper.find('select').simulate('change',{target: {value}} );
  
    expect ( mockFilterAmountGenerator).toHaveBeenCalled();
  
  })
  test (' filters component  with change event and dispatch with correct date filter ', ()=>{
    const value = 'Date';
    wrapper.find('select').simulate('change',{target: {value}} );
    
      expect ( mockFilterDateGenerator).toHaveBeenCalled();
    
    })

    test (' filters component  with day change event and set state to new start and end date; and dispatch them  ', ()=>{
      const {startDate , endDate} = alternativeFilters;
      wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate} );
      
        expect ( wrapper.state('startDate')).toEqual(startDate);
        expect ( wrapper.state('endDate')).toEqual(endDate);
         expect (mockFilterStartDateGenerator).toHaveBeenLastCalledWith({startDate});    
      })
  