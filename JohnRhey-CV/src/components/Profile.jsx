import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import bg from "../assets/bg.png";
import profImg from "../assets/1BAI1.png";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  return (
    <section
      id="profile"
      className="section profile"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="profile-card">

        
        <div className="profile-left">
          <img
            src={profImg}
            alt="Profile"
            className="profile-image"
          />
        </div>

        
        <div className="profile-right">
          <h2>John Rhey R. Bayotlang</h2>
          <p className="profile-title">Information Technology Intern</p>
          <p>Email: <span>johnrhey@email.com</span></p>
          <p>Phone: <span>09123456789</span></p>

          <div className="social-icons">
            
            <a href="https://www.facebook.com/john.rhey.7587" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookSquare size={26} /></a>

            <a href="https://www.instagram.com/johnrheyyy/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={26} /></a>

            <a href="https://www.linkedin.com/in/john-rhey-bayotlang-253556364/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={26} /></a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;