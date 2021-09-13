import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const drumData = [
{
  id: 'Base Drum',
  text: 'Q',
  key: 'q',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/21[kb]808-bd01.wav.mp3' },

{
  id: 'High Conga',
  text: 'W',
  key: 'w',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/43[kb]808-chi1.wav.mp3' },

{
  id: 'Clave',
  text: 'E',
  key: 'e',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/10[kb]808-cla1.wav.mp3' },

{
  id: 'Low Conga',
  text: 'A',
  key: 'a',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/63[kb]808-clo3.wav.mp3' },

{
  id: 'Cymbal',
  key: 's',
  text: 'S',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/143[kb]808-cym01.wav.mp3' },

{
  id: 'High Hat',
  text: 'D',
  key: 'd',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/23[kb]808-hh01.wav.mp3' },

{
  id: 'Snare Drum',
  text: 'Z',
  key: 'z',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/33[kb]808-sd01.wav.mp3' },

{
  id: 'Toms High',
  text: 'X',
  key: 'x',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/55[kb]808-thi1.wav.mp3' },

{
  id: 'Toms Low',
  text: 'C',
  key: 'c',
  url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/80[kb]808-tlo1.wav.mp3' }];



const DrumPad = ({ drumInfo, onClick }) => {
  const { text, url, id } = drumInfo;
  return /*#__PURE__*/(
    React.createElement("button", { className: "drum-pad", onClick: onClick, id: id, "data-audio": text },
    text, /*#__PURE__*/
    React.createElement("audio", { src: url, className: "clip", id: text })));

};

const App = () => {
  const [state, setState] = useState({
    display: " " });

  const handleClick = event => {
    const audio = document.getElementById(event.target.getAttribute('data-audio'));
    var playPromise = audio.play();
    // What does the below do to help with asynchronous play?
    playPromise.then(_ => {}).catch(error => {});
    audio.currentTime = 0;
    setState({
      display: event.target.id });

  };

  const handleKeyDown = event => {
    const drumId = drumData.find(drumInfo => drumInfo.key == event.key.toLowerCase()).id;
    document.getElementById(drumId).click();
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine", tabindex: "-1", onKeyDown: handleKeyDown }, /*#__PURE__*/
    React.createElement("h2", null, "It'd a Drum Machine!"), /*#__PURE__*/
    React.createElement("div", { className: "grid-container" },
    drumData.map(drumInfo => {
      return /*#__PURE__*/(
        React.createElement(DrumPad, { drumInfo: drumInfo, onClick: handleClick }));
    })), /*#__PURE__*/

    React.createElement("h3", { id: "display" }, state.display)));


};

ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById('root'));