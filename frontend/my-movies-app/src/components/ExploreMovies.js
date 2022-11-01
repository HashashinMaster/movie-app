import "./ExploreMovies.css";
import Dashboard from "./Dashboard";
import axios from "axios";
import { useEffect, useRef } from "react";
import SearchNav from "./SearchNav";
import MovieCard from "./MovieCard"
import {useState} from "react";
import CardsContainer from "./CardsContainer";
import { useParams } from "react-router-dom";
let offset = 0;
let limit = 8;
export default function ExploreMovies(){
    const btn = useRef(null);
    const {category} = useParams();
    const [showMore,setShowMore] = useState(0);
    const [movies,setMovies] = useState(null);
    useEffect(()=>{
        offset=0;
    },[category])
    useEffect(()=>{
        const getMovies = async ()=>{
            const {data} = await axios.get(`http://localhost:5000/api/movies/category/${category}?offset=${offset}&limit=${limit}`);
            if(data.success  === true){
                const JSX =data.data.map(e=><MovieCard name={e.title} rating={e.rating} category={e.category} src={e.img} description={e.description}/>)
                if(movies === null){setMovies(JSX)}
                else {
                    let merge = movies;
                    merge.push(...JSX);
                    setMovies(merge)
                }
                
                
            }
            else{
                btn.current.remove();
            }
            

        }
        getMovies();
    },[showMore])
    return (
        <div className="Home">
        <SearchNav/>
        <Dashboard index={1}/>
         <div className="MoviesCont">
            <CardsContainer>
            {movies}
            </CardsContainer>
            <div className="btnShowContainer">
            <button ref={btn} className="ShowMoreMovies" onClick={()=>{setShowMore(showMore+1);offset += limit;}}>Show More</button>

            </div>
         </div>
        </div>
 
    )
}