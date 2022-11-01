import "./MovieCard.css";
import {useRef,useEffect} from "react";
import {Link} from "react-router-dom"
export default function MovieCard(props){
    const description = useRef(null);
    const descriptionDisplayer = useRef(null);
    useEffect(()=>{
        description.current.addEventListener("mouseenter",()=>{
            const mousePos = description.current.getBoundingClientRect();
            if(mousePos.x > 500){
                descriptionDisplayer.current.classList = " description goLeft";
                descriptionDisplayer.current.querySelector("i").classList = "fa-solid fa-caret-right";
            }
            else{
                descriptionDisplayer.current.classList = "description goRight";
                descriptionDisplayer.current.querySelector("i").classList = "fa-solid fa-caret-left";

            }
        })


    },[])



    return(
        <div className="Card" ref={description}>
            <Link to={`/Watch/${props.name}`} style={{ textDecoration: 'none' }}>
            <img className="cardImg" src={props.src}/>
            </Link>
            <div className="CardsInfo">
            <h5>{props.name}</h5>
            <h6 className="category">{props.category}</h6>
            </div>
            <span className="rating">{props.rating}</span>
            <Link to={`/Watch/${props.name}`} style={{ textDecoration: 'none' }}><div className="Play"><i class="fa-solid fa-circle-play"></i></div></Link>
            <div className="description goLeft" ref={descriptionDisplayer}>
            <div className="desc">
            <i class="fa-solid fa-caret-left"></i>
            <div className="CardsInfo">
            <h5 className="des">{props.name}</h5>
            <h6 className="category">{props.category}</h6>
            </div>
            <span className="ratingdes ">{props.rating}</span>
            <p className="descriptionPara desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae animi eaque blanditiis, sapiente adipisci ratione est iste. Eos impedit atque non voluptatibus sapiente asperiores hic sint eveniet eligendi magni.</p>
            <Link to={`/Watch/${props.name}`} style={{ textDecoration: 'none' }}><button className="Watch desc"> WATCH NOW</button></Link>
            </div>
            </div>
            
            
        </div>
    )
}