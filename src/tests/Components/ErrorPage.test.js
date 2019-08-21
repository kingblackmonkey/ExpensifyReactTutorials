import React from 'react';
import { shallow} from 'enzyme';
import ErrorPage from '../../Components/ErrorPage'

test (' should render Error component', ()=>{
    const wrapper = shallow(<ErrorPage />)
    expect (wrapper).toMatchSnapshot()
})