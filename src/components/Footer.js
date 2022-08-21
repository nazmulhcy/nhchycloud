import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <h2>Location</h2>
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
        </ul>
        <ul className="fList">
          <h2>Contact</h2>

          <li className="fListItem">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVYoL-FGjRG7d3CrqeVT5sFg35gecJya9eyRD9wWs_j0eklQ/viewform?usp=sf_link">
              Contact Us <FaFacebookMessenger />
            </a>
          </li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Email:nazmulhc.20@gmail.com</li>
        </ul>

        <ul className="fList-social">
          <h2>Social Links</h2>
          <div className="icons">
            <li className="fListItem">
              <a href="https://www.facebook.com/nazmulhoque.choudhury.92">
                <FaFacebook />
              </a>
            </li>
            <li className="fListItem">
              {" "}
              <a href="https://www.linkedin.com/in/nazmul-hoque-choudhury-7a4b091b7/">
                <FaLinkedin />
              </a>
            </li>
            <li className="fListItem">
              {" "}
              <a href="https://github.com/nazmulhcy">
                <FaGithub />
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="fText">
        Copyright © 2022 nhchycloud | Developed by Nazmul Hoque Choudhury{" "}
      </div>
    </div>
  );
};

export default Footer;
