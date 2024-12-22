import Header from '@/component/Header'
import React from 'react'
import Hero from '@/component/Hero';
import SlidingCards from '@/component/SlidingCards ';
import Banner2 from '@/component/Banner2';
import Banner1 from '@/component/Banner1';
import Banner3 from '@/component/Banner3';
import HeroSection2 from '@/component/HeroSection2';
import Banner4 from '@/component/Banner4';
import Footer from '@/component/Footer';

const Home = () => {
  return (
    <div>
    <Header></Header>
   <Banner1></Banner1>
  <Hero/>
<SlidingCards/> 
<Banner2/>
<HeroSection2/>
<Banner3/>
<Banner4 ></Banner4>
<Footer></Footer>



  </div>
  )
}

export default Home
