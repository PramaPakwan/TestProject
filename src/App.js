import React from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import {AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
import Appp from "./tableWithApi"

import TableAPI from "./Component/TableByStockNIndustry"

import Home from "./Component/Home"
import {Container, Row, Col} from 'reactstrap'
import SearchDetail from "./Component/SearchDetail"



const Homee = () => (
  <div>
    <h2> Home </h2>
  </div>
);

const Airport = () => (
  <div>
     <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Murtala Mohammed</li>
    </ul>
  </div>
);

const City = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);
function App() {
  return (
    
    <div>
      <Container>
       <Row>
          <Col xs="2"></Col>
          <Col xs="">
            
            <Home />
        {/* <TableAPI />*/}
            
          /* This is For Routing in React */
            <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>

        <Route path="/" component={Homee}/>
        <Route path="/history" component={SearchDetail}/>
        <Route path="/cities" component={City}/>
          </Col>
          <Col xs="2"></Col>
        </Row>
       
      </Container>
    </div>
    
  );
}

export default App;
