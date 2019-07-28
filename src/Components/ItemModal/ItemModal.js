// modal component
import React from 'react';
import Modal from 'react-modal';
const ItemModal = (props)=>(

<Modal
    isOpen={!!props.selectedItem }    
    contentLabel="Selected Modal"
    onRequestClose = {props.closeHandler}
    ariaHideApp={false}
    className = "content"
  >

    <h2>Your Selected Item</h2>
    {props.selectedItem &&  <p>{props.selectedItem }</p>}
    <button onClick = {props.closeHandler}> Close </button>
  </Modal>
)



   



export default ItemModal