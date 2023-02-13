import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './document.css'
import { Context } from '../../context/Context'

export default function Document() {
    // const IMAGES_PATH = 'http://localhost:5000/images/';


    const {user} = useContext(Context);

    const [docs, setDocs] = useState([]);

    useEffect(()=>{
        const fetchDocs = async ()=> {
        const res = await axios.get("/document");
        // console.log(res);
        setDocs(res.data);
        }
        fetchDocs();
    },[])

    
  return (
    <div className='document'>
      <Navbar />
      <div className='document__container'>
        <div className='document__content'>
            {
             docs.map((doc,index)=>(
                    <div className='document__card' key={index}>
                        <img
                            className='document__card-image'
                            // src={IMAGES_PATH + doc.photo}
                            src={doc.photo}
                            alt='img'
                        />
                        <div className='document__card-title'>
                            <Link className='document__card-title-post' to={`/document/${doc._id}`}>
                                {doc.title}
                            </Link>
                            {
                                user?.username === doc.username && (
                                    <>
                                    <Link className='document__card-title-edit' to={'edit/'}><i className="fa-regular fa-pen-to-square"></i></Link>
                                    <div className='document__card-title-delete'><i className="fa-regular fa-trash-can"></i></div>
                                    </>
                                )
                            }
                        </div>
                        <div className='document__card-auth'>
                            <div className='document__card-auth-name'>
                                Author: {doc.username}
                            </div>
                            <div className='document__card-auth-time'>
                                {new Date(doc.createdAt).toDateString()}
                            </div>
                        </div>
                        <div className='document__card-description'>
                            {doc.desc}
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='document__sidebar'>
            <Sidebar />
        </div>
      </div>
    </div>
  )
}
