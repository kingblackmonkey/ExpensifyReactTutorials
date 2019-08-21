import moment from 'moment'

export const filters = {
    text: '',
    sortBy: 'Date',  
    startDate: undefined,  
    endDate: undefined, 
       
}

export const alternativeFilters = {
    text: 'Dog Medication',
    sortBy: 'Amount',  
    startDate: moment().startOf('month'),  
    endDate: moment().endOf('month'), 
       
}