import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context';
import './single.css'

export default function Single() {
    const {user} = useContext(Context);

    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const [doc, setDoc] = useState({});

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(()=>{
        const getDoc =  async ()=>{
            const res = await axios.get(`/document/${path}`)
            // console.log(res);
            setDoc(res.data);
        }
        getDoc();
    },[path])

    const handleDeleteDocument = async () => {
        try {
            await axios.delete(`/document/${doc._id}`,{
                data:{username: user.username}
            })
            window.location.replace("/document");
        }catch(err){}
    }

  return (
    <div className='single'>
        <Navbar/>
        <div className='single__container'>
            <div className='single__content'>
                <div className='single__card'>
                    <img
                        className='single__card-image'
                        src={doc.photo}
                        alt='img'
                    />
                    <div className='single__card-title'>
                        {
                            updateMode ? (
                                <textarea 
                                    className='single__card-title-post-input'
                                    type='text'
                                    value={doc.title}
                                    onChange={(e)=>setTitle(e.target.value)}
                                ></textarea>
                            ):(
                                <h4 className='single__card-title-post'>{doc.title} {title} {desc}</h4>
                            )
                        }
                        {user?.username === doc.username && (
                            <>
                                <div className='single__card-title-edit'
                                    onClick={()=>setUpdateMode(true)}
                                >
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </div>
                                <div 
                                    className='single__card-title-delete'
                                    onClick={handleDeleteDocument}
                                 >
                                        <i className="fa-regular fa-trash-can"></i>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='single__card-auth'>
                        <div className='single__card-auth-name'>Author: {doc.username}</div>
                        <div className='single__card-auth-time'>{new Date(doc.createdAt).toDateString()}</div>
                    </div>
                    {
                        updateMode ? (
                            <textarea 
                                className='single__card-description-input'
                                type='text'
                                value={doc.desc}
                                onChange={(e)=>setDesc(e.target.value)}
                            ></textarea>
                        ):(
                            <p className='single__card-description'>
                                {doc.desc}
                            </p>
                        )
                    }
                    
                </div>
            </div>
            <div className='single__sidebar'>
                <Sidebar />
            </div>
        </div>
    </div>
  )
}
