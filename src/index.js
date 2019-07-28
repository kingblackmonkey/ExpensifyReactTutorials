import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { directive } from '@babel/types';





ReactDOM.render( <App  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const Layout = (props)=>{
//     return (
//         <div>
//             <h3>Header</h3>
//             {props.children}
//             <h3>footer</h3>

//         </div>        


//     )
// }
// <Layout ><div> <p>Content</p></div> <h1>big content</h1></Layout>