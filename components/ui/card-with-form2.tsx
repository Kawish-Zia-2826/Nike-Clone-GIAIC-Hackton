import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"




export function CardWithForm2() {
  return (
<div>
  
    <Card className="w-[350px]  py-3 text-center">
      
      <img src="/Logo.png" alt="cen't work"  />
      
      <p className="uppercase p-3">become a nike member</p>
  
   
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
      
              <Input id="name" type="email" placeholder="Enter your Email" />
            </div>
            
            <div className="flex flex-col space-y-1.5">
          
              <Input id="name" type="password" placeholder="Enter your password" />
            </div>
            <div className="flex flex-col space-y-1.5">
          
              <Input id="name" type="text" placeholder="Enter your First Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
          
              <Input id="name" type="text" placeholder="Enter your Last Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
          
              <Input id="name" type="date" placeholder="DOB" />
            </div>


            
            <label className="text-left p-1"
          htmlFor="terms1" ><Checkbox id="terms1 " ></Checkbox>
         <small> sign up for emails to get update from nike on products offer and your memeber benifit</small>
        </label>
      


        
            </div>
       
        </form>
      </CardContent>
      <CardFooter >
      
        <Button style={{width:"100%"}} className="bg-dark uppercase">join us</Button>
      </CardFooter>
     <small > aleardy  a memeber ?</small> <Link href="Sign">sign in</Link>
    </Card>
 

    </div>
  )
}

