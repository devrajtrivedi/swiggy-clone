import React from "react";


import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] text-[#686b78] mt-16">
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        
        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/image/Swiggylogo.png"
              alt="Swiggy"
              className="w-10"
            />
            <span className="text-orange-500 font-bold text-xl">Swiggy</span>
          </div>
          <p className="text-sm">© 2026 Swiggy Limited</p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-black mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Instamart</li>
            <li>Dineout</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-black mb-4">Contact us</h4>
          <ul className="space-y-2 text-sm">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>

          <h4 className="font-bold text-black mt-6 mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h4 className="font-bold text-black mb-4">Available in:</h4>
          <ul className="space-y-2 text-sm">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>

          <select className="mt-4 border rounded-md px-3 py-2 text-sm bg-white">
            <option>685 cities</option>
          </select>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-black mb-4">Life at Swiggy</h4>
          <ul className="space-y-2 text-sm mb-6">
            <li>Explore with Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>

          <h4 className="font-bold text-black mb-4">Social Links</h4>
          <div className="flex gap-4 text-lg">
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
            <FaPinterestP />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Bottom Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-lg font-semibold text-black text-center md:text-left">
          For better experience, download the Swiggy app now
        </p>

        <div className="flex gap-3 justify-center items-center">
          <FaApple/> Apple store
         <FaGooglePlay/> play Store
        </div>
      </div>
    </footer>
  );
};

export default Footer;