// import React from "react";
// import Image from "next/image";

// export default function Header() {
//   return (
//     <div className="bg-emerald-500 w-full h-36">
//       <div className="flex items-center justify-between px-8 h-full">
        
//         {/* Logo on the left */}
//         <div>
//           <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
//         </div>

//         {/* Navigation links in the center */}
//         <div className="flex-grow flex justify-center">
//           <ul className="flex space-x-8 text-white text-lg">
//             <li>Home</li>
//             <li>About</li>
//             <li>Services</li>
//           </ul>
//         </div>

//         {/* My Account on the right */}
//         <div className="text-white text-lg">
//           <p>My Account</p>
//         </div>
//       </div>
//     </div>
//   );
// }





// 


// import React, { useState } from "react";
// import Image from "next/image";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="bg-emerald-500 w-full h-16 lg:h-36">
//       <div className="flex justify-between items-center   h-full px-4 lg:px-8">
//         {/* Logo */}
//         <div className="flex-shrink-0 ">
//           <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
//         </div>

          



//         {/* Hamburger Icon for Mobile */}
//         <div className="lg:hidden">
//           <button onClick={toggleMenu} className="text-white">
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>

//         {/* Menu Links */}
//         <div
//           className={`${
//             isOpen ? "block" : "hidden"
//           } absolute top-16 left-0 w-full bg-emerald-500 lg:static lg:flex lg:justify-between lg:items-center`}
//         >
//           <ul className="flex flex-col lg:flex-row lg:gap-8 text-white lg:text-black text-center">
//             <li className="py-2 lg:py-0">Home</li>
//             <li className="py-2 lg:py-0">About</li>
//             <li className="py-2 lg:py-0">Services</li>
//           </ul>

//           <div className="text-center lg:text-right py-2 lg:py-0 text-white lg:text-black">
//             My Account
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 


import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-emerald-500 w-full h-16 lg:h-36">
      <div className="flex justify-between items-center h-full px-4 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/assets/logo.png" alt="Logo" width={50} height={50} className="lg:w-[80px] lg:h-80px] lg:mx-9" />
        </div>

        {/* Navigation links for desktop */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8 text-white cursor-pointer text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>

        {/* My Account on the right for desktop */}
        <div className="hidden lg:block cursor-pointer text-white text-lg">
          <p>My Account</p>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Links for Mobile */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full h-full bg-emerald-500 lg:hidden`}
        >
          <ul className="flex flex-col text-center cursor-pointer text-white">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Services</li>
            <li className="py-2">My Account</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

