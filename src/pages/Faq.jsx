import React, { useState } from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "For Students",
      questions: [
        {
          question: "How do I apply for an internship?",
          answer:
            "To apply for an internship, create an account on our platform, complete your profile with your skills, education, and experience, then browse and apply for internships that match your interests and qualifications."
        },
        {
          question: "What verticals/fields do you offer internships in?",
          answer:
            "We offer internships across various verticals including Technology (Software Development, Data Science, UI/UX Design), Marketing (Digital Marketing, Content Creation, Social Media), Business (Finance, Operations, Human Resources), Engineering, Healthcare, Education, and many more."
        },
        {
          question: "Are the internships paid or unpaid?",
          answer:
            "Our platform hosts both paid and unpaid internships. The compensation details are clearly mentioned in each internship listing. We encourage companies to offer stipends, but some learning-focused opportunities may be unpaid."
        },
        {
          question: "Can I apply if I'm still in school/college?",
          answer:
            "Yes! We welcome applications from students at all academic levels. Many internships are specifically designed for current students, while others might require a specific year of study or skill level."
        },
        {
          question: "How long do internships typically last?",
          answer:
            "Internship durations vary by company and role. Most range from 2-6 months, with options for part-time (10-20 hours/week) or full-time (30-40 hours/week) commitments. The duration is always specified in the internship listing."
        }
      ]
    },
   
    {
      title: "Platform & Technical",
      questions: [
        {
          question: "Is my personal/company information secure?",
          answer:
            "We take data security very seriously. All personal and company information is encrypted and stored securely. We never share your data with third parties without explicit consent. Our platform complies with relevant data protection regulations."
        },
        {
          question: "Can I use the platform on mobile devices?",
          answer:
            "Yes, our platform is fully responsive and works on smartphones and tablets. We also offer mobile apps for iOS and Android for a more optimized experience on the go."
        },
        {
          question: "How do I reset my password?",
          answer:
            "Click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you instructions to reset your password securely."
        },
        {
          question: "Are there any fees for students?",
          answer:
            "No, our platform is completely free for students. You can create a profile, apply for internships, and access learning resources without any charges."
        },
        {
          question: "How can I contact support?",
          answer:
            "You can reach our support team via the Contact Us page, by emailing support@yourplatform.com, or through the live chat feature available in your account dashboard. We aim to respond to all queries within 24 hours."
        }
      ]
    },
    {
      title: "Certifications & Learning",
      questions: [
        {
          question: "Do interns receive certificates upon completion?",
          answer:
            "Yes, companies can issue digital certificates through our platform after successful completion of internships. These certificates are verifiable and can be directly linked to your professional profiles on LinkedIn and other platforms."
        },
        {
          question: "Are there learning resources available for interns?",
          answer:
            "Absolutely! We offer a knowledge base with industry-specific learning materials, skill development courses, and webinars. Many of these resources are free, while premium content is available through our learning subscription."
        },
        {
          question: "Can I get academic credit for internships?",
          answer:
            "This depends on your educational institution's policies. Many of our partner companies offer internships that qualify for academic credit. We provide the necessary documentation to support your credit application with your school."
        },
        {
          question: "How are internships evaluated?",
          answer:
            "Companies typically set project goals and performance metrics at the beginning of internships. Our platform includes tools for regular feedback, midterm reviews, and final evaluations to ensure a structured learning experience."
        },
        {
          question: "Can I showcase my internship projects in my portfolio?",
          answer:
            "In most cases, yes. However, this depends on the confidentiality policies of the company. Many internships include clear guidelines about what work can be included in your portfolio. Always check with your supervisor before publishing internship work."
        }
      ]
    }
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our internship platform. If you can't find what you're looking for, please don't hesitate to contact our support team.
          </p>
        </div>
      </section>

      {/* FAQ Categories Navigation */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {faqCategories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
              onClick={() => {
                const element = document.getElementById(`category-${index}`);
                element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={`category-${categoryIndex}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const index = `${categoryIndex}-${faqIndex}`;
                  return (
                    <div 
                      key={index} 
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full p-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                        onClick={() => toggleAccordion(index)}
                      >
                        <span className="font-medium text-gray-800">{faq.question}</span>
                        <span className="text-blue-600">
                          {activeIndex === index ? '−' : '+'}
                        </span>
                      </button>
                      {activeIndex === index && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Faq;