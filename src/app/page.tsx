import Link from 'next/link';
import React from 'react';
// import './styles.css'; // Import the CSS file

const OptionsPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <p className="animated-text">Hi there... This is Asif Islam and here is my CodeAnt AI assigment. The documentation for running the 
          project is in the Github repository. You can also check the repository for the code.
        </p>
        <div className="space-x-4 mt-4">
          <Link href={"/repository"}>
            <button className="bg-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Repository Page
            </button>
          </Link>
          <Link href={"/signin"}>
            <button className="bg-green-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
              Login Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OptionsPage;