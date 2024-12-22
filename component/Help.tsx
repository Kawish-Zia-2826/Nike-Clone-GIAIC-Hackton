import React from 'react'
import { CardWithForm } from "@/components/card-with-form"
import Header from '@/component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/component/Footer';
import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button"

const Help = () => {
  return (
   <>
       <Header></Header>
    <div className="row text-center m-4">
      <h1 className='uppercase'>get help</h1>
      <div className=" flex col-4 mx-auto">
      <Input type="email" placeholder="Email" />
      <Button type="submit" className='bg-slate-600'><CiSearch/></Button>
    </div>
    </div>
    <div className="container ">
    <div className="row m-4">
      <div className="col-8"style={{borderRight:"1px solid black"}}>
        <h1>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
        <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
        <p>isa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maest</p>
        <p>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
        <p>Apple Pay</p>
        <div>
          <button className='btn bg-dark rounded-pill text-white mx-2 px-3'>join us</button><button className='btn bg-dark rounded-pill text-white'>shop nike</button>
        </div>
        </div>
    
      
      <div className="col-4 flex flex-column align-items-center text-center">
        <h1 className='uppercase'>Contact us</h1>
        <img src = "/Mobile.png"/>
        <p >00 800 919 0566 <br />
        Products & Orders: 24 hours a day, 7 days a week
Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
        </p>
        
      </div>
      </div>
      <div className="row m-4">
      <div className="col-8 " style={{borderRight:"1px solid black"}}>
        <h1>FAQs</h1>
        <h3>Does my card need international purchases enabled?</h3>
        <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
        <p>Please note, some banks may charge a small transaction fee for international orders.</p>
        
    
        </div>
    
      
      <div className="col-4 flex flex-column align-items-center text-center">
        <h1 className='uppercase'>Contact us</h1>
        <img src = "/Message.png"/>
        <p >24 hours a day<br />
        7 days a weak
        </p>
        
      </div>
      </div>

      <div className="row m-4">
      <div className="col-8"style={{borderRight:"1px solid black"}}>
       
        <h3>Can I pay for my order with multiple methods??</h3>
        <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
        
    
        </div>
    
      
      <div className="col-4 flex flex-column align-items-center text-center">
        <h1 className='uppercase'>Contact us</h1>
        <img src = "/Inbox.png"/>
        <p >we reply with in <br />
        5 buissnise days
        </p>
        
      </div>
      </div>

      <div className="row m-4">
      <div className="col-8"style={{borderRight:"1px solid black"}}>
       
        <h3>Why don't I see Apple Pay as an option?</h3>
        <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
        
    
        </div>
    
      
      <div className="col-4 flex flex-column align-items-center text-center">
        <h1 className='uppercase'>Contact us</h1>
        <img src = "/Location.png"/>
        <p >STORE LOCATOR <br />
        Find Nike retail stores near you
        </p>
        
      </div>
      </div>


    </div>

  <Footer></Footer></>
  )
}

export default Help
