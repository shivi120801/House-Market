import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp ,BsTwitter} from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer pt-4 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-4">
      <h3>
        Made With
        <img
          src="/assets/love.gif"
          alt="love"
          height={60}
          width={80}
          className="mx-3 footer-gif"
        />
        From India
      </h3>
      <h6>All Right Reserved &copy; Shiva Chauhan 2023</h6>
      <div className="d-flex flex-row p-2">
        <p className="me-4" title="Github">
          <Link to="https://github.com/shivi120801">
            <BsGithub color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Instagram">
          <Link to="#">
            <BsInstagram color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Twitter">
          <Link to="#">
            <BsTwitter color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Linkedin">
          <a href="https://www.linkedin.com/in/shiva-chauhan-4bbb88243/">
            <BsLinkedin color="black" size={30} />
          </a>
        </p>
        <p className="me-4" title="Whatsapp">
          <Link to="https://wa.me/9027063126">
            <BsWhatsapp color="black" size={30} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
