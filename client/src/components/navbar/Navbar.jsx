
import './navbar.css'
import Collapsible from 'react-collapsible';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function Navbar({home}) {
    const {user, dispatch} = useContext(Context)
    console.log(user)
    const [scrollY, setScrollY] = useState(0);

    const handleScrollY = ()=> {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY);
    }
    useEffect(()=>{
        handleScrollY();
        window.addEventListener('scroll',handleScrollY);
        return (()=> {
            window.removeEventListener('scroll',handleScrollY);
        })
    },[])

    const handleLogout = ()=>{
        dispatch({ type: "LOGOUT" });
        localStorage.setItem("user", null);
        window.location.replace("/");
    }

  return (
     <nav className='navbar'>
        <div className='container'>
                <div className='navbar__desktop'>
                    <ul className='navbar__list'>
                        <li className='navbar__list-item'>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className='navbar__list-item'>
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className='navbar__list-item'>
                            <a href="#resume" className="nav-link">Resume</a>
                        </li>
                    </ul>
                    <ul className='navbar__list'>
                        <img 
                            className='navbar__avatar'
                            style={
                                home && scrollY < 520 ? {
                                opacity: '1',
                                animation: 'avatar_move_down 0.5s ease-in',
                            } : {}
                            }
                            // src={user.profilePic}
                            src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/10/tam-giang-1.jpg" 
                            //https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/10/tam-giang-1.jpg
                            alt="img"
                        />
                        <li className='navbar__list-item navbar__username-wrapper'
                            style={
                                home && scrollY < 520 ? {
                                animation: 'username_move_down 0.5s ease-in',
                            } : {
                                animation: 'username_move_up 0.3s ease-in',
                            }
                            }
                        >
                            <h5 className='navbar__username'>Cong Son</h5>
                            <div className='navbar__userdesc'>Web Designer | Developer</div>
                        </li>
                    </ul>
                    <ul className='navbar__list'>
                        <li className='navbar__list-item'>
                            <a href="/document" className="nav-link">Document</a>
                        </li>
                        <li className='navbar__list-item'>
                            <Link to='/project' className="nav-link">Project</Link>
                        </li>
                        <li className='navbar__list-item'>
                            {
                                user ? (
                                    <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                                    ) : (
                                        <Link to='/login' className="nav-link">Login</Link>
                                        )
                            }
                        </li>
                    </ul>
                </div>
                <div className='navbar__mobile'>
                    <Collapsible
                        trigger={
                            <div className='navbar__mobile-toggle'>
                                <button className='navbar__mobile-toggle-button' >
                                    <i className="navbar__mobile-toggle-icon fa-solid fa-bars"></i>
                                </button>
                            </div>
                        }
                    >
                        <ul className='navbar__list-mobile'>
                                <li className='navbar__list-mobile-item'>
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>
                                <li className='navbar__list-mobile-item'>
                                    <a href="#blog" className="nav-link">About</a>
                                </li>
                                <li className='navbar__list-mobile-item'>
                                    <a href="#contact" className="nav-link">Resume</a>
                                </li>
                                <li className='navbar__list-mobile-item'>
                                    <Link to={'/document'} className="nav-link">Document</Link>
                                </li>
                                <li className='navbar__list-mobile-item'>
                                    <Link to={'/project'} className="nav-link">Project</Link>
                                </li>
                                <li className='navbar__list-mobile-item'>
                                {
                                user ? (
                                    <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                                    ) : (
                                        <Link to='/login' className="nav-link">Login</Link>
                                        )
                            }
                                </li>
                        </ul>
                    </Collapsible>
                </div>
        </div>
    </nav>
  )
}
