import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [Menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {!menuOpen && (
        <img
          src={menu_open}
          onClick={() => setMenuOpen(true)}
          className="nav-mob-open"
          alt="Open menu"
        />
      )}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <img
          src={menu_close}
          onClick={() => setMenuOpen(false)}
          className="nav-mob-close"
          alt="Close menu"
        />

        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#home"
            onClick={() => {
              setMenu("home");
              setMenuOpen(false);
            }}
          >
            Home
          </AnchorLink>
          {Menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={() => {
              setMenu("about");
              setMenuOpen(false);
            }}
          >
            About Me
          </AnchorLink>
          {Menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#skills"
            onClick={() => {
              setMenu("skills");
              setMenuOpen(false);
            }}
          >
            Skills
          </AnchorLink>
          {Menu === "skills" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#project"
            onClick={() => {
              setMenu("project");
              setMenuOpen(false);
            }}
          >
            Project
          </AnchorLink>
          {Menu === "project" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => {
              setMenu("contact");
              setMenuOpen(false);
            }}
          >
            Contact
          </AnchorLink>
          {Menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
