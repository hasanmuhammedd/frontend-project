import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div className='home'><img src="src\assets\home\flower.jpg" alt="" />
      <div className="flower"></div>
        <div className="content"><h1>Fresh Flowers</h1>
        <h2>Natrual & Beautiful Flowers</h2> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maiores, quibusdam beatae tenetur molestias aperiam eaque numquam voluptas doloribus unde modi temporibus at cupiditate, consectetur nobis tempore quaerat dolore id.</p>
        <div>  <Link className='shopnow' to='/Products'>ShopNow</Link></div> 

        
        
        </div>
        
    </div>
  )
}

export default Home