
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import HobbyHubLogo from "../utilities/HobbyHubLogo";

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <div className="footer sm:footer-horizontal px-6 md:px-10 md:pt-10 pt-10">
        <aside>
         <HobbyHubLogo/>
          <h2 className="text-lg font-bold">
        <p className="text-xs font-normal">
             Where creativity finds its home <br /> join a vibrant community of hobbyists sharing <br /> inspiration, skills, and passion every day.
            </p>
          </h2>
        </aside>

        <nav>
          <h6 className="footer-title">Explore</h6>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/all-groups" className="link link-hover">All Groups</Link>
          <Link to="/create-group" className="link link-hover">Create Group</Link>
          <Link to="/my-group" className="link link-hover">My Groups</Link>
        </nav>

        <nav>
          <h6 className="footer-title">About</h6>
          <Link to="/about-us" className="link link-hover">About Us</Link>
          <Link to="/contact" className="link link-hover">Contact Us</Link>
          <Link to="/blogs" className="link link-hover">Blog</Link>
          <Link to="/careers" className="link link-hover">Join the Team</Link>
        </nav>

        <nav>
          <h6 className="footer-title">Support</h6>
          <Link to="/help" className="link link-hover">Help Center</Link>
          <Link to="/terms" className="link link-hover">Terms & Conditions</Link>
          <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
          <Link to="/community" className="link link-hover">Community Guidelines</Link>
        </nav>

        <nav>
          <h6 className="footer-title">Social Media</h6>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/m.ismail.hossain24/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href="https://github.com/ismail-dev-code"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.instagram.com/m.ismailhossain24/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://ismail-web-developer.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover"
            >
              <CgWebsite size={25} />
            </a>
          </div>
        </nav>
      </div>

      <div>
        <p className="text-center mt-10 text-sm text-gray-500">
          <small>
            © {new Date().getFullYear()} Ismail. All rights reserved.
          </small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
