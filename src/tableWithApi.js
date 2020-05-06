import React from 'react';
import {AgGridReact} from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"


    //const[rowData, setRowData]
    const table = {
        columns : [
            {headerName : "Title", field : "title"},
            {headerName : "Author", field : "author"},
            {headerName : "Edition Count", field : "editioncount"},
            {headerName : "Book ID", field : "id"}

        ],
        rowData :[
            {title : "The Black Horse", author : "John Thomsan", editioncount : 2000, id: "B1200"},
            {title : "The Black Pen", author : "John Thomsan", editioncount : 2008, id: "B1200"},
            {title : "The Black Tape", author : "John Thomsan", editioncount : 2002, id: "B1200"},
            {title : "The Black Cap", author : "John Thomsan", editioncount : 2009, id: "B1200"},
            {title : "The Black House", author : "John Thomsan", editioncount : 1989, id: "B1200"},
            
        ]
    }
function Appp(){
    return(
        <div className = "ag-theme-balham"
                style = {{
                    height: "500px",
                    width: "700px"
                }}
        > 
        <AgGridReact
                columnDefs = {table.columns}
                rowData = {table.rowData}
                pagination = {true}
        />
        </div>
    );
}

export default Appp;