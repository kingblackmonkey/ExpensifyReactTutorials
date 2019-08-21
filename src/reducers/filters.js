import moment from 'moment'
// filter default value

const filterDefault = {
    text: '',
    sortBy: 'Date',  
    startDate: moment().startOf('month'),  
    endDate: moment().endOf('month'), 
       
}

// filter reducer

const filtersReducer = (state = filterDefault, action)=>{

    
   switch(action.type){
        case "SET_TEXT":
        return {
            ...state, ...action.filter
           }

        case "SET_AMOUNT":
            return {
                ...state , ...action.filter
            }

        case "SET_DATE":
            return {
                ...state, ...action.filter
            }  
            
        case "SET_START_DATE" :
            return{
                ...state, ...action.filter
            }
            case "SET_END_DATE" :
                    return{
                        ...state, ...action.filter
                    }       

        default:
        return state;
   }
    
}

export default filtersReducer;