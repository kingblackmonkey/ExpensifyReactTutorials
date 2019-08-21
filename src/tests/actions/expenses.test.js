import {addExpenseGenerator,
    removeExpenseGenerator,
    editExpenseGenerator
} from '../../actions/expenses'

test ('should set up remove expense action object ',()=>{
 const removeAction = removeExpenseGenerator({id: '123asd'});
 expect (removeAction).toEqual({
     type: "REMOVE_EXPENSE",
     id: '123asd'
 })
});

test ('should set up edit expense action object ',()=>{
    const removeAction = editExpenseGenerator(
        {
            id: '456',
            description: "gas",
            amount: 5000,
            note:"pay for gas"
        }
        
        );
    expect (removeAction).toEqual(
    {
        type: "EDIT_EXPENSE",
        expense:{
            id: '456',
            description:'gas',
            amount: 5000,
            note:"pay for gas"
        }
    })
   });

test('should set up add expense action object',()=>{
    const action = {
        description: "power",
        amount: 15000,
        note: 'my electricity bill',
        timePayAt: 1000
    }


    expect(addExpenseGenerator(action)).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
              ...action,
              id: expect.any(String)
            }
        }
    )
})

test('should set up add expense action object based on default value',()=>{
 


    expect(addExpenseGenerator()).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                description : '',   
                note :'' ,     
                amount : 0,     
                timePayAt :0 ,
                id: expect.any(String)
            }
        }
    )
})