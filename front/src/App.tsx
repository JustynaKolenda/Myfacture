import React from 'react';
import './css/App.scss';
import './css/reset.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Factur from './Factur';

class App extends React.Component{
  render(){

    return (
      <Router>
          <Route exact path={'/'} component={Factur} />
      </Router>
    );
}
}
export default App;
