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

  const handleReset = () => {
    console.log('resetting')
    setWatchLocationState(0)
    reactLocalStorage.set('watchLocation', 0)
  }


  return (
    <div className="App">
        <div>
          <h1>Filler Free Naruto Shippuden</h1>

          <div
          onClick={handleReset}
          style={{
            border: '3px solid black',
            backgroundColor: '#B43A12',
            textAlign: 'center',
            padding: '5px',
            position: 'fixed',
            width: '100px',
            left: '0px',
            bottom: '0px'
          }}
          >reset list</div>
        </div>

      {showData.filter(ep => ep.episode >= watchLocationState).map((ep, i) => <Episode watchLocationState={watchLocationState} key={i} episode={ep.episode} url={ep.url} />)}
      
    </div>
  );
}

export default App;
