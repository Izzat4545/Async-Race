import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Garage from "./pages/garage";
import Winners from "./pages/winners";
import Header from "./components/header";

function App() {
  return (
    // <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/winners" element={<Winners />} />
        <Route path="/" element={<Garage />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
