import React, { useState }from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Row, Button, Form, FormGroup, Label, Input, Breadcrumb } from "reactstrap"
import {useHistoryArticles} from "./apiHistoryDetail"
import {AgGridReact} from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
import LineChartForHistory from "./linechartt"

function SearchDate(props){
    var [innerSearchDate, setInnerSearchDate] = useState("");
    return(
        <Form>
            <Row form>
            <Col md={3}>
            <FormGroup>
            <Label for="exampleEmail">Search date from</Label>
            <Input type="text" 
                name="sc" 
                id="searchStock" 
                placeholder="Select stock" 
                value={innerSearchDate}
                onChange = {e=> setInnerSearchDate(e.target.value)}/>
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
            onClick= {()=> props.onSubmit(innerSearchDate)}
                            
            >
            Search</Button>
            </Col>
            </Row>
        </Form>
    )
}
function  SearchDetail (){
    const [innerSearchDate, setInnerSearchDate] = useState("");
    const { historyDetails, error} = useHistoryArticles(innerSearchDate);
   
    const columns = [
                    {headerName : "Date", field : "timestamp"},
                    {headerName : "Open", field : "open"},
                    {headerName : "High", field : "high"},
                    {headerName : "Low", field : "low"},
                    {headerName : "Close", field : "close"},
                    {headerName : "Volumes", field : "volumes"}
                    ];
    if (error.length >= 1) {
        return <p>Something went wrong : {error.message}</p>;
    }
    return(
        <div>
           
            <SearchDate onSubmit={setInnerSearchDate} />
            
            <div
                className = "ag-theme-balham"
                style = {{
                    height : "300px",
                    width : "1200px",
                    display : "inline-block",
                    alignSelf : "left"
                }}
            >

            <AgGridReact columnDefs = {columns}
                            rowData = {historyDetails}
                            pagination = {true}
                            paginationPageSize = {10}
                            
                            
                />

            </div>
            <LineChartForHistory />
        </div>

    )
    
}
export default SearchDetail