import React from "react";
import profilePic from '../assets/images/Profile-Pic.jpg';
import { FaUser, FaGraduationCap, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Import the icons

    const Header = () => {
        return (
          <header className="bg-gray-800 font-bold italic text-white p-6 text-center">
            <div className="mb-6">
              {/* Profile Picture */}
              <img
                src={profilePic}
                alt="Your Name"
                className="w-32 h-32 rounded-full object-cover border-4 border-white mx-auto"
              />
              {/* Name and Position */}
              <h1 className="text-3xl mt-4">Vanshika</h1>
              <p className="text-lg mt-2">Frontend Developer</p>
            </div>
      
            {/* Personal Details Section */}
            <div className="mb-6 space-y-4">
              <div className="flex items-center justify-center">
                <FaUser className="text-xl mr-2" />
                <span>Age: 20</span>
              </div>
              <div className="flex items-center justify-center">
                <FaGraduationCap className="text-xl mr-2" />
                <span>Qualifications: BCA in Computer Applications</span>
              </div>
              <div className="flex items-center justify-center">
                <FaEnvelope className="text-xl mr-2" />
                <span>Email: yourname@example.com</span>
              </div>
              <div className="flex items-center justify-center">
                <FaPhoneAlt className="text-xl mr-2" />
                <span>Contact: 9463032079</span>
              </div>
            </div>
            </header>
  );
}

export default Header;
