import React from 'react';


import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron} from "reactstrap"
import { FaBeer } from 'react-icons/fa'
import BreadCrumMenu from './BreadCrumMenu'
import ListStockForm from './ListStockForm'

function Home(){
    return(
        <div>
            <Jumbotron>
                <BreadCrumMenu />
                <h3 className= "">Stock Prices <FaBeer /></h3>
                <p>Welcome to the Stock Market Page. You may click on stocks to view all the stocks or search to
                    view the latest 100 days of activity. </p>
            </Jumbotron>
            <ListStockForm />
            
        </div>
    );
}
export default Home;