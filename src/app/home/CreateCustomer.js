// import React from "react";
// import { IoClose } from "react-icons/io5";
// import Button from "../common/Button";

// export default function CreateCustomer({ onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 w-full max-w-lg mx-4">
//         <div className="flex justify-end mb-4">
//           <button
//             onClick={onClose}
//             className="text-gray-600 hover:text-gray-900"
//           >
//             <IoClose className="text-2xl" />
//           </button>
//         </div>

//         <form className="flex flex-col gap-6">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <label htmlFor="name" className="font-bold w-32">
//               Name:
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Name"
//               id="name"
//               className="bg-gray-300 w-full rounded-full px-3 py-2 placeholder:pl-2"
//             />
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <label htmlFor="date" className="font-bold w-32">
//               Date:
//             </label>
//             <input
//               type="date"
//               id="date"
//               className="bg-gray-300 w-full rounded-full px-3 py-2"
//             />
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <label htmlFor="amount" className="font-bold w-32">
//               Amount:
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Amount"
//               id="amount"
//               className="bg-gray-300 w-full rounded-full px-3 py-2 placeholder:pl-2"
//             />
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <label htmlFor="description" className="font-bold w-32">
//               Description:
//             </label>
//             <textarea
//               id="description"
//               placeholder="Enter Description"
//               className="bg-gray-300 w-full rounded-xl px-3 py-2 placeholder:pl-2"
//             />
//           </div>

//           <div className="flex justify-center mt-6">
//             <Button className="text-white">Add</Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// 



import React, { useState } from 'react';

const CreateCustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    amount: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/api/customers/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Server Response:', result);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Date" />
      <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" />
      <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CreateCustomer;
