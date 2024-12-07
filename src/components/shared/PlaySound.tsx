import { useEffect, useRef, useState } from "react";

export const PlaySound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.03;

      const playSound = async () => {
        try {
          await audioRef.current?.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("La reproducción automática fue bloqueada:", error);
        }
      };
      playSound();
    }
  }, [])

  const pauseSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      {
        isPlaying ? (
          <svg
            onClick={pauseSound}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgb(0, 135, 62)" }}
          >
            <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
          </svg>
        ) : (
          <svg
            onClick={playSound}
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24"
            style={{ fill: "rgb(0, 135, 62)" }}
          >
            <path d="M7 6v12l10-6z"></path>
          </svg>
        )
      }

      <audio loop autoPlay ref={audioRef} >
        <source src="/sound/sound.mp3" type="audio/mp3" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </div>
  )
}
