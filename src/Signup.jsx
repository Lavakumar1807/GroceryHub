import React from 'react';
import { FaUserCircle} from 'react-icons/fa';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from 'react';
import { supabase } from "./SupabaseClient";
import { useNavigate } from 'react-router-dom';

const Signup = ()=>{
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const formattedUsername = `${username}@example.com`

      const { user, error } = await supabase.auth.signUp({
        email: formattedUsername, // Use username as email
        password,
      });

      if (error) {
        alert(error);
      }
      else{
      const { data, error: insertError } = await supabase
        .from('users')
        .insert([{ username, password }]);

      if (insertError) {
        alert(insertError);
      }
      
      navigate('/login');
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  }

   return (
        <div className='signup'>
            <FaUserCircle id="signupuser"/>
            <form onSubmit={handleSignup}>
                <div className='user'>
                 <FaRegUser className='usericon'/>
                 <input type = "text" placeholder='Username...' name="username" autoComplete='off' required  onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className='password'>
                  <RiLockPasswordLine className='passwordicon' />
                  <input type='password' name="password" placeholder='Password...'  autoComplete='off' required  onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="submit" id="signupbtn" >Signup</button>
            </form>
            <h2>Welcome to Grocery <span>Hub</span> :)</h2>
        </div>
    )
}

export default Signup;