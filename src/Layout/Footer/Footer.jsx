import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        {/* <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div> */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ashiful Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
