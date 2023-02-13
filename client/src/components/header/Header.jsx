import './header.css'

export default function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className='header__social'>
                <ul className="header__social-list">
                    <li className="header__social-item">
                        <a className="header__social-link" href="/#">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="header__social-item">
                        <a className="header__social-link" href="/#">
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                    </li>
                    <li className="header__social-item">
                        <a className="header__social-link" href="/#">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                    <li className="header__social-item">
                        <a className="header__social-link" href="/#">
                            <i className="fa-brands fa-tiktok"></i>
                        </a>
                    </li>
                    <li className="header__social-item">
                        <a className="header__social-link" href="/#">
                            <i className="fa-solid fa-phone"></i>
                        </a>
                    </li>
                </ul>  
            </div>
            <div className="header__content">
                <h4 className="header__content-hi" >Hello, I am</h4>
                <h1 className="header__content-name">Cong Son</h1>
                <h6 className="header__content-desc" >Web Designer | App PC | Automation Machine</h6>
            </div>
        </div>
    </header>
  )
}
