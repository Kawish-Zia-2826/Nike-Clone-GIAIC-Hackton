import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <>

      <div className="d-flex justify-content-between align-items-center p-4 ">
        <div><Link href="Home">
          
          <img src="/Vector.png" alt="cant'work" /></Link></div>
          
        <div className="d-flex gap-2 text-dark">
          <Link  className="text-dark" href="Help">Help</Link>
          |

          <Link className="text-dark" href="Join">Join</Link>
|
          <Link className="text-dark" href="Sign">Sign</Link>

|
          <Link className="text-dark" href="Store">Store</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
