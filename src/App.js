import React from 'react';
import './App.css';
import Video from './components/Video'

function App() {
  return (
    <div className="App">
      <div className="video-container">
          <Video
            url="https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-multicolored-smoke-bomb-2825-large.mp4"
            name="Hand holding a multicolored smoke bomb"/>
          <Video
            url="https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4"
            name="Wind" />
          <Video
            url="https://assets.mixkit.co/videos/preview/mixkit-palm-frond-lifeguard-station-1194-large.mp4"
            name="Palm frond lifeguard station"  />
          <Video
            url="https://assets.mixkit.co/videos/preview/mixkit-air-bubbles-underwater-upside-video-1273-large.mp4"
            name="Air bubbles underwater, upside video"/>
            <Video
              url="https://assets.mixkit.co/videos/preview/mixkit-basketball-player-dribbling-then-dunking-2285-large.mp4"
              name="Basketball player dribbling then dunking"/>
      </div>
    </div>
  );
}

export default App;
