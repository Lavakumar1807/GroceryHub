import React from 'react';
import { Link } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { supabase } from './SupabaseClient';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

const Login = ()=>{    
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
       e.preventDefault();
       try {
        const formattedUsername = `${username}@example.com`;
        const { user, error } = await supabase.auth.signInWithPassword({
          email: formattedUsername, // Use username as email
          password,
        });
  
        if (error) {
          alert(error);
        }else{
           navigate('/home');
        }
      } catch (error) {
        console.error('Error signing in:', error.message);
      }
    };

    return (
        <div className='login'>
            <FaRegUserCircle id="loginuser" />
            <form onSubmit={handleLogin}>
                <div className="user">
                 <FaRegUser className='usericon'/>
                  <input type = "text" placeholder='Username..' name="username" autoComplete='off' required onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="password">
                  <RiLockPasswordLine className="passwordicon"/>
                  <input type = "password" placeholder='Password...' name="password" autoComplete='off' required onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="submit" id="loginbtn" >Login</button>
            </form>
            <p>Don't have an account ? <Link to="/signup" id="signuplink"> Create account</Link></p>
        </div>
    )
}

export default Login;