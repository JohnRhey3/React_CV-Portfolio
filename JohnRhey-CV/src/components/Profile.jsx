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

        {/* Left: photo only */}
        <div className="profile-left">
          <img
            src={profImg}
            alt="Profile"
            className="profile-image"
          />
        </div>

        {/* Right: all text + icons */}
        <div className="profile-right">
          <h2>John Rhey R. Bayotlang</h2>
          <p className="profile-title">Information Technology Intern</p>
          <p>Email: <span>johnrhey@email.com</span></p>
          <p>Phone: <span>09123456789</span></p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookSquare size={26} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={26} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin size={26} /></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;