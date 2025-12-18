import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import People from './pages/People.jsx';
import Publications from './pages/Publications.jsx';
import Research from './pages/Research.jsx';
import Community from './pages/Community.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="people" element={<People />} />
          <Route path="publications" element={<Publications />} />
          <Route path="research" element={<Research />} />
          <Route path="community" element={<Community />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;