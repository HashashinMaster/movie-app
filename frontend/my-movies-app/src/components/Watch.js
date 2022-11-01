import "./Watch.css"
import {useParams} from"react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchNav from "./SearchNav";
import Dashboard from "./Dashboard";

export default function Watch(){
    const {movieName} = useParams();
    const [movie,setMovie] = useState(null);
    useEffect(()=>{
        const getMovie = async ()=>{
            const {data} = await axios.get(`http://localhost:5000/api/movies/${movieName}`);
            if(data.success === true) setMovie(<iframe scrolling="no"  src={data.data.streaming} sandbox="allow-scripts"></iframe>);
            else setMovie(data.msg);
        }
        getMovie();
        
    },[])
    return(
        <>
        <SearchNav/>
        <Dashboard/>
        <div id="watchMovieContainer">
        {movie}
        </div>
        </>
    )
}