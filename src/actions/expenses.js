import uuidv4 from "uuid/v4"

// add-expense generator
export const addExpenseGenerator = (   
    {   
         description = '',   
          note = '' ,     
           amount = 0,     
            timePayAt = 0    
    } = {} )=>(   
    
        {
        type:"ADD_EXPENSE",
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            timePayAt 
        }
       
    }
);

// remove-expense generator 
export const removeExpenseGenerator = ({id} = {})=>(
    {
        type: "REMOVE_EXPENSE",
        id
    }
);
   
// edit-expense generator
export const editExpenseGenerator = ({id, description, amount, note})=>(
    {
        type: "EDIT_EXPENSE",
        expense:{
            id,
            description,
            amount,
            note
        }
    }
);