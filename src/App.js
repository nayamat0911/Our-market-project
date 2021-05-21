import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';


import Services from './components/pages/Services';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import Marketing from './components/pages/Services';
import Consulting from './components/pages/Consulting';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';


function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
       <Route path = '/' exact component ={Home} />
       <Route path = '/services' exact component ={Services} />
       <Route path = '/products' exact component ={Products} />
       <Route path = '/contact-us' exact component ={ContactUs} />
       <Route path = '/marketing' exact component ={Marketing} />
       <Route path = '/consulting' exact component ={Consulting} />
       <Route path = '/sign-up' exact component ={SignUp} />
     </Switch>
    </Router>
  );
}

export default App;
