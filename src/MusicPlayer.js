import { useState } from "react";
import ReactPlayer from "react-player";

const MusicPlayer = ({ isPlaying, setIsPlaying, togglePlay }) => {
  // const [isPlaying, setIsPlaying] = useState(false);

  // const togglePlay = () => {
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <div>
      {isPlaying && (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=6q8jm0Lu7GU"
          playing
          controls
          hidden
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};

export default MusicPlayer;
