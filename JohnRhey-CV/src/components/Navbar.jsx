const Navbar = () => {

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#profile" className="NavigationName">John Rhey R. Bayotlang</a>

        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;