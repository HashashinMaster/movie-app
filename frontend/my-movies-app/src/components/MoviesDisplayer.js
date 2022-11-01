
import "./MoviesDisplayer.css";
import CategoryMovies from "./CategoryMovies";
import { useEffect, useState } from "react";
import axios from "axios";
export default function MoviesDisplayer(){
    const [category,setCategory] = useState(null);
    useEffect( ()=>{
        const getCategory = async ()=>{
            const offset = Math.floor(Math.random() * (660));
            const {data} = await axios.get(`http://localhost:5000/api/movies/category?categoryList`);
            if(data.success  === true){
                const JSX =data.data.map(e=><CategoryMovies type={e}/>)
                setCategory(JSX)
            }
        }
        getCategory();
        },[])


   return(
    <div className="MoviesCont">
        <CategoryMovies type="New Releases"/>
        {category}
    </div>
   )
}