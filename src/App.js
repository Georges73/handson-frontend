import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CarSearchAndUI from './components/CarSearchAndUI';
// <CarSearchAndUI />
class App extends Component {
  render() {
    return (
      <div className="App">
      <AppBar position="static" color="default">
         <Toolbar><Login /> </ Toolbar>

       </ AppBar>
<CarSearchAndUI />
     </div>
   );
 }
}

export default App;
