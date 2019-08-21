import {createStore ,  combineReducers} from 'redux'
import expenseReducer from '.././reducers/expense'
import filtersReducer from '.././reducers/filters'

// the combine reducer will run again when we dispatch new action
// to update the state
// each reducer will recieve state baesed on the root property
// that holds the individual reducer
const initStore = ()=>{
    // create store
        const store = createStore(combineReducers(
            {
                expenses: expenseReducer,
                filters : filtersReducer

            }
        ),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return  store;
}

export default initStore;

