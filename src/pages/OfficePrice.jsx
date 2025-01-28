// src/OfficeMaintenance.js

import React from 'react';

const officeMaintenancePackages = [
  {
    title: 'Basic Office Maintenance Packages',
    price: '₹10,000 to ₹30,000 per year (for small to medium-sized offices, around 1,000 to 3,000 sq. ft.)',
    services: [
      'Regular inspections of electrical systems (wiring, lighting, switches, circuit breakers).',
      'Minor electrical repairs and replacements (bulbs, switches, fuses).',
      'Plumbing checks and minor fixes (leaks, faucets, toilets).',
      'HVAC (heating, ventilation, air conditioning) checks and basic maintenance.',
      'Basic cleaning and servicing of common areas (lobbies, washrooms).'
    ]
  },
  {
    title: 'Comprehensive Office Maintenance Packages',
    price: '₹30,000 to ₹70,000 per year (for offices above 3,000 sq. ft. or larger setups)',
    services: [
      'Everything in the basic package, plus:',
      'Advanced electrical maintenance (panel upgrades, heavy-duty equipment servicing).',
      'HVAC servicing (air conditioners, ventilation systems, etc.).',
      'Pest control services (regular treatment for rodents, insects, etc.).',
      'Deep cleaning of common areas, carpets, and floors.',
      'Plumbing services (major issues like pipe replacements, drainage issues).',
      'Regular servicing of office appliances like water dispensers, refrigerators, and microwaves.'
    ]
  },
  {
    title: 'Premium Office Maintenance Packages',
    price: '₹70,000 to ₹1,50,000+ per year (for larger offices or high-end business setups)',
    services: [
      'All services in comprehensive packages, plus:',
      '24/7 emergency response for electrical, plumbing, and HVAC issues.',
      'Preventive maintenance and inspection of critical equipment (servers, backup power systems, etc.).',
      'Regular checks for fire safety equipment (fire extinguishers, alarms, sprinklers).',
      'Detailed interior maintenance (painting, furniture repairs, etc.).',
      'Green cleaning solutions (environmentally friendly cleaning agents, waste management).',
      'IT infrastructure support (server maintenance or networking checks).'
    ]
  },
  {
    title: 'Pay-Per-Service Maintenance',
    price: '₹500 to ₹5,000 per service visit, depending on the complexity of the issue.',
    services: [
      'Minor electrical repairs (bulb, socket, or switch replacements).',
      'Plumbing fixes (clogged drains, leaky faucets).',
      'A/C or HVAC servicing.',
      'General cleaning or pest control.'
    ]
  },
  
];



const OfficeMaintenance = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">Office Maintenance Packages in India</h1>
      
      {officeMaintenancePackages.map((pkg, index) => (
        <section key={index} className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-teal-600">{pkg.title}</h2>
          <p className="text-lg font-medium text-gray-700"><strong>Price:</strong> {pkg.price}</p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            {pkg.services.map((service, idx) => (
              <li key={idx} className="text-gray-600">{service}</li>
            ))}
          </ul>
          <div className="flex justify-center items-center ">
            <button className="bg-green-500 font-bold  rounded hover:bg-green-700 text-center p-3 m-3 w-full">
              Contact Now
            </button>
          </div>
        </section>
      ))}

     

      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-teal-600">Additional Considerations for Office Maintenance:</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li className="text-gray-600"><strong>Size of the Office</strong>: Larger offices incur higher maintenance costs.</li>
          <li className="text-gray-600"><strong>Location</strong>: Maintenance costs vary across different cities and regions.</li>
          <li className="text-gray-600"><strong>Frequency of Service</strong>: Offices with high usage may require more frequent visits.</li>
        </ul>
        
      </section>

      <h2 className="text-2xl font-semibold mb-3 text-teal-600">Conclusion</h2>
      <p className="text-lg text-gray-700">
        To get a precise estimate for office maintenance in India, it is advisable to contact local service providers and get a customized quote based on the size of the office, services required, and frequency of visits. Many service providers also allow flexible terms, where you can opt for a package or a pay-per-service model.
      </p>
      <div className="flex justify-center items-center ">
            <button className="bg-green-500 font-bold  rounded hover:bg-green-700 text-center p-3 m-3 w-full">
              Contact Now
            </button>
          </div>
    </div>
  );
};

export default OfficeMaintenance;
