import { useState } from "react";
import "./App.css";

function App() {
  const [womens, setWomen] = useState([]);
  const [mens, setMen] = useState([]);
  const [bgColor, setBgColor] = useState("#5ae275");
  function addName(e) {
    if (e.target.value.trim() != "") {
      if (e.key == "Enter") {
        const name = e.target.value;
        setMen((prevMens) => [...prevMens, name]);
        e.target.value = "";
      }
    }
  }
  function addWomenName(e) {
    console.log(e.key);
    if (e.target.value.trim() != "") {
      if (e.key == "Enter") {
        const name = e.target.value;
        setWomen((prevMens) => [...prevMens, name]);
        e.target.value = "";
      }
    }
  }
  return (
    <>
      <div className="container">
        <div className="men-container">
          <div className="men-input">
            <input
              type="text"
              placeholder="Enter men's name..."
              onKeyDown={addName}
            />
          </div>
          <div className="list">
            {mens.map((val, index) => {
              return (
                <h1 className="name" key={index}>
                  {val}
                </h1>
              );
            })}
          </div>
        </div>
        <div className="women-container">
          <div className="women-input">
            <input
              type="text"
              placeholder="Enter women's name..."
              onKeyDown={addWomenName}
            />
          </div>
          <div className="list">
            {womens.map((val, index) => {
              return (
                <h1 className="name" key={index}>
                  {val}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="color-wrapper">
          <div style={{ backgroundColor: bgColor }} className="color"></div>
          <div className="input-color">
            <input type="color" onChange={(e) => setBgColor(e.target.value)} />
          </div>
          <div className="get-color">
            <input type="text" readOnly name="" id="" value={bgColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
