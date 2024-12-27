import React from 'react';
import { Link } from 'react-router-dom';
<script src="https://cdn.tailwindcss.com"></script>

const Footer: React.FC = () => {
  const getCurrentTime = new Intl.DateTimeFormat('en', { 
    month: 'long', 
    year: 'numeric' 
  }).format(new Date());

  return (
    <footer className="bg-white-800 text-white p-4 text-center">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <div className="flex items-center space-x-2">
            <img src='../../assets/logo.ico' alt="Logo" className="h-8 w-8" />
            <h3 className="text-lg text-black font-bold">Quizzes</h3>
          </div>
          <p className=" text-lg text-gray-600">
            sometthing
          </p>
        </div>

        
        <div>
          <h3 className="text-lg text-black font-bold mb-4">Menu</h3>
          <ul className="text-gray-600">
            <li className="nav-item">
              <Link to="/" className="nav-link hover:bg-blue-700">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/manager/quizzes" className="nav-link hover:bg-blue-700">Quizzes</Link>
            </li>
            <li className="nav-item">
              <Link to="/manager/dashboard" className="nav-link hover:bg-blue-700">Management</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link hover:bg-blue-700">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link hover:bg-blue-700">Contact</Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg text-black font-bold mb-4">Contact</h3>
          <ul className="text-gray-600">
            <li>hoagnducpro@gmail.com</li>
            <li>9999999999</li>
            <li>10 PVB, Cau Giay, Ha Noi, Viet Nam</li>
          </ul>
        </div>
      </div>
      <p className='text-black p-4'>© {getCurrentTime}</p>
    </footer>
  );
};

export default Footer;