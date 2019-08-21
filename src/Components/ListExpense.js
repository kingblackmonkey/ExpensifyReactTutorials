import React from 'react'
import {connect} from 'react-redux'
import WrapperListExpenseItem from './ListExpenseItem'
import getVisibleExpense from '.././visibleExpenses/visibleExpenses'

// unconnected component
// will get props from the connect  component (higher order component)
export const ListExpense = (props)=>{
    
    return (
            <div>
               <ul>
                      

                   {

                    props.expenses.length === 0 ? (
                    <p>There is No Expenses</p>
                    
                    
                    ) :(
                        props.expenses.map((expense)=>{
                           
                            return(
                                    <WrapperListExpenseItem
                                     key = {expense.id} 
                                    {...expense} 
                                 
                                      
                                       />
                            )                     
    
                            
                            })
                    )
                      
                   }
               </ul>

            </div>
    )
 }

     
    

// state in this function is the current state of your store
// the retturned object will be stored in the outerfunction that contains the 
// connect component(higher order component which is  a function)
// the connect component will pass this data into props of your unconnected component
// then your unconnected component will get data to use it for its own or pass down to its children

const mapStateToProps = (state, ownProps)=>{
 
    return {
        expenses: getVisibleExpense(state.expenses, state.filters) 
    }
}

// connect will return a function with bound data you return
// from mapStateToProps; you then run it and pass in unconnected
// component, the function with bound data now also holds 
// the unconnected component.

// then you get a callback function back which is higher order
// component that have access to props and unconnectted component

// connectted component
// the callback (higher order component ) will have access to 
// props that is the data you return from the mapStateToProps function
// mapStateToProps runs everytime after state changes
//  and you get current state
// you then put props in the unconnected component which is called
// inside the callback
// then you get back connected component(component filled with data)
//from the callback(higher order compnent) you then export it
// now you have individual component that can connect
// directly to redux store without many parents passing the props 
// down
// any component can get access freely to the store data
// without relying on many top parents
// redux store is the one pass the data which is props to your
// unconnected component
// connect run only after your state is changed after many dispatches
// it wont run everytime when you dispatch many actions; 
// it only runs after your state settle down after many dispatches
// all mapStateToProps in your app will run after the state changes
export default connect(mapStateToProps)(ListExpense)  