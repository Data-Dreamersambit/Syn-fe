import React, {useState} from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Globe, BookOpen } from "lucide-react";
import Anshika from '../assets/Anshika.jpg'
import Sakshi from '../assets/Sakshi.jpg'
import Sambit from '../assets/Sambit.jpg'
import Sriharsa from '../assets/Sriharsa.jpg'
import Subhankar from '../assets/Subhankar.jpg'
import Suman from '../assets/Suman.jpg'
import Niyatee from '../assets/Niyatee.jpg'


const About = () => {
  const sections = [
    "Leadership",
    "Development",
    "Marketing",
    "Operations"
  ];
  
  const [activeSection, setActiveSection] = useState(sections[0]);
  const memberImages = [
  Anshika, Sakshi, Sambit, Sriharsa, Subhankar, Suman, Niyatee ];

  const teamMembers = {
    Leadership: [
      { 
        name: "Anshika", 
        position: "CEO & Founder", 
        image: memberImages[0]
      },
      { 
        name: "Niyatee", 
        position: "Cofounder", 
        image: memberImages[6]
      },
     
    ],
    Development: [
      { 
        name: "Suman", 
        position: "CTO", 
        image: memberImages[5]
      },
      { 
        name: "Subhankar", 
        position: "Co-Head", 
        image: memberImages[4]
      },
      { 
        name: "Sambit", 
        position: "Full Stack Developer", 
        image: memberImages[2]
      }
    ],
    Marketing: [
      // { 
      //   name: "Sriharsha", 
      //   position: "CMO", 
      //   image: memberImages[3]
      // },
       
    ],
    Operations: [
      { 
        name: "Sakshi", 
        position: "Head of HR",
        image: memberImages[1]
      },
       
    ]
  };

  return (
    <div className="container mx-auto px-4 py-10 space-y-12">
      {/* Hero Section */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Our Company
            </h1>
            <p className="text-lg text-gray-600 mb-6">
             Our company is trying to build a world where every student gains real-world experience and practical skills through meaningful opportunities—created by students, for students. We envision a future where learning is driven by doing, and every fresher gets the chance they deserve.

            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Our Courses
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Team collaboration"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Mission
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="mx-auto text-blue-600 mb-6 h-16 w-16" />
            <p className="text-xl text-gray-600 mb-4">
              
At Synauris, our mission is to provide hands-on experience to students by connecting them with startups, helping them build relevant skills, recognize their gaps, and grow into confident professionals. We are a student-led initiative committed to guiding freshers in the right direction through real, impactful opportunities.
            </p>
           
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Innovation",
              description:
                "We consistently push boundaries and explore new possibilities to deliver cutting-edge solutions.",
              icon: <BookOpen className="h-10 w-10 text-blue-600" />,
            },
            {
              title: "Integrity",
              description:
                "We uphold the highest ethical standards in all our business practices and relationships.",
              icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
            },
            {
              title: "Customer Focus",
              description:
                "We prioritize understanding and meeting our customers' needs above all else.",
              icon: <Users className="h-10 w-10 text-blue-600" />,
            },
            {
              title: "Excellence",
              description:
                "We are committed to delivering exceptional quality in everything we do.",
              icon: <Globe className="h-10 w-10 text-blue-600" />,
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full"
            >
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Our Team
      </h2>
      
      {/* Section navigation buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeSection === section
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {section}
          </button>
        ))}
      </div>
      
      {/* Team members grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers[activeSection].map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-blue-600 mb-3">{member.position}</p>
            <p className="text-gray-600">{member.bio}</p>
            
            {/* Social media icons */}
            <div className="flex justify-center space-x-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default About;
