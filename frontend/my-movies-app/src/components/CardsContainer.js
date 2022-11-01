
import "./CardsContainer.css";

export default  function CardsContainer(props){
    return(
        <div className="CardsContainer">
            {props.children}
        </div>
    )
}