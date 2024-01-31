import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import bgImg from "../../assets/hero/contacusside.jpg";
import { useForm } from 'react-hook-form';

export default function Contactusdetails() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmissionSuccess, setSubmissionSuccess] = React.useState(false);

  const onSubmit = data => {
    console.log(data);
    setSubmissionSuccess(true);
  };

  const contact_info = [
    {
      icon: <IoMdMail />,
      text: "Mail us",
      action: () => window.open("mailto:infratechbuilder@gmail.com"),
    },
    {
      icon: <FaPhoneVolume />,
      text: "Contact us",
      action: () => window.open("tel:+917092805747"),
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "Location",
      action: () => window.open("https://www.google.com/maps?q=Door+no:74+Ettiappan+street+Golden+George+Nagar+Nerkundram+Chennai-600107"),
    },
  ];

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row justify-center ">
        {!isSubmissionSuccess && (
          <div className="flex flex-row items-center text-center">
            {contact_info.map((info, index) => (
              <div key={index} className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full cursor-pointer" onClick={info.action}>
                {info.icon}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="register py-8 mt-10">
        {isSubmissionSuccess ? (
          <div className="col-1">
            <h2 className="text-center">THANK YOU</h2>
            <p className='ml-4 md:ml-0'>Thank you for getting in touch. We will be in contact with you at our earliest convenience.</p>
          </div>
        ) : (
          <div className="col-1">
            <h2 className='text-center'>CONTACT US</h2>
            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
              <input type="text" {...register("username")} placeholder='Full Name' />
              <input type="text" {...register("email")} placeholder='Email Address' />
              <input type="text" {...register("subject")} placeholder='Subject' />
              <input
                type="text"
                {...register("message", { required: true, maxLength: 300 })}
                placeholder='Message'
                style={{ width: "100%", padding: "40px", boxSizing: "border-box" }}  // Increase width and add padding
              />
              <button
                type="submit"
                className="bg-gradient-to-r mt-6 from-primary to-secondary hover:scale-105 duration-200 text-white py-3 px-4"
              >
                Send Message
              </button>
            </form>
          </div>
        )}
        {!isSubmissionSuccess && (
          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}
