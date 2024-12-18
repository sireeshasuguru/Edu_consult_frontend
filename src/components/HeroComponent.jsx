import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function HeroComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const courses = [
    {
      title: 'React for Beginners',
      description: 'Learn React from scratch with hands-on projects.',
      price: '₹800',
    },
    {
      title: 'Mastering JavaScript',
      description: 'Deep dive into advanced JavaScript concepts.',
      price: '₹1000',
    },
    {
      title: 'Python Programming',
      description: 'Learn Python for data analysis and web development.',
      price: '₹900',
    },

  ];

  return (
    <>
      <div className="bg-custom-image  bg-center bg-no-repeat">
        <Navbar />
        <section className="  min-h-[90vh] flex items-center">
          <div className="container mx-auto text-center px-4 ">
            <h1 className="text-5xl text-customBrown font-bold mb-4 ">
              Your Path to Educational Success
            </h1>
            <p className="text-lg mb-6 text-subheading">
              Connect with our expert consultants for personalized guidance on
              educational planning, training, and resources.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#services"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-200"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-200"
              >
                <Link to="/products">Get Started </Link>
              </a>
            </div>
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent opacity-50 pointer-events-none"></div> */}
        </section>
      </div>

      {/* Introduction Section */}
      <section id="introduction " className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Platform</h2>
            <p className="text-gray-700 text-lg">
              We are dedicated to providing high-quality educational resources to help you achieve your goals.
              Whether you're starting your career or upskilling for the future, we have something for everyone!
            </p>
          </div>
          <div className="md:w-1/2 mx-2">
            <img
              src="https://images.unsplash.com/photo-1498079022511-d15614cb1c02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Introduction"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Latest Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Latest Courses</h2>
          <div className="flex justify-center px-10">
            <div className="flex space-x-4 ">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-blue-600 text-white rounded-lg shadow-lg p-6 min-w-[250px] flex-shrink-0"
                >
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm mb-4">{course.description}</p>
                  <div className="font-bold mb-4">{course.price}</div>
                  <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2024 Your Company Name. All rights reserved.</p>
          <p>Follow us on <a href="#" className="text-blue-400 hover:underline">Twitter</a> | <a href="#" className="text-blue-400 hover:underline">LinkedIn</a></p>
        </div>
      </footer>
    </>
  );
}
