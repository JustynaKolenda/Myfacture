import React from 'react';
import './css/index.scss';
import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { FacturePage } from './FacturePage';

class App extends React.Component{
  render(){

    return (
      <Router>
          <Route exact path={'/'} component={FacturePage} />
      </Router>
    );
}
}
export default App;
