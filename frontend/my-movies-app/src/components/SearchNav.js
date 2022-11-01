
import "./SearchNav.css"
import {useRef,useEffect,useState} from 'react';
import logo from "../pics/EL MAHDI BOUZKOURA.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";

let count = 0;
export default function SearchNav(){
    const nav = useRef(null);
    const search = useRef(null);
    const searchDisplayer = useRef(null);
    
    const [moviesSearch, setMovieSearch] = useState(null);
    let scrollUp = 0;
    window.addEventListener("scroll",()=>{
        let currentScroll = document.documentElement.scrollTop;
        if(currentScroll>scrollUp){
            searchDisplayer.current.style.display = "none";
            scrollUp = currentScroll;
            nav.current.style.height = "0vh";
            nav.current.style.overflow = "hidden";
        }
        else{
            scrollUp = currentScroll;
            nav.current.style.height = "12vh";
            nav.current.style.overflow = "";
        }
    })
   
    return(
        <nav id="searchNav" ref={nav}>
            <ul id="navContainer">
                <i class="fa-solid fa-bars" onClick={()=>document.querySelector("#small_aside").style.display="block"}></i>
                <li id="logoContainer">
                    <Link to="/" style={{ textDecoration: 'none' }}><h3 id="logo">WeedyMovies</h3></Link>
                </li>
                <li id="searchContainer">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input ref={search} type="search" id="searchInput" placeholder="Search Movies" 
                        onBlur={
                        (e)=>{
                            e.target.parentElement.style.boxShadow = "";e.target.backgroundColor="";
                            searchDisplayer.current.style.display = "none";
                        }} 
                        onClick={
                        (e)=>{
                            e.target.parentElement.style.boxShadow = "0 0 4px  #e72330";e.target.backgroundColor="#ff424f"
                            searchDisplayer.current.style.display = "block";
                        }}
                        onKeyDown={
                            async (e)=>{
                                if( search.current.value.length <= 1){
                                    count = 0;
                                }
                                if(count === 0){
                                    count = search.current.value.length + 3;
                                }
                                if(search.current.value.length > count){    
                                    
                                    count = search.current.value.length + 3;
                                    let {data} = await axios.get(`http://localhost:5000/api/movies/search/${search.current.value}`)
                                    if(data.success === true){
                                        data = data.data.slice(0,20);
                                        const JSX = data.map(e=><SearchCard src={e.img} name={e.title} category={e.category}/>)
                                        setMovieSearch(JSX);
                                    }
                                }
                                if(e.key == "Backspace"){
                                    count--;
                                }
                            }
                        }
                        />
                    <div className="searchSuggestions" ref={searchDisplayer}>
                        {moviesSearch}
                    </div>
                </li>
                <li id="picContainer">
                    <img src={logo}  id="profileImg"/>
                </li>
            </ul>
        </nav>
    )
}