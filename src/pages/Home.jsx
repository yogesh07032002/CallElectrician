import React, { useEffect, useState } from "react";

import { Contact } from "./Contact";
import { PricingAll } from "../components/PricingAll";
import { Services } from "./Services";

// Reusable Counter Component
const CounterCard = ({ count, label }) => (
  <div className="bg-gray-600 text-white p-5 rounded-lg shadow-lg mt-10 md:mt-0">
    <h2 className="text-4xl font-bold">{count}</h2>
    <p className=" text-lg font-bold">{label}</p>
  </div>
);

export const Home = () => {
  // State management for counters
  const [counters, setCounters] = useState({
    registerPeople: 0,
    happyClients: 0,
    vendors: 0,
    serviceSupport: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        registerPeople: Math.min(prev.registerPeople + 1, 50),
        happyClients: Math.min(prev.happyClients + 100, 10000),
        vendors: Math.min(prev.vendors + 5, 500),
        serviceSupport: Math.min(prev.serviceSupport + 1, 24),
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-10 md:py-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full gap-4 md:gap-0">
            {/* Content Section */}
            <div className="px-6 w-full md:w-full flex flex-col justify-center items-start md:items-start">
              <p className="text-xl font-medium text-left mb-5">
                Reliable Electrical Services for Your Home, Office, and Industry
              </p>
              <h1 className="text-2xl md:text-4xl font-bold mb-6 text-left">
                Empowering Safe and Smart Spaces with Expertise and Innovation
              </h1>
              <p className="text-xl mb-10 text-left">
                Your trusted partner for all electrical solutions — from
                installations and repairs to energy-efficient upgrades and
                annual maintenance packages.
              </p>
              <div className="flex gap-4 justify-start  md:ml-0  mb-5">
                <a href="https://wa.me/917620162336" target="_blank">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 font-bold rounded shadow-md">
                    Connect Now
                  </button>
                </a>

                <a href="/services" target="_blank">
                  <button target="_blank"  className="bg-red-500 font-bold hover:bg-gray-600 text-white py-3 px-5 rounded shadow-md">
                    Learn More
                  </button>
                </a>
                <a href="tel:7620162336" target="_blank">
                  <button className="bg-blue-500 font-bold hover:bg-gray-600 text-white py-3 px-5 rounded shadow-md">
                    Call Now
                  </button>
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-full flex justify-center items-center">
              <img
                src="/homeimg.jpg"
                alt="Electrician working on equipment"
                className="w-full max-w-xl md:max-w-2xl rounded shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Auto Increment Section */}
        <section className="bg-gray-900 text-white pb-10">
          <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-5">
            <CounterCard
              count={`${counters.registerPeople}+`}
              label="Register People"
              cardClass="bg-green-500 hover:bg-green-600"
            />
            <CounterCard
              count={`${counters.happyClients}+`}
              label="Happy Clients"
              cardClass="bg-green-500 hover:bg-green-600"
            />
            <CounterCard
              count={`${counters.vendors}+`}
              label="Vendors"
              cardClass="bg-green-500 hover:bg-green-600"
            />
            <CounterCard
              count={`${counters.serviceSupport}/7`}
              label="Service & Support"
              cardClass="bg-green-500 hover:bg-green-600"
            />
          </div>
        </section>

        {/* Reusable Sections */}
        {[
          {
            title: "Need an Electrician? We’ve Got You Covered!",
            subtitle: "Current Solutions for Every Need!",
            content:
              "From minor fixes to major electrical overhauls, we’re here to keep your space powered and safe. Our team of experts delivers fast, reliable, and professional electrical services tailored to your requirements.",
            button1: { label: "Connect Now", link: "https://wa.me/7620162336",  }, // WhatsApp link
            button2: { label: "Learn More", link: "/services" }, // Services page link
            image: "/homeimg2.png", // Specific image for this section
          },
          {
            title:
              "Are You an Electrician Looking for Work? We’ve Got Opportunities for You!",
            subtitle:
              "Connect with Customers, Build Your Reputation, and Grow Your Career!",
            content:
              "Are you a skilled electrician searching for jobs or projects that match your expertise? Join our platform to connect with customers in your area and find work opportunities that suit your skills and schedule.",
            button1: { label: "Join Now", link: "https://wa.me/7620162336" }, // WhatsApp link
            button2: { label: "Learn More", link: "/services" }, // Services page link
            image: "/homeimg3.jpg", // Specific image for this section
          },
          {
            title:
              "Calling All Electrical Vendors! Partner With Us and Grow Your Business!",
            subtitle:
              "Expand Your Reach, Boost Sales, and Connect With Customers Nationwide!",
            content:
              "Are you a vendor offering top-quality electrical supplies or equipment? Join our platform and connect with electricians and businesses in need of your products. Showcase your inventory and increase your sales effortlessly.",
            button1: { label: "Join Now", link: "https://wa.me/7620162336" }, // WhatsApp link
            button2: { label: "Learn More", link: "/services" }, // Services page link
            image: "/homeimg4.jpg", // Specific image for this section
          },
        ].map((section, index) => (
          <section
            className={`bg-gray-800 text-white py-12 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={index}
          >
            <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
              {/* Image Section */}
              <div className="w-full flex justify-center mb-6 md:mb-0">
                <img
                  src={section.image}
                  alt={section.subtitle}
                  className="w-full max-w-md text-xl rounded-lg shadow-xl"
                />
              </div>

              {/* Text Content Section */}
              <div className="px-6">
                <p className="text-xl font-semibold text-gray-400 mb-2">
                  {section.subtitle}
                </p>
                <h1 className="text-3xl font-extrabold text-white mb-4">
                  {section.title}
                </h1>
                <p className="text-white mb-6">{section.content}</p>

                {/* Button Section */}
                <div className="flex gap-6">
                  <a
                    href={section.button1.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                      {section.button1.label}
                    </button>
                  </a>
                  <a href={section.button2.link} target="_blank">
                    <button className="bg-red-500 hover:bg-gray-600 text-white py-3 px-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400">
                      {section.button2.label}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Why Choose Us Section */}
        <section className="bg-gray-900 text-white py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Fast & Efficient",
                content:
                  "We deliver quick and effective solutions for all your electrical needs, ensuring minimal downtime.",
              },
              {
                title: "Safety Guaranteed",
                content:
                  "Our top priority is safety, ensuring all work adheres to industry standards and regulations.",
              },
              {
                title: "Affordable Pricing",
                content:
                  "We provide transparent, competitive pricing without compromising quality.",
              },
              {
                title: "Certified Experts",
                content:
                  "Our electricians are certified professionals with years of experience in the field.",
              },
              {
                title: "Customer Support",
                content:
                  "We’re available 24/7 to provide assistance whenever you need it.",
              },
              {
                title: "Sustainable Solutions",
                content:
                  "We focus on environmentally friendly and sustainable electrical solutions.",
              },
            ].map((item, idx) => (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg" key={idx}>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
        <Services />
        <PricingAll/>
        <Contact />
      </main>
    </>
  );
};
