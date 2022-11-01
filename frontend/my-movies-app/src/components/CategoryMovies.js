import "./CategoryMovies.css";
import MoviesHeaderContainer from "./MoviesHeaderContainer";
import CardsContainer from "./CardsContainer";
import MovieCard from "./MovieCard";
import axios  from "axios";
import {useState,useEffect} from "react";

export default function CategoryMovies (props){
        const [movies,setMovies] = useState(null);
        useEffect( ()=>{
            const getMovies = async ()=>{
                const offset = Math.floor(Math.random() * (660));
                if(props.type == "New Releases"){
                    const {data} = await axios.get(`http://localhost:5000/api/movies?offset=${offset}&limit=4`);
                    if(data.success  === true){
                        const JSX =data.data.map(e=><MovieCard name={e.title} rating={e.rating} category={e.category} src={e.img} description={e.description}/>)
                        setMovies(JSX)
                    }
                }
                else{
                    const {data} = await axios.get(`http://localhost:5000/api/movies/category/${props.type}?offset=${0}&limit=4`);
                    if(data.success  === true){
                        const JSX =data.data.map(e=><MovieCard name={e.title} rating={e.rating} category={e.category} src={e.img} description={e.description}/>)
                        setMovies(JSX)
                    }
                }
            }
            getMovies();
            },[])

    
        
    return (
        <div id="newMoviesContainer">
            <MoviesHeaderContainer type={props.type} />
                <CardsContainer>
                       {movies}
                </CardsContainer>
        </div>
    )
}