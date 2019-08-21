import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../Components/ExpenseForm'
import expenses from '../dummyExpenses/dummyExpenses'
import moment from 'moment'
test ('should render expense form component', ()=>{
    const wrapper = shallow ( <ExpenseForm  />)
    expect (wrapper).toMatchSnapshot();
})

test ('should render expense form component with one expense data', ()=>{
    const wrapper = shallow ( <ExpenseForm expense = {expenses[0]} />)
    expect (wrapper).toMatchSnapshot();
})



test ('should render expense form component with error message when submitting form with no amount or description', ()=>{
    const wrapper = shallow ( <ExpenseForm  />)
//    take snap shot before submit event with default state
    expect (wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault : ()=>{}

    });

    
    expect(wrapper.state().error).toBeTruthy();
    // take a snap shot  after event happpend with new state
    // with error property set to true
    // then the form component will render error message
    expect (wrapper).toMatchSnapshot()
})

test ('should render expense form component with description value when state has set description property after input change event', ()=>{
    const wrapper = shallow ( <ExpenseForm  />)

   
    wrapper.find('input').at(0).simulate('change', {
       target: {value: 'Testing Description'}

    });

    
    expect(wrapper.state().description.length).toBeGreaterThan(0);
    // take a snap shot  after event happpend with new state
    // with decription property set to new value 
    // then the form component will render input with new text value
    expect (wrapper).toMatchSnapshot()
})



test ('should render expense form component with note value when state has set note property after textarea change event', ()=>{
    const wrapper = shallow ( <ExpenseForm  />)

   
    wrapper.find('textarea').simulate('change', {
       target: {value: 'Testing Note'}

    });

    
    expect(wrapper.state().note.length).toBeGreaterThan(0);
    // take a snap shot  after event happpend with new state
    // with noteproperty set to new value 
    // then the form component will render text area with new text value
    expect (wrapper).toMatchSnapshot()
})

test ('should render expense form component with amount  value when state has set amount  property value after amount input field change', ()=>{
    const wrapper = shallow ( <ExpenseForm  />)

   const value = '123.34'
    wrapper.find('input').at(1).simulate('change', {
       target: {value}

    });

    
    expect(wrapper.state().amount).toBe(value);
    // take a snap shot  after event happpend with new state
    // with amount  property set to new value 
    // then the form component will render input with new text value
    expect (wrapper).toMatchSnapshot()
})

test ('should not render expense form component with invalid amount which not change the state', ()=>{
    const wrapper = shallow ( <ExpenseForm  />)

   const value = '123.3490'
    wrapper.find('input').at(1).simulate('change', {
       target: {value}

    });

    
    expect(wrapper.state().amount).toBe('');
   
})

test ('pass in mock function and expense data and expect form component to pass up data with correct argument ', ()=>{
 

    const myMock = jest.fn();   

    const wrapper = shallow ( <ExpenseForm   onSubmitPassedUp = {myMock} expense = {expenses[0]} />)
    wrapper.find('form').simulate('submit', {preventDefault: ()=>{}})
    expect(myMock).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        timePayAt: expenses[0].timePayAt
    })
})

test (' expect single date picker component in form component to change the state of time pay at property ', ()=>{
 

    const timePayAt = moment();

    const wrapper = shallow ( <ExpenseForm    />)            
    wrapper.find('SingleDatePicker').prop('onDateChange')(timePayAt)
    expect(wrapper.state().timePayAt).toEqual(timePayAt)
})

test (' expect single date picker component in form component to change the state of focus property ', ()=>{
 

  
    const wrapper = shallow ( <ExpenseForm    />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true})
    expect(wrapper.state().focused).toBe(true)
})