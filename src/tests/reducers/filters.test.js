import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test (' set up default filters',()=>{
    const filterDefault = {
        text: '',
        sortBy: 'Date',  
        startDate: moment().startOf('month'),  
        endDate: moment().endOf('month'), 
           
    }
    expect(filtersReducer (undefined, {type: "@@INIT"})).toEqual(filterDefault)
})


test (' set up text filter',()=>{
  
const text = 'dog care';
    const action = {
        type: "SET_TEXT",
        filter:{
            text
        }
    }

    const currentState = filtersReducer (undefined, {type: "@@INIT"})
    const newstate = filtersReducer (currentState, action );

    expect(newstate.text).toBe(text)
})

test ('set up sort by filter to date when switching from amount to date filter ', ()=>{
   
    const action = {type: 'SET_DATE', filter:{sortBy: 'Date'}}
  const  currentState= {
    text: '',
    sortBy: 'Amount',  
    startDate: moment().startOf('month'),  
    endDate: moment().endOf('month'),
  }

  const newstate = filtersReducer (currentState, action )
    expect (newstate.sortBy).toBe('Date')
})

test (' set up sort by amount filter',()=>{
  

    const action = {
        type: "SET_AMOUNT",
        filter:{
            sortBy : 'Amount'
        }
    }

    const currentState = filtersReducer (undefined, {type: "@@INIT"})
    const newstate = filtersReducer (currentState, action );

    expect(newstate.sortBy).toBe('Amount')
})

test (' set up start date filter',()=>{
  

    const action = {
        type: "SET_START_DATE",
        filter:{
            startDate: moment(1000)
        }
    }

    const currentState = filtersReducer (undefined, {type: "@@INIT"})
    const newstate = filtersReducer (currentState, action );

    expect(newstate.startDate).toEqual( moment(1000))
})

test (' set up end date filter',()=>{
  

    const action = {
        type: "SET_END_DATE",
        filter:{
            endDate: moment(2000)
        }
    }

    const currentState = filtersReducer (undefined, {type: "@@INIT"})
    const newState = filtersReducer (currentState, action );

    expect(newState.endDate).toEqual( moment(2000))
})