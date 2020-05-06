import React from "react";
import { useState, useEffect } from "react";

function getHeadlines(searchStock) {
    console.log("Value of search is ", searchStock);
    //const url
    if(searchStock === '' ){
     var url = `http://131.181.190.87:3001/all`;

    }
    else if(searchStock !==''){
     url = `http://131.181.190.87:3001/all?symbol=${searchStock}`;
    }
  
    /*const url = `https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}&q=${search}`;
  */
  return fetch(url)
    .then(console.log(url))
    .then(res => res.json())
    .then(res =>
      res.map(data => ({
        symbol: data.symbol,
        name : data.name,
        industry : data.industry
       }))
    );
}


export function useStockArticles(searchStock) {
    console.log("Search keyword in useStock articles is :", searchStock)
    const [headlines, setHeadlines] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        getHeadlines(searchStock)
        .then(headlines => {
                setHeadlines(headlines);
        })
        .catch(e => {
                setError(e);
        
        });
    }, [searchStock]);

    return {
        headlines,
        error
    };
}
