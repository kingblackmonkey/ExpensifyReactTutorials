
import React from 'react';
import { shallow} from 'enzyme';
import Header from '../../Components/Header'

const wrapper = shallow(<Header />);


test ('should render header component', ()=>{
    expect (wrapper).toMatchSnapshot()
    
})