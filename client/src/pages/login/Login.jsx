import { useContext } from 'react';
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from "../../context/Context";
import axios from "axios";
import Navbar from '../../components/navbar/Navbar'
import './login.css'

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);
  // const {user, dispatch, isFetching } = useContext(Context);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  // console.log(user)

  return (
    <div>
      <Navbar/>
      <div className='login'>
          <span className='loginTitle'>Login</span>
          <form className='loginForm' onSubmit={handleSubmitForm}>
              <label>Username</label>
              <input type='text' className='loginInput' placeholder='Enter your username...' 
                ref={usernameRef}
              />
              <label>Password</label>
              <input type='password' className='loginInput' placeholder='Enter your password...' 
                ref={passwordRef}
              />
              <button type='submit' className='loginBtn' disabled={isFetching}>Login</button>
          </form>
          <button className='loginRegisterBtn'><Link to={'/register'} style={{
                          textDecoration: "none",
                          color: "inherit"
                      }}>Register</Link></button>
      </div>
    </div>
  )
}
