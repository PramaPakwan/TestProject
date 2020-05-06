import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap"
import {useStockArticles} from "./api"
import {AgGridReact} from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"






function Headline(props) {
    const [rowData, setRowData] = useState([]);

   
    return (
      <div>
        <table>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Industry</th>
  
          </tr>
          <tr>
            <td>{props.symbol}</td>
            <td>{props.name}</td>
            <td>{props.industry}</td>
  
          </tr>
        </table>
        
      </div>
    );
}
function SearchForm(props){
    console.log("Props value is",props)
   var [innerSearchIndustry, setInnerSearchIndustry] = useState("");
    var [innerSearchStock, setInnerSearchStock] = useState("");
   
    
    return(
        <div>
        <Form>
        <Row form>
        <Col md={3}>
            <FormGroup>
            <Label for="exampleEmail">Select stock</Label>
            <Input type="text" 
                name="sc" 
                id="searchStock" 
                placeholder="Select stock" 
                value={innerSearchStock}
                onChange = {e=> setInnerSearchStock(e.target.value)}/>
            </FormGroup>
        </Col>
        <Col md={3}>
           <Button color="secondary" size="lg" style = {{
                   position: "absolute",
                   top: "33%",
                   left: "32%"
           }} 
           id = "search-button" 
           type="button"
           onClick= {()=> props.onSubmit(innerSearchStock)}
                        
           >
           Search</Button>
        </Col>
        <Col md={3}>
            <FormGroup>
            <Label for="industry">Industry</Label>
            <Input type="text" 
                name="industry" 
                placeholder="Select industry"
                id="searchIndustry" 
                placeholder="Select Industry" 
                value={innerSearchIndustry}
                onChange = {e=> setInnerSearchIndustry(e.target.value)} />
            </FormGroup>
        </Col>
        </Row>
        </Form>
        </div>
    );
  
}
function ListStockForm(){
    const [innerSearchStock, setInnerSearchStock] = useState("");
    var [innerSearchIndustry, setInnerSearchIndustry] = useState("");

    const { headlines, error } = useStockArticles(innerSearchStock,innerSearchIndustry);
    
    const columns = [
        {headerName : "Symbol", field : "symbol"},
        {headerName : "Name", field : "name"},
        {headerName : "Industry", field : "industry"},
        
    ];
  

    if (error) {
        return <p>Something went wrong : {error.message}</p>;
    }
    return(
        <div>
           
            <SearchForm onSubmit={setInnerSearchStock} />
            
             <div
                className = "ag-theme-balham"
                style = {{
                    height : "300px",
                    width : "700px",
                    display : "inline-block",
                    alignSelf : "left"
                }}
            >

            <AgGridReact columnDefs = {columns}
                            rowData = {headlines}
                            pagination = {true}
                            paginationPageSize = {10}
                            
                            
                />
            </div>
         </div>
    );
}
export default ListStockForm