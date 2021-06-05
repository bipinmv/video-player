import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

function Video(props) {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);
	const onVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};
	return (
		<div className="video">
			<video
				onClick={onVideoPress}
				ref={videoRef}
				className="video-item"
				src={props.url}
				loop
			></video>
			<VideoFooter name={props.name} />
		</div>
	);
}
export default Video;
