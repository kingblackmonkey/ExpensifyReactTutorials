import React from 'react';
import { shallow} from 'enzyme';
import ListExpenseItem from '../../Components/ListExpenseItem'
import expenses from '../dummyExpenses/dummyExpenses'
test ('should render list expense  item component  ',()=>{
   const wrapper = shallow(
   <ListExpenseItem 
    {...expenses[0]}
   />)   
   expect (wrapper).toMatchSnapshot()
})