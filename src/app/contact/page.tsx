"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { FaPhone } from "react-icons/fa6";
import { Button } from "../components/Button/Button";

// const getMessage = (referrer: string | null) => {
//   switch (referrer) {
//     case "prayer":
//       return {
//         heading: "Prayer Request",
//         description:
//           "We believe in the power of prayer. Let us know how we can pray for you.",
//       };
//     case "kids":
//       return {
//         heading: "Contact BereanKIDS",
//         description:
//           "We would love to connect with you on any questions you may have about BereanKIDS.",
//       };
//     case "youth":
//       return {
//         heading: "Contact The Refuge",
//         description:
//           "We would love to connect with you on any questions you may have about The Refuge.",
//       };
//     case "young-adults":
//       return {
//         heading: "Contact Crossroads 412",
//         description:
//           "We would love to connect with you on any questions you may have about Crossroads 412.",
//       };
//     case "awana":
//       return {
//         heading: "Contact Us",
//         description:
//           "We would love to connect with you on any questions you may have about Awana at Cheyenne Berean Church.",
//       };
//     default:
//       return {
//         heading: "Contact Us",
//         description:
//           "We would love to connect with you on any questions you have, or help you get plugged into church life at Cheyenne Berean Church.",
//       };
//   }
// };

const ContactPage = () => {
  // const searchParams = useSearchParams();
  // const referrer = searchParams.get("referrer");
  // const message = referrer
  //   ? getMessage(referrer)
  //   : { heading: "Contact Us", description: "" };
  const message = {
    heading: "Contact Us",
    description:
      "We would love to connect with you on any questions you have, or help you get plugged into church life at Cheyenne Berean Church.",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus("Thanks! Your message has been sent.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus(
          "Failed to send message. Feel free to contact us by phone at (307) 634-1238"
        );
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus(
        "Failed to send message. Feel free to contact us by phone at (307) 634-1238"
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center gap-8 md:gap-16">
      <IntroSection
        heading={message.heading}
        description={message.description}
      />
      {!status && (
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col gap-8 text-dark"
        >
          <label className="input input-bordered border-spruce flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="grow text-dark"
              placeholder="Name"
            />
          </label>
          <label className="input input-bordered border-spruce flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="grow text-dark"
              placeholder="Email"
            />
          </label>
          <label className="input input-bordered border-spruce flex items-center gap-2">
            <FaPhone fill="currentColor" className="h-4 w-4" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="grow text-dark"
              placeholder="Phone Number"
            />
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="textarea-placeholder textarea textarea-bordered border-spruce textarea-lg min-h-64 text-dark"
          ></textarea>
          {/* TODO: FIX SUBMIT WITH TYPE=SUBMIT */}
          <Button>Submit</Button>
        </form>
      )}
      {status && <p className="font-medium text-lg">{status}</p>}
    </div>
  );
};

export default ContactPage;
