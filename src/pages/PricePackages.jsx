import React from "react";

const PricePackages = () => {
  const categories = [
    {
      title: "Residential Packages",
      packages: [
        {
          name: "Basic Care Package",
          price: "₹5,000–₹8,000/year",
          frequency: "1 inspection per year",
          idealFor: "Small apartments or homes",
          inclusions: [
            "Electrical safety inspection",
            "Wiring and switchboard check",
            "Circuit breaker and panel testing",
            "Basic report with recommendations",
          ],
        },
        {
          name: "Smart Home Package",
          price: "₹12,000–₹18,000/year",
          frequency: "2 inspections per year",
          idealFor: "Homes with smart devices or solar panels",
          inclusions: [
            "All services in the Basic Care Package",
            "Appliance safety testing",
            "Smart device wiring and troubleshooting",
            "Surge protection check",
            "1 emergency visit per year",
          ],
        },
        {
          name: "Premium Safety Package",
          price: "₹20,000–₹25,000/year",
          frequency: "Quarterly (4 inspections per year)",
          idealFor: "Large homes, villas, or clients with high energy usage",
          inclusions: [
            "All services in the Smart Home Package",
            "Thermal imaging for hotspots",
            "Outdoor and decorative lighting checks",
            "24/7 emergency support (up to 2 visits/year)",
            "Minor repairs (up to ₹2,000/year)",
          ],
        },
      ],
    },
    {
      title: "Commercial Packages",
      packages: [
        {
          name: "Starter Business Package",
          price: "₹15,000–₹25,000/year",
          frequency: "1 inspection per year",
          idealFor: "Small offices or retail spaces",
          inclusions: [
            "Basic wiring and panel inspection",
            "Circuit breaker and surge protector testing",
            "Lighting system check",
            "Report with recommendations",
          ],
        },
        {
          name: "Advanced Business Package",
          price: "₹30,000–₹50,000/year",
          frequency: "2 inspections per year",
          idealFor: "Medium-sized offices, showrooms, or clinics",
          inclusions: [
            "All services in the Starter Business Package",
            "Energy efficiency assessment",
            "Data cable and network system testing",
            "1 emergency visit per year",
            "Free minor repairs (up to ₹5,000/year)",
          ],
        },
        {
          name: "Enterprise Power Package",
          price: "₹75,000–₹1,00,000/year",
          frequency: "Quarterly (4 inspections per year)",
          idealFor: "Large offices or commercial complexes",
          inclusions: [
            "All services in the Advanced Business Package",
            "Thermal imaging for electrical hotspots",
            "Backup generator inspection",
            "Emergency power restoration services",
            "Unlimited emergency callouts (for critical issues)",
          ],
        },
      ],
    },
    {
      title: "Industrial Packages",
      packages: [
        {
          name: "Industrial Basic Plan",
          price: "₹25,000–₹40,000/year",
          frequency: "1 inspection per year",
          idealFor: "Small workshops or warehouses",
          inclusions: [
            "High-voltage system checks",
            "Transformer and control panel inspection",
            "Safety compliance audit",
          ],
        },
        {
          name: "Industrial Plus Plan",
          price: "₹50,000–₹75,000/year",
          frequency: "2 inspections per year",
          idealFor: "Medium-sized factories or plants",
          inclusions: [
            "All services in the Industrial Basic Plan",
            "Preventive maintenance",
            "Machinery wiring inspection",
            "Energy efficiency optimization",
          ],
        },
        {
          name: "Industrial Premium Plan",
          price: "₹1,00,000–₹2,00,000/year",
          frequency: "Quarterly (4 inspections per year)",
          idealFor: "Large factories, power plants, or industrial parks",
          inclusions: [
            "All services in the Industrial Plus Plan",
            "Thermal imaging for advanced diagnostics",
            "Automation and control panel troubleshooting",
            "Unlimited emergency callouts",
            "Regular training sessions for staff on electrical safety",
          ],
        },
      ],
    },
  ];

  const addOns = [
    { name: "Thermal Imaging Diagnostics", price: "₹5,000 per inspection" },
    { name: "Generator Maintenance", price: "₹2,000–₹5,000 per visit" },
    { name: "Appliance Testing & Tagging", price: "₹50–₹200 per appliance" },
    { name: "Solar System Maintenance", price: "₹5,000–₹15,000 per year" },
    { name: "Emergency Visits (Outside Package)", price: "₹2,000–₹5,000 per visit" },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Electrical Service Packages
      </h1>

      {categories.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {category.packages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm italic mb-2">{pkg.price}</p>
                <p className="text-gray-600 text-sm mb-4">{pkg.frequency}</p>
                <p className="text-gray-700 text-sm mb-4">
                  <strong>Ideal For:</strong> {pkg.idealFor}
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex justify-center items-center ">
            <button className="bg-green-500 font-bold  rounded hover:bg-green-700 text-center p-3 m-3 w-full">
              Contact Now
            </button>
          </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Add-On Services</h2>
        <ul className="bg-white shadow-md rounded-lg p-6 space-y-4">
          {addOns.map((addOn, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-4">
              <span className="text-gray-900">{addOn.name}</span>
              <span className="text-gray-600">{addOn.price}</span>
            </li>
            
          ))}
        </ul>
        <div className="flex justify-center items-center ">
            <button className="bg-green-500 font-bold  rounded hover:bg-green-700 text-center p-3 m-3 w-full">
              Contact Now
            </button>
          </div>
      </div>
    </div>
  );
};

export default PricePackages;
