"use client";
import React, { useState } from "react";
import Header from "../common/Header";
import Button from "../common/Button";
import CustomerCard from "./CustomerCard";
import CreateCustomer from "./CreateCustomer";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("Open Modal Clicked");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-end my-8 mx-5">
        <Button className="text-white" onClick={handleOpenModal}>
          Add Customer
        </Button>
      </div>

      <h1 className="text-center font-bold text-2xl">My Customers</h1>
      {/* Render Customer Cards here */}
      <CustomerCard />

      {/* Conditional rendering of the CreateCustomer modal */}
      {isModalOpen && <CreateCustomer onClose={handleCloseModal} />}
    </div>
  );
}
