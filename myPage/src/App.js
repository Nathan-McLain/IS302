import React from 'react';
import './App.css';
import { NavBar } from './NavBar';
import Main from './main';
import Header from './Header';

function App() {
  return (
    <>
      {/* <Header />
      <NavBar />
      <Main /> 
      <CupGame>*/}
      <BackEnd/>

    </>

  );
}

function BackEnd() {
  let [infos, setInfos] = React.useState([])
  React.useEffect(() => {
    fetch('https://antique-magical-gas.glitch.me/')
      .then(response => response.json())
      .then(data => setInfos(data))
  }, [])

  return (
    <>
      {infos.map((x) => {
        return (
          <>
          <div className="exp">
          <h2 className="header">{x.title}</h2>
          <p>{x.info}</p>
          </div>
           </>
        )
      })}
    </>
  )
}

function CupGame() {
  return (
    <>
      <iframe src="cup-game.html" width="800px" height="400px"></iframe>
    </>
  );
}
export default App;
