"use client";
import { toast } from "sonner";
import Styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const contactInfo: ContactInfo = {
    email: "abdulrehmanmuglll00@gmail.com",
    phone: " 03453951316",
    location: "Pakistan , Karachi",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      toast.warning("Please fill out all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const loadingToast = toast.loading("Sending email...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        toast.error("Failed to send the message.");
        return;
      }
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  return (
    <section className={Styles.contact} id="contact">
      <div className={Styles.blurOne}></div>
      <div className={Styles.blurTwo}></div>

      <div className={Styles.container}>
        {/* LEFT */}
        <motion.div
          className={Styles.left}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className={Styles.smallHeading}>Contact</p>

          <h2 className={Styles.heading}>
            Let&apos;s Work <span>Together</span>
          </h2>

          <p className={Styles.desc}>
            I&apos;m always interested in new opportunities and exciting
            frontend projects. Let&apos;s create something amazing together!
          </p>

          <div className={Styles.infoWrapper}>
            <div className={Styles.info}>
              <div className={Styles.icon}>
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>
                <p>{contactInfo.email}</p>
              </div>
            </div>

            <div className={Styles.info}>
              <div className={Styles.icon}>
                <FaPhoneAlt />
              </div>

              <div>
                <h4>Phone</h4>
                <p>{contactInfo.phone}</p>
              </div>
            </div>

            <div className={Styles.info}>
              <div className={Styles.icon}>
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Location</h4>
                <p>{contactInfo.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.form
          onSubmit={handleSubmit}
          className={Styles.form}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={Styles.row}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            rows={7}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
