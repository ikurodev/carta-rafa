import { useEffect, useState } from "react";
import rafaHappy from "./rafa-happy.jpeg";
import chooCard from "./choo-card.jpg";
import Confetti from "react-confetti";

function Alert({ setImage, togglePlay }) {
  const [isClicked, setIsClicked] = useState(false);
  const [show, setShow] = useState(true);

  function handleClick() {
    setIsClicked(true);
  }

  async function handleYesClick() {
    handleClick();
    setImage(rafaHappy);

    await setTimeout(() => {
      setImage(chooCard);
      togglePlay();
    }, 3000);

    setShow(false);
  }

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [maxX, setMaxX] = useState(0);
  const [maxY, setMaxY] = useState(0);

  useEffect(() => {
    setMaxX(window.innerWidth - 80);
    setMaxY(window.innerHeight - 80);
  }, []);

  const handleHover = () => {
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    setPosition({ x: newX, y: newY });
  };

  if (show) {
    return (
      <div className="card" style={{ top: position.y, left: position.x }}>
        <h1 className="card-title">Can I be your valentine?</h1>
        <button
          // onMouseEnter={handleHover}
          onClick={handleYesClick}
          className="card-button"
        >
          YES
        </button>
        <button
          onMouseEnter={handleHover}
          onClick={() => console.log(position)}
          className="card-button"
        >
          NO
        </button>
      </div>
    );
  }
}

export default Alert;
