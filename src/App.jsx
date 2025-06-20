import React from 'react';

import LandingPage from './pages/LandingPage.jsx';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar visible on all sections */}
      <Navbar />

      {/* Main content: Landing Page */}
      <main className="flex-grow">
        <LandingPage />
      </main>

      {/* Footer visible on all sections */}
      <Footer />
    </div>
  );
};

export default App;
