import React from 'react';
import { shallow} from 'enzyme';
import DashBoard from '../../Components/DashBoard'

test (' should render Dashboard component', ()=>{
    const wrapper = shallow(<DashBoard />)
    expect (wrapper).toMatchSnapshot()
})