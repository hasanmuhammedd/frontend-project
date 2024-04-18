import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import '../styles/Comonenets/Aboutus/Aboutus.scss'
import { LuPenSquare } from "react-icons/lu";
import { BsLayoutSidebarReverse } from "react-icons/bs";


const Aboutus = () => {
  return (
     
<div>
           <div className='C-aboutus'>
            <h1 className='aboutus'>About us</h1>
            </div>

            <div className="container">
              <div className='c2'>
              <h1 className='who'>Who We Are</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque rem nobis ad odit modi labore pariatur molestiae, maiores repellendus eveniet quae in. In consequatur excepturi minima nisi tempore saepe.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus illum rem enim. Animi cupiditate itaque quidem accusamus excepturi odit soluta reiciendis, aliquam, in praesentium nemo illo nihil optio facilis aut!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum similique maxime inventore ratione nostrum est tempora minus at eos dolorum libero suscipit maiores, officia odit voluptatibus. Doloribus, similique assumenda!</p>
              </div>

              <div className="photo">
                <img src="src\assets\Aboutus\aboutus.jpg" alt="about.img" /></div>

                



            </div>
            <div className="section">
              <div className="container">
                <div className="co1"><h1>Why Choose Us ?</h1></div>
                <div className="co2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate quae vel! Voluptatem dicta quis quo ullam iste facere recusandae? Fuga itaque molestias est, nam quas magni necessitatibus distinctio earum!</div>
                <div className="co345">
                <div className="co3"><div className="icon"><LuPenSquare className='TfiEmail'/></div><h1 className='CreativeDesign'>Creative Design</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam ipsum quos est praesentium labore aut neque culpa amet magni obcaecati ex cumque, tenetur provident temporibus eligendi ut delectus sequi.</p></div>
                <div className="co4"><div className="icon"><BsLayoutSidebarReverse className='TfiEmail'/></div><h1 className='FlexibleLayouts'>Flexible Layouts</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam ipsum quos est praesentium labore aut neque culpa amet magni obcaecati ex cumque, tenetur provident temporibus eligendi ut delectus sequi.</p></div>
                <div className="co5"><div className="icon"><TfiEmail className='TfiEmail'/></div><h1 className='EmailMarketing'>Email Marketing</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam ipsum quos est praesentium labore aut neque culpa amet magni obcaecati ex cumque, tenetur provident temporibus eligendi ut delectus sequi.</p></div>
                </div>
                

              
              
              
              </div>
              
                </div>







            </div>

            

            
        
    
 
  )
}

export default Aboutus