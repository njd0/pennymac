import './styles/App.css';
import {useState} from "react";
import _ from "lodash";
import TvmazeApi from "./services/tvmazeApi";
import Shows from "./components/Shows";

function App() {
  const [search, setSearch] = useState("");
  const [shows, setShows] = useState([]);

  const onTvmazeSearch = async (e) => { 
    setSearch(e.currentTarget.value); 
  };

  const searchTvmazeShows = async (e) => {
    e.preventDefault()
    const shows = await TvmazeApi.shows(search);
    setShows(shows);
  }

  return (
    <div className="App">
      <header className="App-header">
        Show Finder
      </header>
      <div className="App-content">
        <form className="search-bar">
          <input placeholder="Search Show Series" value={search} onChange={onTvmazeSearch}/>
          <button onClick={searchTvmazeShows}>Search</button>
        </form>
        <div className="show-content">
          <Shows shows={shows}/>
        </div>
      </div>
    </div>
  );
}

export default App;
