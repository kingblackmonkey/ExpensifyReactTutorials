import React from 'react';
import { shallow} from 'enzyme';
import {ListExpense } from '../../Components/ListExpense'
import expenses from '../../tests/dummyExpenses/dummyExpenses'
test ('should render list expense  component ',()=>{
   const wrapper = shallow(<ListExpense expenses = {expenses}/>)
   expect (wrapper).toMatchSnapshot()
})


test ('should render waring test of no expenses ',()=>{
   const wrapper = shallow(<ListExpense expenses = {[]}/>)
   expect (wrapper).toMatchSnapshot()
})