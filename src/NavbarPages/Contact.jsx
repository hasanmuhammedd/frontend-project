import React from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import '../styles/Comonenets/Contact/Contact.scss'





export const 


Contact = () => {
  return (
    
    <div>
      
          <div className='container-contact'>

            <h1 className='contact'> Contact</h1>
            <h4 className='feedback'>Your Feedback is more than welcome!</h4>
            <div >  
            <p className='contact-info'> <IoLocationSharp className='phone-icon' />Cairo,EG</p>
            
            <p className='contact-info'><IoIosPhonePortrait className='phone-icon'/>Phone:+201155253791</p>
            <p className='contact-info'> <MdEmail className='phone-icon' />Email:hassaneltahe@icloud.com</p></div>
                                                  
         
      
      
      <div><input className='input-contact' type="text" placeholder='Name' />
      <input className='input-contact' type="text" placeholder='Email' />
      <textarea className="input-contact" placeholder="Write your message..."></textarea>
      <button type = 'submit' className='btn-contact' >Send</button>
      
      </div>

      


      </div>
      
      
      </div>
    
  )

}
export default Contact