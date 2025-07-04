import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-700">
                Get In Touch
              </h2>
              <p className="text-gray-600">
                Have questions or need assistance? Contact our team and we'll be
                happy to help. You can reach us through any of the methods
                below.
              </p>

              <div className="space-y-4 mt-6">
               

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">synauris@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">
                      Bangalore,India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Support Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-600">Weekend: 10AM - 3PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Send us a message
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700 block"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700 block"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 block"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700 block"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Location
            </h2>
            <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for map */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                Interactive Map Would Be Displayed Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
