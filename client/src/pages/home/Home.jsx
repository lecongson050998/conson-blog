
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './home.css'

export default function Home() {


  return (
    <div className='home'>
      <Header />
      <Navbar home ={true}/>
      <div className='home__container'>
        <div className='home__about'>
            <div className="home__about-card">
                <h3 className="home__about-card-title">Who am I ?</h3>
                <div className="home__about-card-line"></div>
                <h5>A Web Designer / Developer Located In Our Lovely Earth</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?</p>
            </div>
            <div className="home__about-card">
                <h3 className="home__about-card-title">Personal Info</h3>
                <div className="home__about-card-line"></div>
                <ul className="home__about-card-infor-list">
                    {/* <li className='home__about-card-infor-list-item'><span>Birthdate</span> : 20/06/1998</li> */}
                    <li className='home__about-card-infor-list-item'><span>Email</span> : congson.lcs@gmail.com</li>
                    <li className='home__about-card-infor-list-item'><span>Phone</span> : + (84) 333 477 889</li>
                    <li className='home__about-card-infor-list-item'><span>Facebook</span> : Cong Son Le</li>
                    <li className='home__about-card-infor-list-item'><span>Address</span> :  Thu Duc City - Ho Chi Minh City - Viet Nam</li>
                </ul>
                <ul className="home__about-card-social">
                    <li className="home__about-card-social-item">
                        <a className="home__about-card-social-link" href="/#">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="home__about-card-social-item">
                        <a className="home__about-card-social-link" href="/#">
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                    </li>
                    <li className="home__about-card-social-item">
                        <a className="home__about-card-social-link" href="/#">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                    <li className="home__about-card-social-item">
                        <a className="home__about-card-social-link" href="/#">
                            <i className="fa-brands fa-tiktok"></i>
                        </a>
                    </li>
                    <li className="home__about-card-social-item">
                        <a className="home__about-card-social-link" href="/#">
                            <i className="fa-solid fa-phone"></i>
                        </a>
                    </li>
                </ul>  
            </div>
            <div className="home__about-card">
                <h3 className="home__about-card-title">My Expertise</h3>
                <div className="home__about-card-line"></div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>UX Design</h6>
                        <p className="subtitle"> exercitat Repellendus,  corrupt.</p>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Web Development</h6>
                        <p className="subtitle">Lorem ipsum dolor sit consectetur.</p>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Digital Marketing</h6>
                        <p className="subtitle">voluptate commodi illo voluptatib.</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
