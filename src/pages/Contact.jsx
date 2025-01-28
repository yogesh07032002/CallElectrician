import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import emailjs from "emailjs-com";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);

    // EmailJS details
    const serviceId = "service_nwhotpg"; // Your service ID
    const templateId = "template_slujxdi"; // Your template ID
    const publicKey = "xTyPRlgbJIOeYlAv2"; // Your public key

    // Prepare the template parameters
    const templateParams = {
      username: contact.username,
      email: contact.email,
      phone: contact.phone, // Adding phone to template parameters
      message: contact.message,
    };

    // Send the email via EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Your message has been sent successfully!");
        // Reset form after successful submission
        setContact({
          username: "",
          email: "",
          phone: "", // Reset phone as well
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.error("Failed to send your message. Please try again.");
      });
  };

  return (
    <>
      <section className="bg-black text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-lg mb-8">
            Have any questions or need assistance? Feel free to reach out to us, and we'll get back to you shortly!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="contact-image">
              <img
                src="/loginPage.png"
                alt="Contact Image"
                className="w-full md:h-[750px] object-cover mx-auto rounded-lg"  // Increased size and object-fit
              />
            </div>

            {/* Form Section */}
            <div className="section-form">
              <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <label htmlFor="username" className="block text-lg font-semibold text-start">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    id="username"
                    required
                    autoComplete="off"
                    className="w-full p-4 mt-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contact.username}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-lg font-semibold text-start">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                    required
                    autoComplete="off"
                    className="w-full p-4 mt-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contact.email}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-lg font-semibold text-start">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    id="phone"
                    required
                    autoComplete="off"
                    className="w-full p-4 mt-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contact.phone}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-lg font-semibold text-start">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    cols="40"
                    rows="4"
                    required
                    autoComplete="off"
                    className="w-full p-4 mt-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contact.message}
                    onChange={handleInput}
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-4 mt-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                  >
                    Submit Now
                  </button>
                </div>
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
