// import React from "react";
// import { MdArrowForwardIos } from "react-icons/md";

// export default function CustomerCard() {
//   return (
//     <div className="mx-80 my-4">
//       <div className="border w-full px-16 py-10 shadow-lg rounded-3xl ">
//         <div className="flex justify-between items-center">
//           <p className="font-bold text-lg">David</p>
//           <span>Total:$100</span>
//           <MdArrowForwardIos className="text-2xl" />
//         </div>
//       </div>
//     </div>
//   );
// }


// 

import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export default function CustomerCard() {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-80 my-4">
      <div className="border w-full px-4 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 shadow-lg rounded-3xl">
        <div className="flex justify-between items-center text-sm sm:text-base lg:text-lg">
          <p className="font-bold">David</p>
          <span>Total: $100</span>
          <MdArrowForwardIos className="text-xl sm:text-2xl" />
        </div>
      </div>
    </div>
  );
}
