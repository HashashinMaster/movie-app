const express = require("express");
const {readFile} = require("fs").promises;
const cors = require("cors");
const app = express();


app.use(cors());
app.listen(5000,()=>{
console.log("Server is listening on port 5000.");
});

app.get("/api/movies/category/:category", async (req,res)=>{
    let data = JSON.parse(await readFile("./data/movies.json","utf8"));
    data = data.filter((e)=>{return e.category === req.params.category}).slice(Number(req.query.offset),Number(req.query.offset) + Number(req.query.limit));
    if(data.length >1)
     return res.status(200).json({ success:true, data:data});
    
     return res.status(200).json({ success:false, msg:`your movie category: ${req.params.category}, offset:${req.query.offset} or limit:${req.query.limit} are wrong`})
});
app.get("/api/movies/category", async (req,res)=>{
    if("categoryList" in req.query){
        const data = [
            "Excitement",
            "Action",
            "Animation",
            "Historical",
            "Biography",
            "Drama",
            "Adventure",
            "Comedia",
            "Musical",
            "Fantasy",
            "Crime",
            "War",
            "Family",
            "Sci-Fi",
            "Horror",
            "Family",
            "Romance",
            "Sports",
            "Documentary",
            "Western",
            "Mystery"
        ];
         return res.status(200).json({ success:true, data:data});    
    }
    return res.status(200).json({ success:false, msg:`Couldn't get categorys.`})
})
app.get("/api/movies/:title",async (req,res)=>{
    let data = JSON.parse(await readFile("./data/movies.json","utf8"));
    data = data.find((e)=>e.title.trim() === req.params.title.trim())
    if(data)
        return res.status(200).json({success:true,data:data});
    
    return res.status(200).json({success:false,msg:`Couldn't found any Movie with name ${req.params.title}.tip:check spaces!`})

})
app.get("/api/movies",async (req,res)=>{
    let data = JSON.parse(await readFile("./data/movies.json","utf8"));
    data = data.slice(Number(req.query.offset),Number(req.query.offset) + Number(req.query.limit));
   
    if(data)    
        return res.status(200).json({success:true,data:data});
    
    return res.status(401).json({success:false,msg:`Something is worng! try later`})

})
app.get("/api/movies/search/:title",async(req,res)=>{
    let data = JSON.parse(await readFile("./data/movies.json","utf8"));
    data = data.filter((e)=>e.title.trim().toLowerCase().includes(req.params.title.trim().toLowerCase()) === true)
    if(data.length>1)
        return res.status(200).json({success:true,data:data});
    
    return res.status(200).json({success:false,msg:`Couldn't found any Movie with name ${req.params.title}`})

})