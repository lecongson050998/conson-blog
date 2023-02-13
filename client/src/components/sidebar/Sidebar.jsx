import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
          <div className='sidebar__about'>
            <div className='sidebar__about-title'>About me</div>
            <div className='sidebar__about-line'></div>
            <div className='sidebar__about-image-box'>
                <img
                    className='sidebar__about-image'
                    src='https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/10/tam-giang-1.jpg'
                    alt='img'
                />
            </div>
            <h5 className='sidebar__about-username'>Phá Tam Giang</h5>
            <span className='sidebar__about-description'>Phá Tam Giang là một phá nằm trong hệ đầm phá Tam Giang</span>
          </div>
          <div className="sidebar__about">
                    <h3 className="sidebar__about-title">Personal Info</h3>
                    <div className="sidebar__about-line"></div>
                    <ul className="sidebar__about-infor-list">
                        {/* <li className='sidebar__about-infor-list-item'><span>Birthdate</span> : 20/06/1998</li> */}
                        <li className='sidebar__about-infor-list-item'><span>Email</span> : congson.lcs@gmail.com</li>
                        <li className='sidebar__about-infor-list-item'><span>Phone</span> : + (84) 333 477 889</li>
                        <li className='sidebar__about-infor-list-item'><span>Facebook</span> : Cong Son Le</li>
                        <li className='sidebar__about-infor-list-item'><span>Address</span> :  Thu Duc City - Ho Chi Minh City - Viet Nam</li>
                    </ul>
                </div>
    </div>
    
  )
}
