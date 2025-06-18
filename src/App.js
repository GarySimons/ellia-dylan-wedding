import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";
import Location from "./routes/Location";
import Accommodation from "./routes/Accommodation";
import Contact from "./routes/Contact";
import SaveDate from "./routes/SaveDate";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/details" element={<Details />} /> */}
        {/* <Route path="/location" element={<Location />} /> */}
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/save-the-date" element={<SaveDate />} /> */}
        <Route path="/" element={<SaveDate />} />
      </Routes>
    </div>
  );
}

export default App;
