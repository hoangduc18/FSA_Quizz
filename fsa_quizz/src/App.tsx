import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerLayout from './shared/layouts/CustomerLayout';
import About from './pages/About';
import './index.css';
import Login from './pages/auth/Login';
import AnonymousLayout from './shared/layouts/AnonymousLayout';
import AnonymousRoute from './shared/components/AnonymousRoute';
import Register from './pages/auth/Register';
import Contact from './pages/Contact';
import Quizzes from './pages/Quizzes';
import PrivateRoute from './shared/components/PrivateRoute';


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Routes>
          <Route path="/" element={<CustomerLayout><Home /></CustomerLayout>} />
          <Route path="/about" element={<CustomerLayout><About /></CustomerLayout>} />
          <Route path="/contact" element ={<CustomerLayout><Contact/></CustomerLayout>} />
          <Route path="/quizzes" element={<CustomerLayout><Quizzes/></CustomerLayout>} />

          <Route element={<AnonymousRoute />}>
            {/* Auth Router */}
            <Route path="/auth/login" element={<AnonymousLayout><Login /></AnonymousLayout>} />
            <Route path="/auth/register" element={<AnonymousLayout><Register /></AnonymousLayout>} />
          </Route>

          <Route element={<PrivateRoute/>}>
          </Route>

      </Routes>
    </div>
    </BrowserRouter>
    
  );
};

export default App;