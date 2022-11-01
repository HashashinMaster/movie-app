import "./ExploreCard.css";
import { Link } from "react-router-dom";
export default function ExploreCard ({category}){
    return (
        <div>
            <Link to={`/category/${category}`} style={{ textDecoration: 'none' }}>
            <button className="Catsbtn">
            <h3>{category}</h3>
            <div className="circle"></div>
            </button>
            
            </Link>
        </div>
    )
    
}