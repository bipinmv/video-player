import React from 'react';
import './App.css';
import Video from './components/Video';
import { videoSource } from "./utils/videoSource";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter basename="/video-player">
      <div className="App">
        <div className="video-container">
          {videoSource.map(obj => <Video url={obj.url} name={obj.name} />)}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
