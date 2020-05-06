import React, { useEffect ,useState} from 'react';
import {AgGridReact} from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Badge} from "reactstrap"

export default function TableAPI(){
    const [rowData, setRowData] = useState([]);

    const columns = [
        {headerName : "Title", field : "title"},
        {headerName : "Author", field : "author"},
        {headerName : "Edition Count", field : "editioncount"},
        {headerName : "Book ID", field : "id"}
    ];
    useEffect(() => {
        fetch("https://openlibrary.org/subjects/drama.json?published_in = 2000")
            .then(res => res.json())
            .then(data => data.works)
            .then(works =>
                works.map(book => {
                    return{
                        title: book.title,
                        author : book.authors[0].name,
                        editioncount : book.edition_count,
                        id : book.cover_id
                    };
                })
            )
            .then(books => setRowData(books));
        
    })

    return(
        <div className = "container">
            <h1>Book Catelogue</h1>
            <p>
                <Badge color = "success" pill>{rowData.length}</Badge>
                Book published in 2000 in Drama Category
            </p>
            <div
                className = "ag-theme-balham"
                style = {{
                    height : "300px",
                    width : "800px"
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