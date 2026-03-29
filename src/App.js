import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import { portfolioData } from "./data/mock";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar portfolioData={portfolioData} />
      <Hero portfolioData={portfolioData} />
      <About portfolioData={portfolioData} />
      <Experience portfolioData={portfolioData} />
      <Projects portfolioData={portfolioData} />
      <Skills portfolioData={portfolioData} />
      <Achievements portfolioData={portfolioData} />
      <Contact portfolioData={portfolioData} />
      <Footer portfolioData={portfolioData} />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;