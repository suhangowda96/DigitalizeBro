import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer'; // Import the Footer
import Home from './pages/Home';
import About from './pages/About';
import OurWorks from './pages/OurWorks';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import ContactModal from './components/ContactModal';
import Services from './pages/services';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenContact={openContactModal} />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="/our-works" 
              element={<OurWorks onOpenContact={openContactModal} />} 
            />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer /> {/* Add Footer here */}
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;