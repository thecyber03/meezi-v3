import { useState } from 'react';
import { Link } from 'react-router-dom'
export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   
   const toggleAlif = () => {
     setIsOpen(!isOpen)
   }
   
   return (
     <nav className="fixed top-0 left-0 w-full h-12 px-4 z-50 flex items-center justify-between">
       <Link to="/" className="text-2xl font-[Aref]">م</Link>
      
       <div onClick={toggleAlif} className="h-full  mr-2 flex flex-col justify-center items-center cursor-pointer">
         <span className={`font-[Aref] text-black text-2xl leading-[4px] scale-y-[2.5] transition-all duration-500 ease-in-out
         ${isOpen ? 'rotate-45' : 'rotate-90'}`}>ا</span>
         
         <span className={`font-[Aref] text-black text-2xl leading-[4px] scale-y-[2.5] transition-all duration-500 ease-in-out 
         ${isOpen ? '-rotate-45' : 'rotate-90'}`}>ا</span>
       </div>
       
       <div className={`fixed left-0 w-full h-[55vh] md:h-[60vh] bg-gray-400 rounded-t-2xl transition-all duration-500 ease-in-out flex flex-col justify-between
         ${isOpen ? 'bottom-0' : '-bottom-[80vh]'}`}>
         
         {/*Nav menu section*/}
         <div onClick={() => setIsOpen(false)}
           className="p-8 text-white flex flex-col text-5xl font-[ClashDisplay]">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            
         </div>
         
         {/*Nav links section*/}
         <div className="p-8 text- text-[10px]">
           <a href="mailto:abdulaziz86723@gmail.com">ABDULAZIZ86723@GMAIL.COM</a> <br/>
           <a href="https://www.instagram.com/the_cyber_03">INSTAGRAM</a>
         </div>
         
       </div>
     </nav>
   );
  }