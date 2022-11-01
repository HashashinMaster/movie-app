import Dashboard from "./Dashboard";
import "./Explore.css";
import ExploreCard from "./ExploreCard";
import SearchNav from "./SearchNav";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Explore() {

    const [category,setCategory] = useState(null);
    useEffect( ()=>{
        const getCategory = async ()=>{
            const offset = Math.floor(Math.random() * (660));
            const {data} = await axios.get(`http://localhost:5000/api/movies/category?categoryList`);
            if(data.success  === true){
                const JSX =data.data.map(e=><ExploreCard category={e}/>)
                setCategory(JSX)
            }
        }
        getCategory();
        },[])
    return (
        <div className="CardsContainer">
        <SearchNav/>
        <Dashboard index={1}/>
        <div className="Catcont">
        {category}
        </div>
        </div>
    )
}