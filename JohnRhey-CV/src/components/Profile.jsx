import bg from "../assets/bg.png";
import profImg from "../assets/1BAI1.png";

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

          <div className="social-icons">
            FB | IG | IN
          </div>
        </div>

        <div className="profile-right">
          <h2>John Rhey R. Bayotlang</h2>
          <p><strong>Information Technology Intern</strong></p>
          <p>Email: johnrhey@email.com</p>
          <p>Phone: 09123456789</p>
        </div>

      </div>
    </section>
  );
}

export default Profile;