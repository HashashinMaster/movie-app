import Home from './components/Home';
import Watch from './components/Watch';
import {Routes,Route} from "react-router-dom";
import ExploreMovies from './components/ExploreMovies';
import Explore from './components/Explore';


window.addEventListener("resize",()=>{
  console.log(window.innerWidth);
})

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Watch/:movieName" element={<Watch/>} />
        <Route path="/Category/:category" element={<ExploreMovies/>}/>
        <Route path="/Explore" element={<Explore/>}/>
      </Routes>
    </div>
  );
}

export default App;
