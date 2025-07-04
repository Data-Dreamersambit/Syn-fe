import React, { useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses", icon: "📚" },
    { id: "technology", name: "Technology", icon: "💻" },
    { id: "business", name: "Business", icon: "💼" },
    { id: "healthcare", name: "Healthcare", icon: "🏥" },
    { id: "environment", name: "Environment", icon: "🌱" },
    { id: "social", name: "Social Impact", icon: "🤝" },
    { id: "design", name: "Design", icon: "🎨" }
  ];

  const courses = [
    {
      id: 1,
      title: "Mobile App Development for Local Businesses",
      description: "Learn to build mobile apps that solve real problems for local businesses. Work with actual clients to create solutions.",
      category: "technology",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      skills: ["React Native", "UI/UX", "Client Management"],
    },
    {
      id: 2,
      title: "Sustainable Business Models",
      description: "Design and implement business models that create profit while solving environmental and social challenges.",
      category: "business",

      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
      skills: ["Business Strategy", "Sustainability", "Financial Planning"],
    },
    {
      id: 3,
      title: "Digital Health Solutions",
      description: "Create technology solutions that improve healthcare access and patient outcomes in underserved communities.",
      category: "healthcare",
    
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      skills: ["Healthcare Tech", "Data Analysis", "User Research"],
    },
    {
      id: 4,
      title: "Community Water Management",
      description: "Engineer practical solutions for water scarcity and quality issues in developing regions.",
      category: "environment",
 
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
      skills: ["Environmental Engineering", "Project Management", "Community Engagement"],
    },
    {
      id: 5,
      title: "Educational Technology for Underprivileged Youth",
      description: "Build digital learning tools that bridge the education gap for students in low-resource environments.",
      category: "social",
 
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
      skills: ["EdTech", "Accessibility Design", "Content Creation"],
    },
    {
      id: 6,
      title: "Human-Centered Product Design",
      description: "Master the art of designing products that truly solve user problems through extensive research and testing.",
      category: "design",

      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop",
      skills: ["Design Thinking", "User Research", "Prototyping"],
    }
  ];

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
          Real-World Problem Solving Courses
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Learn by doing. Tackle genuine challenges faced by communities, businesses, and organizations. 
          Every course includes hands-on projects with real impact.
        </p>
      </section>

      {/* Category Filter */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Explore by Field
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {selectedCategory === "all" 
              ? `All Courses (${filteredCourses.length})` 
              : `${categories.find(c => c.id === selectedCategory)?.name} Courses (${filteredCourses.length})`
            }
          </h2>
          <p className="text-gray-600">
            Each course includes mentorship, real client projects, and measurable impact goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {course.description}
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>⏱️ {course.duration}</span>
                    <span>👥 {course.students} students</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="text-yellow-500">⭐</span>
                    <span className="ml-1">{course.rating}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    🎯 Real-World Project:
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {course.realWorldProject}
                  </p>
                  
                  <div className="flex gap-3">
                    <Link
                      to={'/contact'}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Learn More
                    </Link>
                 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make Real Impact?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Join students who are already creating solutions that matter. Every project you complete 
          helps real people and communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Journey
          </Link>
        
        </div>
      </section>
    </div>
  );
};

export default Courses;