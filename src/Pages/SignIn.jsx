import React, { useState } from 'react'
import ThreeBackground from '../Components/ThreeBackground';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <ThreeBackground/>
        <form onSubmit={handleSubmit}>
            <input
            placeholder='Enter Email'
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            />
            <input
            placeholder='Enter Password'
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            />
            <button type="submit">
                SignIn
            </button>
        </form>
    </div>
  )
}

export default SignIn