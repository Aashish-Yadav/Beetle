import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { User, UserCircle } from "lucide-react";

function Navbar() {
    const [isLoggedIn , setIsLoggedIn] = useState(false);

    // console.log(token);
    
    useEffect(() => {
    const token = localStorage.getItem('token')
      if(token){
        setIsLoggedIn(true);
      }
      else{
        setIsLoggedIn(false);
      }
    }, [])

    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    }
    
  return (
    <div className='flex justify-between px-8 py-4 bg-[var(--navy)] items-center'>
        <div className='relative'>
            <div className=' text-white font-bold text-4xl'>Beatle</div>
            <div className='absolute top-0 right-0.5 text-[var(--purple)] font-bold text-4xl '>Beatle</div>
        </div>
        <div className='flex gap-4'>
           {!isLoggedIn?(
            <>
             <div className='bg-[var(--purple)] rounded-2xl'>
                <Link to='/signup'><button className='text-white px-3 py-1 font-semibold'>SignUp</button></Link>
            </div>
            <div className='bg-[var(--purple)] rounded-2xl'>
                <Link to='/signin'><button className='text-white px-3 py-1 font-semibold'>SignIn</button></Link>
            </div>
            </>
           ):(
            <>
             <div className='bg-[var(--purple)] rounded-4xl'>
                <button className='text-white px-3 py-1 font-bold'> <User className="w-4  text-white" /></button>
             </div>
            <div className='bg-[var(--purple)] rounded-2xl'>
                <button onClick={handleLogout} className='text-white px-3 py-1 font-semibold'>LogOut</button>
            </div>
            </>
           )}
        </div>
    </div>
  )
}

export default Navbar