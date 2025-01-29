import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="footer-column">
            <h3 className="font-semibold text-xl mb-4">Electricians Hub</h3>
            <p className="text-gray-400">
              Your reliable and skilled electricians at your service.
            </p>
            <p className="text-gray-400">
              Bringing expert electrical solutions for your home and business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/" className="footer-link hover:text-green-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link hover:text-green-500">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="footer-link hover:text-green-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link hover:text-green-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="font-semibold text-xl mb-4">Our Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a
                  href="/services"
                  className="footer-link hover:text-green-500"
                >
                  Residential Electrical Services
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="footer-link hover:text-green-500"
                >
                  Commercial Electrical Solutions
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="footer-link hover:text-green-500"
                >
                  Emergency Electrical Repairs
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="footer-link hover:text-green-500"
                >
                  Electrical Installations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Address: Kopre Gaonthan, Office No-48, Kakade City, Beside Cosmos
              Bank, Karve Nagar, Pune, 411052
            </p>
            <p className="text-gray-400">Phone: +91 7620162336</p>
            <p className="text-gray-400">Email: contact@electricianshub.in</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-links flex justify-center items-center space-x-4 my-8">
          <a
            href="https://www.linkedin.com"
            className="footer-social-link text-gray-400 hover:text-green-500"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com"
            className="footer-social-link text-gray-400 hover:text-green-500"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/callelectrician?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="footer-social-link text-gray-400 hover:text-green-500"
          >
            Instagram
          </a>
        </div>

        <div className="mt-4">
          <div className="w-full h-64 sm:h-72 md:h-96 lg:h-80">
            <iframe
              title="ArrayLogic Softwares Pvt. Ltd. Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.063053992115!2d73.81025111527484!3d18.52043028743938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c63fb55c09d9%3A0x61cd1fa004f5b80!2sShop%20No.%2050%2C%20Kakade%20Plaza%2C%20near%20Cosmos%20Bank%2C%20Warje%20Jakat%20Naka%2C%20Karve%20Nagar%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1633924573208!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Footer Note */}
        <div className="footer-note text-center py-4 bg-gray-800">
          <p className="text-gray-400">
            © 2025 ArrayLogic Softwares Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
