import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerLayout from './shared/layouts/CustomerLayout';
import About from './pages/About';
import './index.css';


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Routes>
            <Route path="/" element={<CustomerLayout><Home /></CustomerLayout>} />
            <Route path="/about" element={<CustomerLayout><About /></CustomerLayout>} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
};

export default App;