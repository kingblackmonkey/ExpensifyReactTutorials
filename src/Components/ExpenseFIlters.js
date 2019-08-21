import React from 'react'
import {connect} from 'react-redux'
import {
    filterTextGenerator,  filterAmountGenerator, filterDateGenerator,
    filterStartDateGenerator, filterEndDateGenerator
} from '.././actions/filters'
import {DateRangePicker} from'react-dates'





// unconnected component now can have ability to dispatch action to change the 
// state of the store based on action
// return object from mapStateToProps get dispatch function added
// so your component can use dispatc function and change 
// the state
// then 
export class  ExpenseFilters extends React.Component {
   state = {
    focusedInput: null,
    startDate: this.props.filters.startDate,
    endDate : this.props.filters.endDate
   }


   onDatesChange = ({startDate, endDate })=>{


    
          this.setState(()=>(
            {
                startDate,
                endDate
                }
            ))
      // dispatch startDate filter
      this.props.filterStartDateGenerator({startDate});

    //   dispatch end date filter
      this.props.filterEndDateGenerator({endDate});        
  
   }

   onFocusChange=(focusedInput)=>{
   
    this.setState(()=>
        (
            {  
                focusedInput
            }
        )
        )

        
   }

   onChangeTextHandler = (e)=>{
    this.props.filterTextGenerator({text: e.target.value});
}

onChangeSelectHandler = (e)=>{
    e.target.value === "Amount"?
    this.props.filterAmountGenerator():
    this.props.filterDateGenerator();        
}

    render(){
            return (
                <div>
                        <input 
                        type="text" 
                        value = {this.props.filters.text}
                        onChange={this.onChangeTextHandler}/>

                    <select value = {this.props.filters.sortBy} onChange = {this.onChangeSelectHandler}>
                        <option value = "Date">Date</option>
                        <option value = "Amount">Amount</option>
                    </select>

                    <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={()=>{return false}}
                    showClearDates = {true}
                   />                    


                </div>
            ) 

        }
}
    

const mapStateToProps = (state)=>{
   
    return  {
        filters: state.filters
    }
}
 
   
const mapDispatchToProps = {
    filterStartDateGenerator,
    filterEndDateGenerator,
    filterStartDateGenerator,
    filterTextGenerator,
    filterAmountGenerator,
    filterDateGenerator
}




export default connect(mapStateToProps, mapDispatchToProps)(ExpenseFilters);