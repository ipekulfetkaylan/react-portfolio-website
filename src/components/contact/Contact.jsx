import { useState } from "react";
import "./contact.scss"
import TagFacesIcon from '@mui/icons-material/TagFaces';

export default function Contact() {
  const [message, setMessage]= useState(false)
  const handleSubmit= (e)=>{
    e.preventDefault();
    setMessage(true)

  }
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP <TagFacesIcon/> </span> }
        </form>
      </div>
      
    </div>
  )
}
