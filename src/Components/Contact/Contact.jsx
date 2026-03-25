import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill the form before submitting.");
      return;
    }

    try {
      const success = await onSubmit(e);

      if(success){
        setFormData({
        name: "",
        email: "",
        message: ""
      });
      toast.success("Form submitted successfully");
      } else {
        toast.error("Form submission failed.");
      }
    } catch (error) {
      toast.error("Something went wrong.")
    }
  }


  const onSubmit = async (event) => {
    const formData = new FormData(event.target);
    formData.append("access_key", "1c88cc94-9a77-49ed-86ce-a25930bc8a5f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    return res.success;
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am always excited to connect with like-minded people, potential
            employers, and collaborators. Whether it is about projects, job
            opportunities, or just sharing ideas, feel free to reach out — I will
            get back to you as soon as possible!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>moseesmohan@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9344662421</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Oddenchathram, Dindigul,India</p>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor=""> Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
          <ToastContainer 
            position="top-center" 
            theme="dark"
            autoClose={3000} 
          />
        </div>

      </div>
    </div>
  );
};

export default Contact;
