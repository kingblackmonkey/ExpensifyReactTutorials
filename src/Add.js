




// const add = (a, b) => a + b;

// test('add to number equal to 6',()=>{
//   const result = add(4,2);
//   expect (result).toBe (6);
    
// })

// const greetting = (name = "Anonymous") => `Hello ${name}`


// test ('gretting guess', ()=>{
//     expect (greetting('Hien')).toBe('Hello Hien')
// })


// test ('gretting ananymous guess', ()=>{
//     expect (greetting()).toBe('Hello Anonymous')
// })

const moment =  require('moment')
const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate})=>{
  return   expenses.filter((expense)=>{
     
        const startDateMatch = startDate ? startDate.isSameOrBefore(expense.timePayAt, 'day'): true;
       console.log(startDateMatch);
        const endDateMatch =  endDate ? endDate.isSameOrAfter(expense.timePayAt, 'day'): true;
       
           
    //  match every letter in the string, empty string still matches
         const  patt = new RegExp(`${text}`,'i');
                     
     
       const textMatch =  patt.test(expense.description);
  console.log(startDateMatch, endDateMatch, textMatch )  
            return startDateMatch && endDateMatch && textMatch         

    }).sort((a,b)=>{
        if(sortBy === 'Date'){
            // if "Date" we sort from low time stamp  to  high time stamp
            // this is like new item added is alway at last position
            // if one expense sort jst return one expense 
          return  a.timePayAt > b.timePayAt ? 1 : -1
        }else{
             // if 'Amount' we sort from high to low
           return a.amount > b.amount ? -1 : 1  
        }
    });

}


