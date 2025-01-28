import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import emailjs from "emailjs-com";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_6g2in98";
    const templateId = "template_p5zjrjo";
    const publicKey = "xTyPRlgbJIOeYlAv2";

    // Prepare the template parameters
    const templateParams = {
      to_name: "Admin",
      from_name: user.username,
      email: user.email,
      phone: user.phone,
      role: user.role,
    };

    // Send email through EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Registration Successful! Email sent.");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.error("There was an error sending your registration details. Please try again.");
      });
  };

  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="registration-image flex justify-center">
              <img
                src="/call.png"
                alt="Call Image"
                className="w-full max-w-[600px]   mx-auto rounded-lg" // Increased size without changing background
              />
            </div>

            {/* Registration Form Section */}
            <div className="registration-form bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-extrabold text-center mb-6">Register Now</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-lg font-semibold">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-semibold">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-lg font-semibold">Select Role</label>
                  <select
                    name="role"
                    id="role"
                    required
                    value={user.role}
                    onChange={handleInput}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      Choose an option
                    </option>
                    <option value="Job Seeker">Service</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Vendor">Vendor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};
