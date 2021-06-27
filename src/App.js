import React from 'react';
import './App.css';
import Video from './components/Video';
import { videoSource } from "./utils/videoSource";

function App() {
  return (
    <div className="App">
      <div className="video-container">
        {videoSource.map(obj => <Video url={obj.url} name={obj.name} />)}
      </div>
    </div>
  );
}

export default App;
