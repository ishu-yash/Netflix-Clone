import React from 'react';
import requests from './Api/request';
import Row from './Components/Row/Row';

const title=["Netflix Originals","Trending Now","Top Rated","Action Movies","Comedy Movies","Horror Movies","Romance Movies","Documentaries"];

const App =()=>{
    const requestKeys=Object.keys(requests);

    return(
        <div>
            {requestKeys.map((key,index)=><Row title={title[index]} fetchUrl={requests[key]} key={key}/>)}
        </div>
    );
}

export default App;