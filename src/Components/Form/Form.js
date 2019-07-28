import React from "react"


export default class FormAction extends React.Component{
    state = {
      error: undefined
    }
    
    addHandler = (e)=>{
      e.preventDefault()
      
        
        const value = e.target.children.inputText.value.trim()
         const error =  this.props.click(value); 
         this.setState(()=>( { error }));
         e.target.children.inputText.value = "";
      }
    
    
    render(){
      return(
         <div >
          {this.state.error && <p className ="form__warning">{this.state.error}</p>}
           <form  className="form " id= "submit" onSubmit = {this.addHandler}>           

              
              <input className="form__text"  placeholder= "Add Options" type="text" name="inputText" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                
              <input className ="medium-button" type="submit" value="Submit" />

                
            

          </form>
        </div>
  
      
      )
    }
  }