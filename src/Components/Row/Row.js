import React, { useEffect, useState } from 'react';
import './Row.css';
import getData from '../../Api/ApiService';
import Card from '../Card/Card';
import {IMAGE_URL} from '../../Api/axios';

const Row=(props)=>{
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        const promise=getData(props.fetchUrl);
        promise.then(
            response=>setMovies(response.data.results)
        );
    },[props.fetchUrl]);

    return(
        <div>
            <h2>{props.title}</h2>
            <div className="row__posters">
                {movies.map(movie=><Card image={IMAGE_URL+movie.poster_path}/>)}
            </div>
        </div>
    );
}

export default Row;