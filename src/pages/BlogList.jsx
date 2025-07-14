import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../course-img/img1.jpeg'
import img2 from '../course-img/img2.jpeg'
import img3 from '../course-img/img3.jpeg'
import img4 from '../course-img/img4.jpeg'
import img5 from '../course-img/img5.jpeg'
import img6 from '../course-img/img6.jpeg'
import img7 from '../course-img/img7.jpeg'


const BlogList = () => {
  // Sample blog posts data - in a real app, this would come from an API
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "How to Maximize Your Productivity",
      excerpt:
        "Discover the best practices and tools that can help you boost your productivity and achieve more in less time.",
      
      category: "Productivity",
      image: img1,
    },
    {
      id: 2,
      title: "The Future of Remote Work",
      excerpt:
        "As remote work becomes more mainstream, we explore the trends and technologies shaping the future of how we work.",
     
      category: "Business",
      image:img2,
    },
    {
      id: 3,
      title: "Understanding Modern Web Development",
      excerpt:
        "A comprehensive guide to the latest technologies, frameworks, and methodologies in modern web development.",
     
      category: "Technology",
      image:img3,
    },
    {
      id: 4,
      title: "Creating Effective Customer Experiences",
      excerpt:
        "Learn how to design customer experiences that build loyalty and drive growth for your business.",
     
      category: "Marketing",
      image: img4,
    },
    {
      id: 5,
      title: "Data Security Best Practices",
      excerpt:
        "Essential strategies to protect your business and customer data in an increasingly complex digital landscape.",
     
      category: "Security",
      image: img5,
    },
    {
      id: 6,
      title: "Scaling Your Business Successfully",
      excerpt:
        "Key insights and strategies for growing your business while maintaining quality and culture.",
    
      category: "Business",
      image: img6,
    },
  ]);

  // State for category filter
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

  // Filter posts by category
  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
      <div className="max-w-7xl mx-auto py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest insights, industry trends, and expert
            advice to help you succeed in today's competitive landscape.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={img7}
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm ml-2">May 8, 2025</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  The Complete Guide to Digital Transformation
                </h2>
                <p className="text-gray-600 mb-6">
                  Digital transformation is revolutionizing how businesses operate and
                  deliver value to customers. Learn how to navigate this complex
                  journey and position your organization for success in the digital age.
                </p>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <p className="font-medium">Robert Wilson</p>
                    <p className="text-gray-500 text-sm">12 min read</p>
                  </div>
                </div>
                <Link
                  to="/blog/digital-transformation-guide"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-block self-start"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                    <span className="text-gray-700 text-sm font-medium">
                      {post.author}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default BlogList;