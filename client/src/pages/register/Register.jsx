import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './register.css'

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register',{
        username: username,
        email: email,
        password: password,
      })
      res.data && window.location.replace("/login");
    }
    catch(err) {
      setError(true);
    }
  }

  return (
    <div>
      <Navbar />
      <div className='register'>
          <span className='registerTitle'>Register</span>
          <form className='registerForm' onSubmit={handleSubmitForm}>
              <label>Username</label>
              <input type='text' className='registerInput' placeholder='Enter uername...' 
                onChange={(e)=>(
                  setUsername(e.target.value)
                )}
              />
              <label>Email</label>
              <input type='text' className='registerInput' placeholder='Enter your email...' 
                onChange={(e)=>(
                  setEmail(e.target.value)
                )}
              />
              <label>Password</label>
              <input type='password' className='registerInput' placeholder='Enter your password...' 
                onChange={(e)=>(
                  setPassword(e.target.value)
                )}
              />
              <button type='submit' className='registerBtn'>Register</button>
              {error && <p>có lỗi</p>}
          </form>
          <button className='registerLoginBtn'><Link to={'/login'} style={{
                          textDecoration: "none",
                          color: "inherit"
                      }}>Login</Link></button>
      </div>
    </div>
  )
}
