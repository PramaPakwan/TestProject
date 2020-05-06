import React, { useState ,useEffect} from 'react'

function getHistoryDetailsFromAPI(searchDate){
    console.log("Value of search is ", searchDate);
    const fromsampleDate ='2020-01-12'
    const symbolsample = 'aa'
    
    if(searchDate === '' ){
     var url = `http://131.181.190.87:3001/history?symbol=a`;

    }
    //else if(searchDate !==''){
     //url = `http://131.181.190.87:3001/history?symbol=${symbolsample}&from=${fromsampleDate}`;
   // }
   return fetch(url)
        .then(console.log("Result is ",url))
        .then(res => res.json())
        .then(res =>
            res.map(data => ({
                timestamp: data.timestamp.substr(0,10),
                open : data.open,
                high : data.high,
                low :data.low,
                close : data.close,
                volumes : data.volumes
            }))
        );
}


export function useHistoryArticles(searchDate){
    console.log("Data entered in search history page is ", searchDate);
    const [historyDetails, setHistoryDetails] = useState([]);
    const [error, setError] = useState([]);


    useEffect(() => {
        getHistoryDetailsFromAPI(searchDate)
        .then(historyDetails =>{
            setHistoryDetails(historyDetails);
        })
        .catch(e => {
            setError(e); 
          });
      }, [searchDate]);
      return{
        historyDetails,
        error
      };
}