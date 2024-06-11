import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 fixed bottom-0 left-0 w-full">
      &copy; {new Date().getFullYear()} Kshitiz Sharma. All rights reserved.
    </footer>
  );
};

export default Footer;
