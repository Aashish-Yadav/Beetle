import React, { useState } from 'react'
import { BackendURL } from '../App';
import axios from 'axios'
import ThreeBackground from '../Components/ThreeBackground';

function SignUp() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const data = {username,email,password}
            const res = await axios.post(`${BackendURL}/user/signup`,data)
            console.log(res.data);
        }
        catch(error){

        }
    }

return (
  <div className="relative flex items-center justify-center min-h-screen">
    <ThreeBackground />

    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-md flex flex-col space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-purple-700">
        Sign Up
      </h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-lg"
      >
        Sign Up
      </button>
    </form>
  </div>
);

}

export default SignUp