import React from 'react';
import Nav from './Nav';
import "./components.css";

function Login() {
  return (
    <>
      <Nav />
      <div className='login-sec'>
        <div className="login-card max-w-2xl mx-auto">
          <div className="login-card bg-white shadow-md border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
              <h3 className="text-xl font-medium  dark:text-white">Sign in to PKShop</h3>
              <div>
                <label htmlFor="email" className="text-sm font-medium  block mb-2 dark:text-gray-300">Your Username</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" required />
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-medium  block mb-2 dark:text-gray-300">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-green-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800" required />
                  </div>
                  <div className="text-sm ml-3">
                    <label htmlFor="remember" className="font-medium  dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm text-green-700 hover:underline ml-auto dark:text-green-500">Lost Password?</a>
              </div>
              <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" className="text-green-700 hover:underline dark:text-green-500">Create account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
