import axios from 'axios';
import { useContext, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Context } from '../../context/Context';
import './upload.css'

export default function Upload() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleSubmitForm = async (e)=>{
        e.preventDefault();
        const newDoc = {
            username: user.username,
            title: title,
            desc: desc,
        }
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newDoc.photo = filename;
            try {
                await axios.post("/upload", data)
            } catch (err) {}
        }
        try {
            const res = await axios.post("/document", newDoc);
            window.location.replace(`/document/${res.data._id}`);
          } catch (err) {}
    }

    return (
        <div className='upload'>
        <Navbar/>
       <div className='upload__container'>
            <div className='upload__image-box'>
                <img 
                    className='upload__image'
                    src={file && URL.createObjectURL(file)}
                    alt='No_Image'
                />
                <label htmlFor='fileInput'>
                    <div className='upload__image-edit'>
                        <i className="upload__image-edit-icon fa-solid fa-camera-rotate"></i>
                        Thay đổi ảnh
                    </div>
                </label>
                <input type='file' 
                    id='fileInput' 
                    onChange={(e)=>setFile(e.target.files[0])}
                    style={{display: 'none'}}
                    />
            </div>
            <form className='upload__Form' onSubmit={handleSubmitForm}>
            <button type='submit' className='upload__Submit'>Publish</button>
                <div className='upload__FormGroup'>
                    <input className='upload__Input'
                        type='text'
                        placeholder='Title' 
                        autoFocus='true'
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className='upload__FormGroup'>
                    <textarea 
                        className='upload__Input upload__Text'
                        placeholder='Tell your story...'
                        type='text'
                        onChange={(e)=>setDesc(e.target.value)}
                    ></textarea>
                </div>
            </form>
       </div>
    </div>
  )
}
