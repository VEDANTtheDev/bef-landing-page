import React from 'react';
import Navbar from './components/common/Navbar';
import LandingPage from './Pages/LandingPage';
import Footer from './components/common/Footer';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar visible on all sections */}
      <Navbar></Navbar>
      
      {/* Main content: Landing Page */}
      <main className="flex-grow">
        <LandingPage></LandingPage>
      </main>
      
      {/* Footer visible on all sections */}
      <Footer></Footer>
    </div>
  );
};

export default App;
