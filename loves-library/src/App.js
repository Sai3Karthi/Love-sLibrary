import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import PublisherPage from './pages/PublisherPage.js';
import StoryPage from './pages/StoryPage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/publisher/:id" element={<PublisherPage />} />
          <Route path="/story/:id" element={<StoryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;