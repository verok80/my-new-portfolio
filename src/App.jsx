  import './App.css';
import React from 'react';
import  { BrowserRouter as Router} from 'react-router-dom';

import Header from './components/Header';
import Home from "./pages/Home"
import SocialIcons from './components/SocialIcons';




function App() {
  return (
   <Router>
    <Header/>
   <SocialIcons/>
     <Home/>
   </Router>
  );
}

export default App;
  
