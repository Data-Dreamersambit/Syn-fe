import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/Hero.jpeg";
const Home = () => {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h2 className="text-5xl font-extrabold text-blue-800">
          Beyond textbooks , into transformation - real life , real
          opportunities
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Innovative solutions tailored just for you.
        </p>
      </section>
      {/* Hero Section */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Text Column */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Our Platform
            </h1>
            <p className="text-lg text-gray-600 mb-6">
            Synauris aims to bring a meaningful change in how students discover, develop, and apply their potential beyond academics. It envisions a future where students are empowered with essential skills, real-world exposure, and a strong community. By organizing workshops, webinars, and collaborative projects, Synauris strives to bridge the gap between school education and practical knowledge by providing students with internship and real life work Opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="md:w-1/2 bg-gray-100 flex items-stretch justify-center p-8">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img
                src={Hero}
                className="w-full h-full object-cover rounded-lg"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Customizable Training",
              description:
                "Tailor our training to fit your specific requirements and goals.",
              icon: "🛠️",
            },
            {
              title: "Excellent Support",
              description:
                "Our team is always available to assist you with any questions or concerns.",
              icon: "🌟",
            },
            {
              title: "Seamless Preparation",
              description:
                "Easily learn and be market ready with our platform to contribute to companies and workflows.",
              icon: "🔄",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          What Our students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "Feeling super grateful to be interning at Synaurius✨The work environment is so positive ☘, the mentors are incredibly friendly and supportive 💌, and every day brings a new learning experience 💡It truly feels like a place where creativity is valued and growth is constant 🫶🏻",
              author: "Aman",
              // position: "college1, location1",
            },
            // {
            //   quote:
            //     "The customer support team is exceptional. They've helped us every step of the way.",
            //   author: "student 2",
            //   position: "college 2, location 2",
            // },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have transformed their
          operations with our platform.
        </p>
        <Link
          to="/signup"
          className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors inline-block"
        >
          Sign Up Now
        </Link>
      </section> */}
    </div>
  );
};

export default Home;
