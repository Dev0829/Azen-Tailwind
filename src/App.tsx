import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Resellers } from "./screens/Resellers";
import { Playlists } from "./screens/Playlists";
import { Team } from "./screens/Team";
import { FAQ } from "./screens/FAQ";
import { Contact } from "./screens/Contact";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resellers" element={<Resellers />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};