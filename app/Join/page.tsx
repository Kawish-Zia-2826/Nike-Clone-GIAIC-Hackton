import React from 'react'
import { CardWithForm2} from "@/components/ui/card-with-form2"
import Header from '@/component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/component/Footer';

const page = () => {
  return (
    <>
    <Header></Header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardWithForm2 />
    </main>
<Footer></Footer>
    </>
  )
}

export default page
