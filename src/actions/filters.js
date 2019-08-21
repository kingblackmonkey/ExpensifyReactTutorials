// filter text generator 
export const filterTextGenerator = ({text = ''} = {})=>{
    return {
        type: "SET_TEXT",
        filter:{
            text
        }
    }
}

// filter amount  generator
export const filterAmountGenerator = ()=>{
    return {
        type: "SET_AMOUNT",
        filter:{
           sortBy : 'Amount'
        }
    }
}

// filter date generator
export const filterDateGenerator = ()=>{
    return {
        type: "SET_DATE",
        filter:{
           sortBy : 'Date'
        }
    }
}

// filter startDate generator
export const filterStartDateGenerator = ({startDate = undefined}={})=>{
    return {
        type: "SET_START_DATE",
        filter:{
            startDate
        }
    }
}


// filter endDate  generator
export const filterEndDateGenerator = ({endDate = undefined}={})=>{
    return {
        type: "SET_END_DATE",
        filter:{
            endDate
        }
    }
}