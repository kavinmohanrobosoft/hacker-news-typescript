import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <div className='template'>
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
