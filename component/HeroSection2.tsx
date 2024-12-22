"use client"; // Needed for interactivity in Next.js
import React, { useState } from "react";
import styles from "./HeroSection2.module.css";

const HeroSection2  = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/Sec1.png",
      title: "Nike Dri-FIT ADV TechKnit Ultra",
      price: "₹3,995",
      category: "Men's Short Sleve Running Top",
    },
    {
      id: 2,
      image: "/Sec2.png",
      title: "Nike Dri-Fit Challenger",
      price: "₹2,995",
      category: "Men's 7' Running Shorts",
    },
    {
      id: 3,
      image: "/Sec3.png",
      title: "Nike Dri-FIT ADV TechKnit Ultra",
      price: "₹14,995",
      category: "Women Long Sleeve Running Top",
    },
    {
      id: 4,
      image: "/Sec4.png",
      title: "=0 wfwe s ",
      price: "₹3,795",
      category: "Women Mid-Rise Running Crops",
    },
    {
      id: 5,
      image: "/Sec2.png",
      title: "Nike Air Max 97 SE",
      price: "₹16,995",
      category: "Women's Shoes",
    },
    {
      id: 6,
      image: "/Sec3.png",
      title: "Nike Air Max Plus",
      price: "₹14,995",
      category: "Men's Shoes",
    },
    {
      id: 7,
      image: "/Sec2.png",
      title: "Nike Air Max 97 SE",
      price: "₹16,995",
      category: "Women's Shoes",
    },
    {
      id: 8,
      image: "/Sec3.png",
      title: "Nike Air Max Plus",
      price: "₹14,995",
      category: "Men's Shoes",
    },
    
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={`${styles.button} ${styles.prevButton}`} onClick={prevSlide}>
        ←
      </button>
      <div
        className={styles.sliderWrapper}
        style={{ transform: `translateX(-${currentIndex * 320}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.card}>
            <img src={slide.image} alt={slide.title} style={{height:"300px"}}/>
            <div className="card-body">
              <h5>{slide.title}</h5>
              <p>{slide.category}</p>
              <p>{slide.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={`${styles.button} ${styles.nextButton}`} onClick={nextSlide}>
        →
      </button>
    </div>
  );
};

export default HeroSection2 ;
