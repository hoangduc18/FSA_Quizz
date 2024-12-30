import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  const getCurrentTime = new Intl.DateTimeFormat('en', { 
    month: 'long', 
    year: 'numeric' 
  }).format(new Date());

  return (
    <footer className="bg-white-800 text-white p-4 border-t-slate-200 border-t-2">
      
      <div className="max-w-6xl mx-auto flex gap-16  border-b-slate-200 border-b-2">
        
        <div className='w-1/2 flex flex-col items-start'>
          <div className='flex gap-2 items-center'>
            <img src='../../assets/logo.ico' alt="Logo" className="h-16" />
            <h3 className="text-[24px] text-black">Quizzes</h3>
          </div>
          <p className=" text-lg text-gray-600 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos provident, soluta omnis perspiciatis aspernatur harum quo sapiente enim autem
          </p>
        </div>

        
        <div className='w-1/4'>
          <h3 className="text-lg text-black font-bold mb-4 text-left">Menu</h3>
          <ul className="text-gray-600">
            <li className="nav-item">
              <Link to="/" className="nav-link text-blue-400">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/manager/quizzes" className="nav-link text-blue-400">Quizzes</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-blue-400">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-blue-400">Contact</Link>
            </li>
          </ul>
        </div>

        
        <div className='w-1/4'>
          <h3 className="text-lg text-black font-bold mb-4">Contact</h3>
          <div className="text-blue-400">
            <p><FontAwesomeIcon icon={faEnvelope} className='text-black'/> hoangducpro001@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhoneAlt} className='text-black'/> 9999999999</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} className='text-black'/> 10 PVB, Cau Giay, Ha Noi, Viet Nam</p>
          </div>
        </div>
      </div>
      <div className='m-auto'>
      <p className='text-black mx-auto text-center'>© {getCurrentTime}</p>
      </div>
    </footer>
  );
};

export default Footer;