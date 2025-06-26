import Swal from "sweetalert2";
import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    Swal.fire({
      title: "Oops!",
      text: "Please enter your email address.",
      icon: "warning",
      confirmButtonColor: "#6D28D9",
    });
    return;
  }

  if (!emailRegex.test(email)) {
    Swal.fire({
      title: "Invalid Email",
      text: "Please enter a valid email address.",
      icon: "error",
      confirmButtonColor: "#6D28D9",
    });
    return;
  }

  Swal.fire({
    title: "Do you want to subscribe?",
    text: `We'll send updates to ${email}`,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, subscribe!",
    cancelButtonText: "Cancel",
    reverseButtons: true,
    backdrop: true,
    background: "#fff",
    confirmButtonColor: "#6D28D9",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Subscribed!",
        text: `You've successfully subscribed.`,
        icon: "success",
        confirmButtonColor: "#6D28D9",
      });
      setEmail(""); 
    }
  });
};


  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between border border-gray-200 shadow-md mb-10 rounded-lg py-10 mx-4 md:py-16 px-4 md:px-10">
      <div className="title flex-1 text-center md:text-left">
        <h2 className="text-lg md:text-xl font-bold">News Letter</h2>
        <h1 className="text-2xl md:text-4xl font-bold">Get Regular Update</h1>
      </div>
      <div className="flex-1 flex flex-col sm:flex-row items-center gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-auto flex-1 border border-gray-200 pl-4 py-2 rounded-md"
          placeholder="Enter your email address..."
        />
        <button
          onClick={handleSubscribe}
          className="w-full sm:w-auto px-4 py-2 bg-primary hover:bg-secondary cursor-pointer transition-colors text-white rounded-md sm:rounded-r-2xl"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
