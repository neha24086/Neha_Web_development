import react from 'react';
import ReactDom from 'react-dom';
// import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';

import {BrowserRouter, Route} from 'react-router-dom';

 

function App(){
  
  return(
             <>
               <BrowserRouter> 
             <Navbar/> 
        
            <Route  exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
               <Route  exact path="/contact" component={Contact}/>
                 <Route exact path="/service" component={Service}/>
           </BrowserRouter>  
           
           </>
    
  )
  }

export default App;