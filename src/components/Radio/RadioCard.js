import { useState, useEffect } from "react";

function RadioCard({ emisora }) {
  const [audio, setAudio] = useState(null);
  const [volume, setVolume] = useState(0.5); 
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audio) {
      audio.volume = volume;
    }
  }, [audio, volume]);

  const playRadio = () => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(emisora.url);
    newAudio.play();
    setAudio(newAudio);
    setIsPlaying(true);
  };

  const pauseRadio = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="card">
      <h2>{emisora.name}</h2>
      <div className="buttons">
        <button className="station" onClick={playRadio}>
          Play
        </button>
        {isPlaying && (
          <div className="volume-control">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="volume-slider"
            />
            <span className="volume-value">{Math.round(volume * 100)}%</span>
          </div>
        )}
        <button className="station" onClick={pauseRadio}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default RadioCard;
