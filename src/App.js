import React from 'react';


// import './App.scss'
import { Header } from"./Components/Header/Header"
import {OptionLists} from"./Components/OptionList/OptionLists"

import ItemModal from './Components/ItemModal/ItemModal'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// indisision





class App extends React.Component{
  state ={
    title : "Main",
    subTitle : 'Make Life',
    items : [],
    selectedItem : undefined
  }
  // after component renderd it mounts once 
componentDidMount = ()=>{
  console.log("Did mount")
  // first we fetch data
  // in the case ,  there is no key yet when we first render the  component ;
  // first start we dont have the key and the empty array 
  // it will return null 
 
// if it is null when we dont fetch data 
// we fetch data when there is an array of items in local storage
 
  if (localStorage.getItem('items')){
    const savedData = JSON.parse(localStorage.getItem('items'));
    // console.log(savedData);
    this.setState(()=>({items: savedData}))
    
    }
}









// fire after state changes
componentDidUpdate = (prevProps,prevState )=>{
  // always use condition in this method when saving data to database or making api request.

// now consider the case in this application
  //  this function runs when state changes event if the value is the same
// in this case if user click remove all button after the component renderd;
// we need to consider that if this scenerio happen 
// then the new state will set back to empty array; the old state is still 
// the empty array ;  then this function will run; we dont want to save same data
// everytime in database or local storage; 
// we only want to save data to localstorage when the new state has 
// new changed value compared to old state and old value
// the point  is to save data for persistent data in this case 
// but the same thing  applies for database

console.log(prevState.items, this.state.items )
  if(prevState.items.length !== this.state.items.length){
    const  data = JSON.stringify(this.state.items);

    localStorage.setItem('items', data);
    console.log("save data"); 
 
}
}

  addHandler = (value)=>{
    
    if(!value){
      return 'Enter valid Value'
    }else if(this.state.items.indexOf(value) > -1){
      return "Item already exists"
    }
    
     this.setState( (prevState)=>{
            return {
              items: [...prevState.items, value]
            }
        }
         
        ) ;
  }

  deleteIndividualItem = (value)=>{
     this.setState((prevState)=>(
      {items: prevState.items.filter((item)=> item !== value)}
     ) );
  }
      
  removeAllItemsHandler = ()=>{         

        this.setState(() => ({items: []}) )
      
    }
    
  pickItHandler = ()=>{
    const index =  Math.floor(Math.random() * this.state.items.length);
    this.setState(()=> (   {selectedItem: this.state.items[index]})   );
  }

  removeModalHandler = ()=>{
    this.setState(() => ({ selectedItem : undefined}) )
  }
  
  render (){   
    return (
      <div >  
       
         <Header subTitle={this.state.subTitle} /> 
         
      <Container>
          <Row className = "justify-content-center">
            <Col sm = {10} md = {8} lg = {6} >
              
                <OptionLists 
                items = {this.state.items} 
                hasOption={this.state.items.length > 0} 
                handleRemoveItemsAll = {this.removeAllItemsHandler }
                pickIt = {this.pickItHandler}
                deleteIndividualHandler = {this.deleteIndividualItem}
                click = {this.addHandler}         
                />      

            </Col>
          </Row>
           
              
      </Container>   
            
        <ItemModal 
        selectedItem = {this.state.selectedItem} 

        closeHandler = {this.removeModalHandler}        
        />
          
      
     

      </div>
    
    )
  }
}











export default App;






// one file but two application practice

//================================ counter  appp

/*
class App extends React.Component{
  state = {
    count:this.props.count
  }


// get data from local storage
componentDidMount = ()=>{
  if(localStorage.getItem('number')){
    const number = JSON.parse(localStorage.getItem('number'))
    this.setState(()=>({count:number}))
  }
} 


// save data to local storage
componentDidUpdate = (prevProps, prevState)=>{
    if (prevState.count !== this.state.count){
        localStorage.setItem("number", JSON.stringify(this.state.count)  )
        
    }
}




  countUpHandler = ()=>{
    this.setState({count : this.state.count + 1})
    
  }
  countDownHandler = ()=>{
    this.setState((prevState)=>{
      
      
      return {
        count: prevState.count - 1
      }
    })
    
    
  }
  
  resetHandler=()=>{
    this.setState(()=>{
        return {
          count: 0
        }
    });
    
   
  }
  
  render(){    
      
      return(    
        <div> 
          <h1>Count:{this.state.count} </h1>
          <button onClick={this.countUpHandler}> +1</button>
          <button onClick={this.countDownHandler}> -1</button>
          <button onClick={this.resetHandler}> Reset</button>
      </div>
      )
      
   
      
    }
    
    
    
  }
  
  
  App.defaultProps= {
    count: 0
  }

  export default App;
*/

