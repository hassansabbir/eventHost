import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import rocketLogo from "../../assets/roketLogo.png";
import bkashLogo from "../../assets/bkashLogo.png";
import nagadLogo from "../../assets/nagadLogo.png";

const Footer = () => {
  return (
    <div className="navGradient">
      <footer className="footer text-white max-w-[1160px] mx-auto p-10">
        <aside>
          <h1 className="text-[40px] my-6">EventHost</h1>
          <p>
            IDEA Project, ICT Tower (0th Floor), <br /> Plot: E-14X, Agargaon,
            Dhaka - 1207 <br /> 02222-222222, 01111111111
          </p>
        </aside>
        <nav>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <a className="link link-hover">Event Dashboard</a>
          <a className="link link-hover">Terms & Condition</a>
          <a className="link link-hover">Privacy & Refund Policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebook className="w-6 h-6" />
            </a>
            <a>
              <FaInstagram className="w-6 h-6" />
            </a>
            <a>
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a>
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </footer>
      <hr className="max-w-[1100px] mx-auto" />
      <footer className="footer text-white max-w-[1160px] mx-auto p-5 px-10">
        <aside>
          <p className="flex gap-5 items-center">
            Pay With
            <span className="flex md:gap-10">
              <img className="w-14 h-8" src={bkashLogo} alt="" />
              <img className="w-14 h-8" src={rocketLogo} alt="" />
              <img className="w-14 h-8" src={nagadLogo} alt="" />
            </span>
          </p>
        </aside>
        <aside>
          <p className="text-end">©2023 TickHost & UVTR. All right reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
