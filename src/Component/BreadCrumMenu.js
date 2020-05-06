import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Breadcrumb,BreadcrumbItem} from "reactstrap"
import { FaBeer } from 'react-icons/fa'

function BreadCrumMenu(){
    return(
        <Breadcrumb>
            <BreadcrumbItem active><a href="#">Home</a></BreadcrumbItem>
            <BreadcrumbItem>Stocks</BreadcrumbItem>
        </Breadcrumb>
       
    );
}
export default BreadCrumMenu;