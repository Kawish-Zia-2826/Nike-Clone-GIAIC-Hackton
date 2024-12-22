import React,{useEffect,useState}from 'react'
import { CardWithForm } from "@/components/card-with-form"
import Header from '@/component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/component/Footer';
import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import axios from 'axios'
import styles from "./Store.module.css"; 



const Store = () => {

  interface Item {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string;
  }
  
  const [data, setData] = useState<Item[] | null>(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
   
    axios
      .get("https://fakestoreapi.com/products") 
      .then((response) => {
        setData(response.data); 
        setLoading(false); 
      })
      .catch((err) => {
        setError(err.message); 
        setLoading(false);
      });
  }, []); 

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error}</p>; 
  
  console.log(data); 
  
  return (
    
  <div>
    <Header></Header>
    
    <div className="container my-5">
    <div className="row g-5">
  
      {data?.map((item) => (
       <div className="col-12 col-sm-6 col-md-4 col-lg-3"key={item.id}>
       <div className={styles.card} >
         <img
           src={item.image}
           className={styles.card_img_top}
           alt="Product Image"
         />
         <div className={styles.card_body}>
           <h5 className="card-title">{item.title}</h5>
           <p className="card-text">
             {item.description}
           </p>
           <strong>{item.price}</strong>
         </div>
       </div>
     </div>
      
    ))}
    </div>
    </div>
    <Footer></Footer>
    

  </div>
  )
}

export default Store
