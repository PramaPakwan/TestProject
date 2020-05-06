import React from 'react';
import './App.css';
import {AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
import Appp from "./tableWithApi"

import TableAPI from "./Component/TableByStockNIndustry"

import Home from "./Component/Home"
import {Container, Row, Col} from 'reactstrap'


const table = {
  columns: [
    {headerName : "Make", field:"make"},
    {headerName : "Model", field:"model"},
    {headerName : "Price", field:"price", sortable : true, filter :"agNumberColumnfilter" }
  ],
  rowData : [
    { make : "Hundai", model : "Kona", price : 340000},
    { make : "Toyota", model : "Camry", price : 2400},
    { make : "Ford", model : "Focus", price : 25000},

    
  ]
};
function App() {
  return (
    
    <div>
      <container>
      <Row>
        <Col xs="2"></Col>
        <Col xs="auto">
        <Home />
        <div className="ag-theme-balham"
          style = {{
            height : "300px",
            width : "600px"
          }}
        >
          <AgGridReact
            columnDefs = {table.columns}
            rowData = {table.rowData}
            pagination = {true}
          />
        </div>
        
        <Appp />
        <TableAPI />
        </Col>
        <Col xs=""></Col>
      </Row>
       
      </container>
    </div>
    
  );
}

export default App;
