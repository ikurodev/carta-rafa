import { useState } from "react";
import Alert from "./Alert";
import MusicPlayer from "./MusicPlayer";
import rafaSad from "./rafa-sad.jpeg";
import "./styles.css";
import Confetti from "react-confetti";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const [image, setImage] = useState(rafaSad);
  return (
    <div className="App">
      <img src={image} alt="card"></img>
      <Alert
        setImage={setImage}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        togglePlay={togglePlay}
      />

      {isPlaying && <Confetti />}
      <MusicPlayer
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        togglePlay={togglePlay}
      />
    </div>
  );
}
