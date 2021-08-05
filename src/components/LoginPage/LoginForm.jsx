import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    return (
      <div>
        <div className="h-screen bg-gray-100 flex justify-center">
          <div className="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
            <form action="">
              <div className="mb-6">
                <label for="name" className="block text-gray-800 font-bold">LogIn:</label>
                <input type="text" name="name" id="name" placeholder="Enter your LogIn..." className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
              </div>
      
              <div>
                <label for="email" className="block text-gray-800 font-bold">Password:</label>
                <input type="text" name="email" id="email" placeholder="Enter your Password..." className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
      
                <Link to="/login" className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</Link>
              </div>
              <Link to ="/movie"><button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</button> </Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
