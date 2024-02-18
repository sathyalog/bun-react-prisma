import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Contact from "./pages/Contact";

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);