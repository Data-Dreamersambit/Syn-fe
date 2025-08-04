// src/pages/BlogDetail.jsx
import { useParams } from "react-router-dom";
import img1 from "../course-img/img1.jpeg";
import img2 from "../course-img/img2.jpeg";
import img3 from "../course-img/img3.jpeg";
import img4 from "../course-img/img4.jpeg";
import img5 from "../course-img/img5.jpeg";
import img6 from "../course-img/img6.jpeg";
import img7 from "../course-img/img7.jpeg";

const blogPosts = [
  {
    id: 1,
    title: "How to Maximize Your Productivity",
    content:
      "Full blog content for 'How to Maximize Your Productivity'. Here you can write full details...",
    category: "Productivity",
    image: img1,
    author: "John Doe",
    readTime: "5 min read",
    date: "July 16, 2025",
  },
  {
    id: 2,
    title: "The Future of Remote Work",
    content:
      "Full blog content for 'The Future of Remote Work'. Here you can write full details...",
    category: "Business",
    image: img2,
    author: "Jane Smith",
    readTime: "8 min read",
    date: "July 15, 2025",
  },
  {
    id: 3,
    title: "Understanding Modern Web Development",
    content:
      "Full blog content for 'Understanding Modern Web Development'. Full explanation...",
    category: "Technology",
    image: img3,
    author: "Alex Brown",
    readTime: "10 min read",
    date: "July 12, 2025",
  },
  {
    id: 4,
    title: "Creating Effective Customer Experiences",
    content:
      "Full blog content for 'Creating Effective Customer Experiences'. All strategies explained...",
    category: "Marketing",
    image: img4,
    author: "Sarah Johnson",
    readTime: "7 min read",
    date: "July 10, 2025",
  },
  {
    id: 5,
    title: "Data Security Best Practices",
    content:
      "Full blog content for 'Data Security Best Practices'. Detailed security tips...",
    category: "Security",
    image: img5,
    author: "Michael Green",
    readTime: "6 min read",
    date: "July 8, 2025",
  },
  {
    id: 6,
    title: "Scaling Your Business Successfully",
    content:
      "Full blog content for 'Scaling Your Business Successfully'. Growth tips and more...",
    category: "Business",
    image: img6,
    author: "Laura White",
    readTime: "9 min read",
    date: "July 5, 2025",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id.toString() === id);

  if (!blog) {
    return <div className="p-8 text-center text-red-600">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-lg mb-6" />
      <span className="text-sm text-gray-500">{blog.category} · {blog.date} · {blog.readTime}</span>
      <h1 className="text-4xl font-bold text-gray-800 mt-2 mb-4">{blog.title}</h1>
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
        <div>
          <p className="font-medium">{blog.author}</p>
        </div>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
