import { useEffect, useRef } from "react";
import logo from "@/assets/logo.png";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set up Media Session API for browser media player
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: "California Burger",
        artist: "Premium West Coast Burgers",
        album: "California Burger Music",
        artwork: [
          { src: logo, sizes: "512x512", type: "image/png" },
        ],
      });

      navigator.mediaSession.setActionHandler("play", () => {
        audio.play();
      });

      navigator.mediaSession.setActionHandler("pause", () => {
        audio.pause();
      });
    }

    // Attempt autoplay
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Autoplay blocked by browser, waiting for user interaction");
        
        // Add click listener to start audio on first interaction
        const startAudio = () => {
          audio.play().catch(console.log);
          document.removeEventListener("click", startAudio);
          document.removeEventListener("touchstart", startAudio);
        };
        
        document.addEventListener("click", startAudio);
        document.addEventListener("touchstart", startAudio);
      }
    };

    playAudio();

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/background-music.mp3"
      loop
      preload="auto"
      className="hidden"
    />
  );
};

export default BackgroundMusic;
