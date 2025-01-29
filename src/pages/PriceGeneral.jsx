const PriceGeneral = () => {
  const sections = [
    {
      title: "Energy Efficiency Solutions",
      items: [
        {
          name: "Energy Audits",
          price: "₹2,000–₹5,000",
          details: "depending on property size",
        },
        {
          name: "LED Lighting Upgrades",
          price: "₹300–₹1,000 per light",
          details: "excluding material costs",
        },
        {
          name: "Smart Home Solutions",
          price: "₹5,000–₹15,000",
          details: "based on the number of devices",
        },
        {
          name: "Solar Panel Installation and Maintenance",
          price: "₹40,000–₹1,50,000",
          details: "for 3–5 kW systems",
        },
      ],
    },
    {
      title: "Specialized Electrical Installations",
      items: [
        {
          name: "Home Automation",
          price: "₹10,000–₹50,000",
          details: "depending on the complexity of the system",
        },
        {
          name: "EV Charger Installation",
          price: "₹7,000–₹25,000",
          details: "based on the type of charger",
        },
        {
          name: "Backup Generator Installation",
          price: "₹10,000–₹30,000",
          details: "excluding generator cost",
        },
        {
          name: "Battery Storage Systems",
          price: "₹20,000–₹80,000",
          details: "depending on capacity",
        },
      ],
    },
    {
      title: "Security and Surveillance Systems",
      items: [
        {
          name: "CCTV Camera Installation",
          price: "₹1,500–₹5,000 per camera",
          details: "excluding camera cost",
        },
        {
          name: "Alarm System Installation",
          price: "₹5,000–₹20,000",
          details: "depending on the system",
        },
        {
          name: "Access Control Systems",
          price: "₹10,000–₹25,000",
          details: "based on the number of doors or devices",
        },
        {
          name: "Motion-Sensor Lighting",
          price: "₹500–₹2,000 per fixture",
          details: "",
        },
      ],
    },
    {
      title: "Custom Electrical Projects",
      items: [
        {
          name: "Home Theater Wiring",
          price: "₹5,000–₹15,000",
          details: "depending on setup complexity",
        },
        {
          name: "Landscape Lighting",
          price: "₹500–₹2,000 per light fixture",
          details: "",
        },
        {
          name: "Swimming Pool and Fountain Wiring",
          price: "₹5,000–₹25,000",
          details: "based on project size",
        },
        {
          name: "Decorative/Event Lighting Installation",
          price: "₹3,000–₹20,000",
          details: "project-based",
        },
      ],
    },
    {
      title: "Industrial and Commercial Services",
      items: [
        {
          name: "Machinery Installation",
          price: "₹10,000–₹50,000",
          details: "depending on equipment size and complexity",
        },
        {
          name: "Power Factor Correction",
          price: "₹15,000–₹50,000",
          details: "for industrial setups",
        },
        {
          name: "Industrial Automation",
          price: "₹50,000–₹2,00,000",
          details: "based on system requirements",
        },
        {
          name: "Emergency Lighting Installation",
          price: "₹2,000–₹5,000 per light",
          details: "",
        },
      ],
    },
    {
      title: "Testing and Maintenance Services",
      items: [
        {
          name: "Electrical Safety Inspections",
          price: "₹2,000–₹10,000",
          details: "based on property size",
        },
        {
          name: "Thermal Imaging Services",
          price: "₹3,000–₹8,000 per inspection",
          details: "",
        },
        {
          name: "Appliance Testing and Tagging",
          price: "₹50–₹200 per appliance",
          details: "",
        },
        {
          name: "Preventive Maintenance Contracts",
          price: "₹5,000–₹30,000 per month",
          details: "residential/commercial/industrial",
        },
      ],
    },
    {
      title: "Renewable Energy Solutions",
      items: [
        {
          name: "Wind Turbine Wiring",
          price: "₹50,000–₹1,50,000",
          details: "depending on the system size",
        },
        {
          name: "Hybrid Energy Systems Installation",
          price: "₹75,000–₹3,00,000",
          details: "combining solar, wind, and battery setups",
        },
      ],
    },
    {
      title: "Emergency and Disaster Services",
      items: [
        {
          name: "Power Restoration",
          price: "₹2,000–₹10,000",
          details: "depending on the issue",
        },
        {
          name: "Storm Damage Repair",
          price: "₹5,000–₹20,000",
          details: "based on the extent of damage",
        },
        {
          name: "Emergency Callouts",
          price: "₹1,000–₹5,000",
          details: "additional night or holiday charges may apply",
        },
      ],
    },
    {
      title: "Miscellaneous Services",
      items: [
        {
          name: "UPS Installation",
          price: "₹2,000–₹7,000",
          details: "depending on capacity",
        },
        {
          name: "Voltage Stabilizers Installation",
          price: "₹1,500–₹5,000",
          details: "",
        },
        {
          name: "Cable Management Solutions",
          price: "₹2,000–₹10,000",
          details: "project-based",
        },
        {
          name: "FRP or Steel Cable Tray Installation",
          price: "₹250–₹500 per meter",
          details: "",
        },
      ],
    },
  ];

  const factors = [
    "Location: Rates are higher in urban and metro areas.",
    "Material Costs: Excluded unless specified in the package.",
    "Complexity: Complex setups like automation or industrial systems incur higher charges.",
    "Emergency Work: Expect higher charges for urgent or late-night services.",
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-white">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Pricing Guide
      </h1>
      {sections.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            {section.title}
          </h2>
          <ul className="space-y-4">
            {section.items.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
              >
                <span className="font-medium text-gray-700">{item.name}</span>
                <span className="text-gray-600">
                  {item.price}{" "}
                  <span className="italic text-gray-500">{item.details}</span>
                </span>
              </li>
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
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Factors Affecting Charges
        </h2>
        <ul className="space-y-4">
          {factors.map((factor, index) => (
            <li key={index} className="text-lg text-gray-700">
              {factor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceGeneral;
