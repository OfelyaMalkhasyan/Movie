import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
    <header>
        <nav>
          <div className="bg-gray-900">
            <div className="flex justify-between h-16 px-10 shadow items-center">
              <div className="flex items-center space-x-8">
               <h1 className="text-xl lg:text-2xl font-bold cursor-pointer text-white">MovieLover</h1>
                <div className="hidden md:flex justify-around space-x-4">
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                <Link to="/login" className="bg-indigo-400 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm rounded-md">LogIn</Link>
              </div>
            </div>
          </div>
        </nav>
    </header>
    )
};