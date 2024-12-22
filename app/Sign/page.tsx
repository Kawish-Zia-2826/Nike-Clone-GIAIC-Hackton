import React from 'react'
import { CardWithForm } from "@/components/card-with-form"
import Header from '@/component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/component/Footer';



const page = () => {
  return (
   <>
      <Header></Header>
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardWithForm />
    </main>
    <Footer></Footer>
    </>
  )
}

export default page
