import React, { useState } from "react";

import classes from "./Footer.module.css";
import Page from "../page/Page.tsx";
import Map from "../map/Map.tsx";
import icons from "../../utils/icons.ts";
import { Icon } from "@iconify/react/dist/iconify.js";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  resume: File | null;
};

const Footer = () => {
  // Only missing fields are marked
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null,
  });

  const positions = ["Barista", "Manager", "Content Maker", "Other"];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manage resume file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const validateForm = () => {
    let newErrors: Partial<FormData> = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.position) newErrors.position = "Please select a position";
    if (!formData.resume) newErrors.resume = "Resume upload is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Thank You! We will get in touch with you ASAP!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        resume: null,
      });
    }
  };

  return (
    <Page isWithFitContent={true}>
      <div className={classes.footerContainer} id="contacts">
        <footer className={classes.footer}>
          <div className={classes.textContainer}>
            <div>
              <span>Become a part of the MATCHa BRNO family!</span>
              <h1>Join Us</h1>
            </div>
            <div className={classes.text}>
              Whether you’re a passionate matcha lover, an expert in
              hospitality, or simply looking for an exciting new opportunity,
              we’d love to hear from you. Join our team and help us bring the
              authentic taste of Japan to the heart of Europe.
              <span>Fill out the form - and we’ll get in touch!</span>
            </div>
          </div>
          <div className={classes.formContainer}>
            <form onSubmit={handleSubmit} className={classes.joinForm}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span className={classes.error}>{errors.fullName}</span>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className={classes.error}>{errors.email}</span>
              )}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className={classes.error}>{errors.phone}</span>
              )}

              <div style={{ position: "relative", width: "100%" }}>
                {" "}
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                >
                  <option value="">Select Position</option>
                  {positions.map((pos, index) => (
                    <option key={index} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
                <span className={classes.selectIcon}>
                  <Icon icon={icons.down} />
                </span>
              </div>

              {errors.position && (
                <span className={classes.error}>{errors.position}</span>
              )}

              <textarea
                name="message"
                placeholder="Why do you want to join us?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              {errors.resume && (
                <span className={classes.error}>{errors.resume}</span>
              )}

              {formData.resume && (
                <span className={classes.fileName}>
                  Selected File: {formData.resume.name}
                </span>
              )}

              <button type="submit" className={classes.submitButton}>
                Apply Now
              </button>
            </form>
          </div>
        </footer>
        <div className={classes.additionalInfo}>
          <div className={classes.infoSection}>
            <span>We are Open:</span>
            <div className={classes.hours}>
              <p style={{display: "flex", gap: ".7rem"}}>
                <p>Thursday - Friday:</p> 8AM - 8PM
              </p>
              <p style={{display: "flex", gap: ".7rem"}}>
                <p>Saturday:</p> 10AM - 8PM
              </p>
              <p style={{display: "flex", gap: ".7rem"}}>
                <p>Sunday:</p> 11AM - 3PM
              </p>
              <p style={{display: "flex", gap: ".7rem"}}>
                <p>Monday:</p> Closed
              </p>
            </div>
          </div>
          <div className={classes.infoSection}>
            <span>You can find Us on</span>
            <div><Map /></div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Footer;
