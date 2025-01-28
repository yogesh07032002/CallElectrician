import React from "react";

export const About = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        {/* About Title */}
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
            Welcome to CallElectrician
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Your trusted partner for all electrical needs. We specialize in
            providing exceptional electrical solutions for homes, businesses,
            and industries. Our commitment to safety, reliability, and
            efficiency ensures your complete peace of mind.
          </p>
        </div>

        {/* What Sets Us Apart Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            What Sets Us Apart?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Skilled Professionals",
                description:
                  "Our team brings unmatched expertise to every project.",
                icon: "👷‍♂️",
              },
              {
                title: "Safety First",
                description:
                  "We ensure safety with every service we provide.",
                icon: "⚡",
              },
              {
                title: "Prompt Service",
                description:
                  "Quick response and reliable solutions on time.",
                icon: "⏱️",
              },
              {
                title: "Comprehensive Solutions",
                description:
                  "From installations to repairs, we cover it all.",
                icon: "🔧",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Vision & Mission
          </h2>
          <div className="text-left space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              <p className="text-lg text-gray-600 mt-2">
                To be the most trusted and innovative electrical service
                provider, delivering sustainable and efficient solutions to
                power your homes and businesses.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              <p className="text-lg text-gray-600 mt-2">
                To provide exceptional electrical services with a focus on
                safety, efficiency, and customer satisfaction, ensuring every
                client enjoys seamless electrical experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-100 text-gray-800 py-12 px-6 rounded-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <ul className="text-left space-y-6 text-lg md:text-xl">
            {[
              {
                title: "Transparent Pricing",
                description:
                  "No hidden costs, just honest and fair quotes.",
                icon: "💰",
              },
              {
                title: "State-of-the-Art Tools",
                description:
                  "We use advanced tools and techniques for superior results.",
                icon: "🛠️",
              },
              {
                title: "Customer-Centric Approach",
                description: "Your satisfaction is our priority.",
                icon: "😊",
              },
              {
                title: "Eco-Friendly Practices",
                description:
                  "Offering energy-efficient solutions to reduce your carbon footprint.",
                icon: "🌱",
              },
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-2xl mr-4">{benefit.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-gray-600 mt-1">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-lg md:text-xl mb-6">
            Whether you need an urgent repair or a complete upgrade, we’re here
            to help. Let us light the way to a safer and more efficient space!
          </p>
          <a href="/contact">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md transform hover:scale-105 transition-all duration-300">
              Contact Us Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
