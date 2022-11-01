import "./SearchCard.css";

import { Link } from "react-router-dom";

export default function SearchCard(props){
    return(
        
            <Link style={{ textDecoration: 'none' }} to={`/Watch/${props.name}`}>
        <div className="SearchCardContainer">
            <img src={props.src} className="searchImg"/>
            <div>
            <h5>{props.name}</h5>
            <h6 className="searchCat">{props.category}</h6>
            </div>
        </div>
        </Link>
    )
}