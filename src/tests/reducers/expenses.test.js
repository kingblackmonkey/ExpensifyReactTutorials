import  expenseReducer  from '../../reducers/expense'
import expenses from '../dummyExpenses/dummyExpenses'
import moment from 'moment'
test ('should return default empty array for expenses', ()=>{
    const action = {
        type: '@@INIT'
    }
    expect (  expenseReducer (undefined, action)).toEqual([])
})


test ('should remove expense from  expense array based on id  ', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id : expenses[0].id
    }


    expect (  expenseReducer (expenses, action)).toEqual([expenses[1]])
})


test ('should not remove expense from  expense array based on false id  ', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id : '-2'
    }


    expect (  expenseReducer (expenses, action)).toEqual(expenses)
})

test ('should edit expense from  expense array based on  id  ', ()=>{
    const expense = {
        id: expenses[0].id,
        description: 'gas',
        amount: 12300,
        note: '',
        timePayAt: moment(1000).valueOf(),
    }
    
    const action = {
        type: 'EDIT_EXPENSE',
        expense
    }

    

    expect (  expenseReducer (expenses, action)).toEqual([expense,expenses[1] ])
})


test ('should not edit expense from  expense array based on false  id  ', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        expense:{
            
                id: -12,
                description: 'gas',
                amount: 12300,
                note: '',
                timePayAt: moment(1000).valueOf(),
            
        }
    }


    expect (  expenseReducer (expenses, action)).toEqual(expenses )
})


test ('should add expense to  expense array   ', ()=>{
   
    const expense  = {
            
        id: 4,
        description: 'tedyy grooming',
        amount: 67800,
        note: '',
        timePayAt: moment(1000).valueOf(),
    
    }
  
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }




    expect (  expenseReducer (expenses, action)).toEqual([...expenses, expense ])
})