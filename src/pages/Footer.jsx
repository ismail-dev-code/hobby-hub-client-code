import React from "react";
import footerLogo from '../assets/hobby-logo.png'
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <div className="bg-base-200">
        <div className="footer sm:footer-horizontal text-base-content px-6 md:px-10 pt-10">
        <aside>
         <img className="w-34 h-14" src={footerLogo} alt="" />
          <p>
            <span className="text-lg font-bold">Hobby Hub</span>
            <br />
            Where creativity finds its home. <br />
            Inspiring hobbies since 2025.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">Discover Hobbies</a>
          <a className="link link-hover">Trending Projects</a>
          <a className="link link-hover">Community Groups</a>
          <a className="link link-hover">Events & Meetups</a>
        </nav>
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Join the Team</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Community Guidelines</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Media</h6>
         <div className="flex gap-4">
             <Link to={'https://www.facebook.com/m.ismail.hossain24/'} target="_blank" className="link link-hover"><FaFacebook size={25} /></Link>
          <Link to={'https://github.com/ismail-dev-code'} target="_blank" className="link link-hover"><FaGithub size={25} /></Link>
          <Link to={'https://www.instagram.com/m.ismailhossain24/'} target="_blank" className="link link-hover"><FaInstagram size={25} /></Link>
          <Link to={'https://ismail-web-developer.netlify.app/'} target="_blank" className="link link-hover"><CgWebsite size={25} /></Link>
         </div>
         
          
        </nav>
      </div>
     <div>
         <p className="text-center mt-10 text-sm text-gray-500">
       <small> © {new Date().getFullYear()} Ismail. All rights reserved.</small>
      </p>
     </div>
      </div>
    </>
  );
};

export default Footer;
