
import { Link } from "react-router-dom";
import "./MoviesHeaderContainer.css";


export default function MoviesHeaderContainer({type}){
    return(
        <div className="MoviesHeaderContainer">
                <h1 className="type">{type}</h1> 
                <Link to={`/Category/${type}`} className="seeMore">
                    <a >see More</a>
                </Link> 
                
            </div>
    )
}