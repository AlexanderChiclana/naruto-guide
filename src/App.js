import React,  {useState, useEffect} from 'react';
import './App.css';
import Episode from './Episode.js'
import showData from './filler.js'
import {reactLocalStorage} from 'reactjs-localstorage';

function App() {

  const [watchLocationState, setWatchLocationState] = useState(0);

  useEffect(() => {
    setWatchLocationState(reactLocalStorage.get('watchLocation'))
  }, []);


  return (
    <div className="App">
      {showData.filter(ep => ep.episode >= watchLocationState).map((ep, i) => <Episode watchLocationState={watchLocationState} key={i} episode={ep.episode} url={ep.url} />)}
    </div>
  );
}

export default App;
