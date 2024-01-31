import React, { useState } from "react";
import { IoCloseOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";
import bgImg from "./assets/Hero/enquiryhero.jpg";
import ThankYouPopup from './ThankYouPopup';

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const handlePhoneInput = (event) => {
    // Remove non-numeric characters from the input value
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  };

  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  const handleFormSubmit = () => {
    // Perform any necessary form submission logic

    // Close the current popup
    setOrderPopup(false);

    // Show the ThankYouPopup after form submission
    setShowThankYouPopup(true);
  };

  return (
    <>
      {orderPopup && !showThankYouPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm grid grid-cols-2 items-center">
          <div className="hidden lg:block">
            <img src={bgImg} alt="" className="h-full ml-[426px] object-cover w-[343px]" />
          </div>

          {/* Right side (col-2) with form */}
          <div className="flex-1 p-7 shadow-md bg-white duration-200 w-[390px] md:w-[380px]">
            {/* Header */}
            <div className="flex items-center justify-center relative">
              <h1 className="text-xl text-center font-semibold text-black/70">
                ENQUIRE NOW
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer absolute right-0 top-0"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            {/* Body */}
            <div className="mt-2">
              {/* Icons for email and phone number */}
              <div className="flex items-center justify-center mb-2">
                <IoMailOutline className="text-xl" />
                <p className="text-gray-600">infratechbuilder@email.com</p>
              </div>
              <div className="flex items-center justify-center mb-2">
                <IoCallOutline className="text-xl" />
                <p className="text-gray-600">+91 7092805747</p>
              </div>

              <input
                type="text"
                placeholder="Name"
                required
                className="w-full rounded-xl border border-gray-300 dark:border-gray-500  px-2 py-2 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-xl border border-gray-300 dark:border-gray-500  px-2 py-2 mb-4"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                pattern="[0-9]*"
                required
                onInput={handlePhoneInput}
                className="w-full rounded-xl border border-gray-300 dark:border-gray-500  px-2 py-2 mb-4"
              />
              <input
                type="text"
                placeholder="Message"
                required
                className="w-full rounded-xl border border-gray-300 dark:border-gray-500  px-2 py-6 mb-4"
              />
              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  onClick={handleFormSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showThankYouPopup && <ThankYouPopup setShowThankYouPopup={setShowThankYouPopup} />}
    </>
  );
};

export default OrderPopup;
