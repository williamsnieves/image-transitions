import React from "react";
import { v4 as uuidv4 } from "uuid";
import guitarOne from "./assets/guitar1.jpg";
import guitarTwo from "./assets/guitar2.jpg";
import guitarThree from "./assets/guitar3.jpg";
import guitarFour from "./assets/guitar4.jpg";
import guitarFive from "./assets/guitar5.jpg";
import ImageGallery from "./components/ImageGallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Image gallery component</h2>
        <ImageGallery
          imageList={[
            {
              id: uuidv4(),
              url: guitarOne,
            },
            {
              id: uuidv4(),
              url: guitarTwo,
            },
            {
              id: uuidv4(),
              url: guitarThree,
            },
            {
              id: uuidv4(),
              url: guitarFour,
            },
            {
              id: uuidv4(),
              url: guitarFive,
            },
          ]}
          imageAmount={5}
        />
      </header>
    </div>
  );
}

export default App;
