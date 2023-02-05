import "../styles/components/Footer.css";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="logos">
        <Link to="https://www.linkedin.com/in/thomas-d%C3%A9jardins-823044123/">
          <img src={Linkedin} alt="logo linkedin" className="linkedin" />
        </Link>
        <Link to="https://github.com/totodej">
          <img src={Github} alt="logo github" className="github" />
        </Link>
      </div>
      <p className="quote">
        Vivre sans téléphone portable, vous imaginez le supplice ?
      </p>
      <div className="copyright">
        <p>© Copyright 2023 Mobile Store | Developed by totodej</p>
      </div>
    </footer>
  );
}

export default Footer;
