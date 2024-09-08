import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./css/output.css";
import {   useState } from "react";
const colors=["creamYellow","pink","white","teal","orange","yellow","blue","red"];

function App() {
  const [bgColor,setBgColor]=useState(colors[0]);

  const handleColorChange = (index) => {
    setBgColor(colors[index]);
  };

  console.log(bgColor);


  return (
    <div className={`bg-${bgColor} min-h-screen transition-colors duration-700`}>
      <Header />
      <Main onColorChange={handleColorChange}/>
      <Footer />
    </div>
  );
}

export default App;
