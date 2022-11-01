import SearchNav from './SearchNav';
import Dashboard from './Dashboard';
import MoviesDisplayer from './MoviesDisplayer';
import './Home.css';

export default function Home() {
    return (
      <div className="Home">
        <SearchNav/>
        <Dashboard index={0}/>
        <MoviesDisplayer/>
      </div>
    );
  }