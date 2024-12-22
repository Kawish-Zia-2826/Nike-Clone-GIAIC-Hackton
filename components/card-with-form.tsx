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




export function CardWithForm() {
  return (
<div>
  
    <Card className="w-[350px]  py-3 text-center">
      
      <img src="/Logo.png" alt="cen't work"  />
      
      <p className="uppercase p-5">your account is <br />everything for nike</p>
  
   
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
      
              <Input id="name" type="email" placeholder="Enter your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
            <div className="flex flex-col space-y-1.5">
          
              <Input id="name" type="password" placeholder="Enter your password" />
            </div>


            
            <label className="text-left p-1"
          htmlFor="terms1" ><Checkbox id="terms1" ></Checkbox>
         <small> keep me signed in</small>
        </label>
      


        
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter >
      
        <Button style={{width:"100%"}} className="bg-dark">SIGN IN</Button>
      </CardFooter>
     <small > not a memeber ?</small> <Link href="Join">Join Us</Link>
    </Card>
 

    </div>
  )
}

