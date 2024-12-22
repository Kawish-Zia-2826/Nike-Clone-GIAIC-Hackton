"use client"; // Needed for interactivity in Next.js
import React, { useState } from "react";
import styles from "./SlidingCards .module.css";

const SlidingCards  = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/Frame1.png",
      title: "Nike Air Max Pulse",
      price: "₹13,995",
      category: "Men's Shoes",
    },
    {
      id: 2,
      image: "/Frame2.png",
      title: "Nike Air Max 97 SE",
      price: "₹16,995",
      category: "Women's Shoes",
    },
    {
      id: 3,
      image: "/Frame3.png",
      title: "Nike Air Max Plus",
      price: "₹14,995",
      category: "Men's Shoes",
    },
    {
      id: 4,
      image: "/Frame1.png",
      title: "Nike Air Max Pulse",
      price: "₹13,995",
      category: "Men's Shoes",
    },
    {
      id: 5,
      image: "/Frame2.png",
      title: "Nike Air Max 97 SE",
      price: "₹16,995",
      category: "Women's Shoes",
    },
    {
      id: 6,
      image: "/Frame3.png",
      title: "Nike Air Max Plus",
      price: "₹14,995",
      category: "Men's Shoes",
    },
    {
      id: 7,
      image: "/Frame2.png",
      title: "Nike Air Max 97 SE",
      price: "₹16,995",
      category: "Women's Shoes",
    },
    {
      id: 8,
      image: "/Frame3.png",
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
            <img src={slide.image} alt={slide.title} />
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

export default SlidingCards ;
