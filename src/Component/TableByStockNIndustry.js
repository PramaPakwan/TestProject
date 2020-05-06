import React, { useEffect ,useState} from 'react';
import {AgGridReact} from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Badge} from "reactstrap"

export default function TableAPI(){
    const [rowData, setRowData] = useState([]);

    const columns = [
        {headerName : "Symbol", field : "symbol"},
        {headerName : "Name", field : "name"},
        {headerName : "Industry", field : "industry"},
        
    ];
    useEffect(() => {
        fetch("http://131.181.190.87:3001/all")
            .then(res => res.json())
            .then(res =>
                res.map(stock => {
                    return{
                        symbol: stock.symbol,
                        name : stock.name,
                        industry : stock.industry,
                    };
                })
            )
            .then(data => setRowData(data));
        
    })

   

    return(
        <div className = "container">
           
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
                            rowData = {rowData}
                            pagination = {true}
                            paginationPageSize = {7}
                            
                            
                />
            </div>
            <Button
                color = "info"
                size = "sm"
                className = "mt-3"
                href = "https://openlibrary.org/developers/api"
                target = "_blank"
            >
                Go to Open Library api
            </Button>
        </div>
    );
}