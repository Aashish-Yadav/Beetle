import React, { useState } from 'react'
import axios from 'axios';
import { BackendURL } from '../App';
import { Link, useNavigate } from 'react-router-dom';
import MusicBackground from '../Components/BackGround/MusicBackground';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const data = { email, password };
    const res = await axios.post(`${BackendURL}/user/signin`, data);
    
    console.log("res", res.data.user);

    const token = res.data.token;
    const user = res.data.user;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    navigate('/');   
    window.location.reload(); 

  } catch (err) {
    console.error("Login failed:", err.response?.data || err.message);
    setEmail("");
    setPassword("");
  }
};



  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <MusicBackground/>
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-md flex flex-col space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-purple-700">
        Sign In
      </h2>

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
        Sign In
      </button>
      <Link to='/signup'>
        <span className='text-blue-500 max-w-full'>
          SignUp ?
        </span>
      </Link>
    </form>
  </div>
  )
}

export default SignIn