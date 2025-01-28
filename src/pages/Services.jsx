import { FaBuilding, FaHome, FaIndustry } from "react-icons/fa";

import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 pt-20 pb-16 md:pt-28">
      {/* Ensure padding top (pt-20) for small screens, and larger padding (pt-28) for medium and above */}
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-black mb-4">
            Our Premium Electrical Services
          </h1>
          <p className="text-black text-lg">
            We deliver top-notch electrical solutions for residential, commercial, and industrial needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Residential Services */}
          <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <FaHome className="text-blue-500 text-4xl" />
              <h2 className="text-3xl font-bold text-black group-hover:text-blue-600">
                Residential Services
              </h2>
            </div>
            <ul className="list-disc list-inside text-black space-y-2 text-xl">
              <li>Wiring and Rewiring</li>
              <li>Lighting Installation</li>
              <li>Electrical Repairs</li>
              <li>Smart Home Systems</li>
              <li>Backup Generators</li>
              <li>EV Charger Installation</li>
              <li>Ceiling Fan Installation</li>
              <li>Outdoor Lighting and Security</li>
            </ul>
          </div>

          {/* Commercial Services */}
          <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <FaBuilding className="text-green-500 text-4xl" />
              <h2 className="text-3xl font-bold text-black group-hover:text-green-600">
                Commercial Services
              </h2>
            </div>
            <ul className="list-disc list-inside text-black space-y-2 text-xl">
              <li>System Design and Installation</li>
              <li>Lighting Solutions</li>
              <li>Data Cabling</li>
              <li>Fire Alarm Systems</li>
              <li>Power Distribution Solutions</li>
              <li>Energy Efficiency Upgrades</li>
              <li>Load Balancing</li>
              <li>Emergency Lighting</li>
            </ul>
          </div>

          {/* Industrial Services */}
          <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6">
              <FaIndustry className="text-yellow-500 text-4xl" />
              <h2 className="text-3xl font-bold text-black group-hover:text-yellow-600">
                Industrial Services
              </h2>
            </div>
            <ul className="list-disc list-inside text-black space-y-2 text-xl">
              <li>Machine Wiring and Repair</li>
              <li>Energy Management Systems</li>
              <li>High Voltage Systems</li>
              <li>Substation Installation</li>
              <li>Process Control Systems</li>
              <li>Industrial Automation Solutions</li>
              <li>Power Quality Analysis</li>
              <li>Transformer Maintenance</li>
            </ul>
          </div>
        </div>

        {/* Connect Now Button */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="text-2xl bg-black text-white rounded py-3 px-6 font-bold inline-block hover:bg-green-500 transition"
          >
            Connect Now
          </Link>
        </div>
      </div>
    </section>
  );
};
