import React from 'react';
import { BrowserRouter , Route, Switch} from "react-router-dom";
import Header from './Components/Header'
import DashBoard from './Components/DashBoard'
import WrapperAddExpense from './Components/AddExpense'
import WrapperEditExpense from './Components/EditExpense'
import  ErrorPage from './Components/ErrorPage'
import {addExpenseGenerator, editExpenseGenerator} from './actions/expenses'
import{filterTextGenerator} from './actions/filters'
// ========================== redux 
import initStore from './store/storeConfig'
// import{ addExpenseGenerator} from './actions/expenses'
// import getVisibleExpense from './visibleExpenses/visibleExpenses'

// ==============react redux 
import { Provider } from 'react-redux'

// init the store

const store = initStore();
window.store = store; 
// add subscribe event listener
store.subscribe(()=>{
    const state = store.getState();
    console.log(state)
// console.log( getVisibleExpense(state.expenses, state.filters));
});


  
// add expenses
store.dispatch(addExpenseGenerator(
    
        {
            description: 'water bill',
            amount: 50000,
            timePayAt: 1000 
        }
   
    )
);

// store.dispatch(editExpenseGenerator({id: "6273c927-697f-4267-9f42-390fcd4c282d",description: 'dog', amount : 12345}))
// store.dispatch(addExpenseGenerator(
    
//     {
//         description: 'gas bill',
//         amount: 70000,
//         timePayAt: 300 
//     }

// )
// );

  // store.dispatch( filterTextGenerator({text: 'G'}));

  console.log('yooo')

 






const App= ()=>{
  
  
  
  return (

        <Provider store = {store}>

           <BrowserRouter>          
              <div>
                  <Header/>
                  <Switch>   
                      <Route path='/' component={DashBoard} exact = {true}/>
                      <Route path='/addExpense' component={WrapperAddExpense} />                     
                      <Route path='/editExpense/:id' component={WrapperEditExpense}/>
                      <Route component={ErrorPage}/>
                  </Switch>
              </div>  
            </BrowserRouter>  

        </Provider>

  )
}








// class App extends React.Component{
 
  
//   render (){   
//     return(

//       <div>
//         this is div
//       </div>
//     )
      
    
    
    
//   }
// }











export default App;






