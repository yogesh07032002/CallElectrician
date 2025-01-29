import React from "react";

const PriceMaintenance = () => {
  const packages = [
    {
      title: "Basic Annual Maintenance Contracts (AMC)",
      price: "₹2,000 to ₹5,000 per year",
      description: "Covers regular checks, minor repairs, and maintenance of electrical systems.",
      services: [
        "Annual inspection of wiring, switches, and sockets.",
        "Minor repairs and replacements like switches, sockets, and bulbs.",
        "Replacement of fuses and circuit breakers.",
        "Safety checks for electrical faults.",
        "Emergency support in case of breakdowns.",
      ],
    },
    {
      title: "Premium Maintenance Packages",
      price: "₹5,000 to ₹10,000 per year",
      description: "Offers extensive services, priority support, and emergency coverage.",
      services: [
        "Everything in the basic package.",
        "Replacement of old wiring, if required.",
        "Testing and maintenance of the electrical panel.",
        "Repair or replacement of major appliances.",
        "Free consultation for electrical upgrades.",
        "24/7 emergency service with no extra charges.",
      ],
    },
    {
      title: "Pay-Per-Service or On-Demand Charges",
      price: "₹200 to ₹500 per visit",
      description: "For one-time services without any annual commitment.",
      services: [
        "Minor electrical repairs.",
        "Replacement of switches, sockets, and bulbs.",
        "Checking for electrical faults and safety checks.",
      ],
    },
  ];


  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
        Electrician Maintenance Packages in India
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {pkg.title}
            </h2>
            <p className="text-gray-600 text-sm italic mb-2">{pkg.price}</p>
            <p className="text-gray-800 text-sm mb-4">{pkg.description}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {pkg.services.map((service, i) => (
                <li key={i} className="text-sm">{service}</li>
              ))}
            </ul>
            <div className="flex justify-center items-center ">
            <a href="https://wa.me/917620162336" target="_blank">
            <button className="bg-green-500 font-bold  rounded hover:bg-green-700 text-center p-3 m-3 w-full">
              Contact Now
            </button>
            </a>
          </div>
          </div>
          
        ))}
      </div>
    
    </div>
  );
};

export default PriceMaintenance;
