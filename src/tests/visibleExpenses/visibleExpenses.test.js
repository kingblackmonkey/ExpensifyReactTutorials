import getVisibleExpense from '../../visibleExpenses/visibleExpenses'
import moment from 'moment'
import expenses from '../dummyExpenses/dummyExpenses'

test ('should return expenses based on text filter',()=>{
    const filters =  {
                    text:'e', 
                    sortBy: 'Date', 
                    startDate: undefined,
                    endDate: undefined 
                    }
    expect ( getVisibleExpense( expenses, filters)  ).toEqual(
         [ expenses[0] ] 
         )
})


test ('should return expenses based on start date filter',()=>{
    const filters =  {
                    text:'', 
                    sortBy: 'Date', 
                    startDate:moment(0),
                    endDate: undefined 
                    }
    expect ( getVisibleExpense( expenses, filters)  ).toEqual(
         [ expenses[0]  ] 
         )
})



// filter by end date
test ('should return expenses based on enddate filter',()=>{
    const filters =  {
                    text:'', 
                    sortBy: 'Date', 
                    startDate:undefined,
                    endDate: moment()
                    }
    expect ( getVisibleExpense( expenses, filters)  ).toEqual(
         [ expenses[1], expenses[0]   ] 
         )
})

// filter by amount
test ('should return expenses based on amount filter',()=>{
    const filters =  {
                    text:'', 
                    sortBy: 'Amount', 
                    startDate:undefined,
                    endDate: undefined
                    }
    expect ( getVisibleExpense( expenses, filters)  ).toEqual(
         [ expenses[0], expenses[1]   ] 
         )
})

// filter by date
test ('should return expenses based on Date filter',()=>{
    const filters =  {
                    text:'', 
                    sortBy: 'Date', 
                    startDate:undefined,
                    endDate: undefined
                    }
    expect ( getVisibleExpense( expenses, filters)  ).toEqual(
         [ expenses[1], expenses[0]   ] 
         )
})