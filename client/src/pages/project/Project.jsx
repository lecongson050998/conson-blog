import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './project.css'

export default function Project() {
  return (
    <div className='project'>
      <Navbar />
      <div className='project__container'>
        <div className='project__content'>
            <div className='project__card'>
                <img
                    className='project__card-image'
                    src='https://www.lagunalangco.com/wp-content/uploads/2018/05/Pha-Tam-Giang-Hue-Anh-Michia-Kumitori.jpg'
                    alt='img'
                />
                <div className='project__card-title'>
                    <h3 className='project__card-title-post'>Phá Tam Giang proejct</h3>
                    <div className='project__card-title-edit'><i className="fa-regular fa-pen-to-square"></i></div>
                    <div className='project__card-title-delete'><i className="fa-regular fa-trash-can"></i></div>
                </div>
                <div className='project__card-auth'>
                    <div className='project__card-auth-name'>Author: Cong Son</div>
                    <div className='project__card-auth-time'>1 hour ago</div>
                </div>
                <div className='project__card-description'>
                    Phá Tam Giang proejct là một phá nằm trong hệ đầm phá Tam Giang proejct - Cầu Hai. 
                    Diện tích phá Tam Giang proejct khoảng 52 km², trải dài khoảng 24 km theo 
                    hướng tây tây bắc-đông đông nam từ cửa sông Ô Lâu đến cửa sông Hương, 
                    thuộc địa phận của thành phố Huế và hai huyện Phong Điền, Quảng Điền 
                    thuộc tỉnh Thừa Thiên Huế.
                </div>
            </div>
        </div>
        <div className='project__sidebar'>
            <Sidebar />
        </div>
      </div>
    </div>
  )
}
