import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
      <header>
        <nav>
          <div class="bg-gray-900">
            <div class="flex justify-between h-16 px-10 shadow items-center">
              <div class="flex items-center space-x-8">
               <h1 class="text-xl lg:text-2xl font-bold cursor-pointer text-white">MovieLover</h1>
                <div class="hidden md:flex justify-around space-x-4">
                </div>
              </div>
              <div class="flex space-x-4 items-center">
                <Link to="/login" class="bg-indigo-400 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm rounded-md">LogIn</Link>
              </div>
            </div>
          </div>
        </nav>
        <div class="h-screen bg-gray-100 flex justify-center">
          <div class="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
            <form action="">
              <div class="mb-6">
                <label for="name" class="block text-gray-800 font-bold">LogIn:</label>
                <input type="text" name="name" id="name" placeholder="Enter your LogIn..." class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
              </div>
      
              <div>
                <label for="email" class="block text-gray-800 font-bold">Password:</label>
                <input type="text" name="email" id="email" placeholder="Enter your Password..." class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
      
                <Link to="/login" class="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</Link>
              </div>
              <butt class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</butt>
            </form>
          </div>
        </div>
      </header>
    )
  }
