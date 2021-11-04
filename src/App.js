import "./App.css";
import Landing from "./Components/Landing";
import CurchQuotes from "./Components/CurchQuotes";
import GroomBride from "./Components/GroomBride";
import Countdown from "./Components/Countdown";
import Pemberkatan from "./Components/Pemberkatan";
import Protokol from "./Components/Protokol";
import Kado from "./Components/Kado";
import SendingWishes from "./Components/SendingWishes";
import Wishes from "./Components/Wishes";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import { React, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Dropdown from "./Components/Dropdown";
import ModalWelcome from "./Components/ModalWelcome";
import Sound from "react-sound";
import Song from "./Audio/Lagu Pernikahan Rohani - Kita Satu (Lyric Video).mp3";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div className="overflow-x-hidden">
      <ModalWelcome toggle={toggleMusic} />
      <Sound
        url={Song}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300}
        loop={true}
      />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Landing />
      <CurchQuotes />
      <GroomBride />
      <Countdown />
      <Pemberkatan />
      <Protokol />
      <Kado />
      <Wishes />
      <SendingWishes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
