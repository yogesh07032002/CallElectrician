import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="footer-column">
            <h3 className="font-semibold text-xl mb-4">Electricians Hub</h3>
            <p className="text-gray-400">Your reliable and skilled electricians at your service.</p>
            <p className="text-gray-400">Bringing expert electrical solutions for your home and business.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="footer-link hover:text-green-500">Home</a></li>
              <li><a href="/about" className="footer-link hover:text-green-500">About Us</a></li>
              <li><a href="/services" className="footer-link hover:text-green-500">Services</a></li>
              <li><a href="/contact" className="footer-link hover:text-green-500">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="font-semibold text-xl mb-4">Our Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/services" className="footer-link hover:text-green-500">Residential Electrical Services</a></li>
              <li><a href="/services" className="footer-link hover:text-green-500">Commercial Electrical Solutions</a></li>
              <li><a href="/services" className="footer-link hover:text-green-500">Emergency Electrical Repairs</a></li>
              <li><a href="/services" className="footer-link hover:text-green-500">Electrical Installations</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <p className="text-gray-400">Address: Kopre Gaonthan, Office No-48, Kakade City, Beside Cosmos Bank, Karve Nagar, Pune, 411052</p>
            <p className="text-gray-400">Phone: +91 7620162336</p>
            <p className="text-gray-400">Email: contact@electricianshub.in</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-links flex justify-center items-center space-x-4 my-8">
          <a href="https://www.linkedin.com" className="footer-social-link text-gray-400 hover:text-green-500">LinkedIn</a>
          <a href="https://www.facebook.com" className="footer-social-link text-gray-400 hover:text-green-500">Facebook</a>
          <a href="https://www.instagram.com/callelectrician?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="footer-social-link text-gray-400 hover:text-green-500">Instagram</a>
        </div>

        {/* Footer Note */}
        <div className="footer-note text-center py-4 bg-gray-800">
          <p className="text-gray-400">© 2025 ArrayLogic Softwares Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
