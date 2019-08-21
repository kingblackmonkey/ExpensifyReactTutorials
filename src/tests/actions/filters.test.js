import {filterStartDateGenerator, filterEndDateGenerator, 
    filterTextGenerator,
    filterAmountGenerator,
    filterDateGenerator 

} from "../../actions/filters"

import moment from 'moment'
test ('shoud set up start date object', ()=>{
    
    expect (filterStartDateGenerator({startDate : moment(0)})).toEqual({
        type: "SET_START_DATE",
        filter:{
            startDate: moment(0)
        }
    })
})

test ('shoud set up end date object', ()=>{
    
    expect (filterEndDateGenerator({endDate : moment(0)})).toEqual({
        type: "SET_END_DATE",
        filter:{
            endDate: moment(0)
        }
    })
})



test ('shoud set up text object with no text', ()=>{
    
    expect (filterTextGenerator()).toEqual({
        type: "SET_TEXT",
        filter:{
            text: ""
        }
        
    })
})

test ('shoud set up text object with text ', ()=>{
    
    expect (filterTextGenerator({text: 'water bill'})).toEqual({
        type: "SET_TEXT",
        filter:{
            text: "water bill"
        }
        
    })
})


test ('shoud set up filter amount object', ()=>{
    
    expect (    filterAmountGenerator ()).toEqual({
        type: "SET_AMOUNT",
        filter:{
            sortBy: "Amount"
        }
        
    })
})

test ('shoud set up filter date object', ()=>{
    
    expect (   filterDateGenerator  ()).toEqual({
        type: "SET_DATE",
        filter:{
            sortBy: "Date"
        }
        
    })
})