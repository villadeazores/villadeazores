import React from "react";
import Hero from "./components/hero";
import Header from "./components/header";
import Stat from "./components/stat";

import "./App.css";
import Welcome from "./components/welcome";
import Rooms from "./components/rooms";
import Experience from "./components/Experience";
import Amenities from "./components/amenities";
import Gallery from "./components/gallery";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Welcome />
      <Stat />
      <Amenities />
      <Rooms />
      <Experience />
      <Gallery />
    </div>
  );
}
