import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <>
    <div className='text-center'>
      <h1 className='my-5'>NIKE AIR MAX PULSE</h1>
      <small>extreme comfort hyper durable max volume intriducing the air max <br />plus designed to push your limits and help you go to the max</small>
    </div>
    <div className='d-flex justify-content-center gap-3 mt-5'>
      <button className="btn btn-dark rounded-pill">notify me</button>
      <button className="btn btn-dark rounded-pill">shop air max</button>
    </div>
   
    </>
  )
}

export default Hero
