"use client";

import { sendEmail } from "@/app/utils/email";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  const [formStatus, setFormStatus] = useState(""); // Status message
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   setIsSubmitting(true);
  //   setFormStatus("");

  //   try {
  //     const response = await fetch("/form-handler.php", {
  //       method: "POST",
  //       body: new URLSearchParams(data),
  //     });

  //     const result = await response.json();

  //     if (result.status === "success") {
  //       setFormStatus("Success! " + result.message);
  //       reset();

  //       setTimeout(() => {
  //         setFormStatus("");
  //       }, 3000);
  //     } else {
  //       setFormStatus("Failed: " + result.message);
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     setFormStatus("Failed to submit. Please try again later.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form-fields">
      {formStatus && (
        <div
          className={`alert ${
            formStatus.includes("Success") ? "alert-success" : "alert-danger"
          } mb-4`}
        >
          {formStatus}
        </div>
      )}
      <div className="input-row">
        <input
          type="text"
          placeholder="First Name"
          {...register("fullName", { required: "First name is required" })}
        />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}

        <input
          type="number"
          placeholder="Phone Number"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Enter a valid phone number",
            },
          })}
        />
        {errors.phone && <p className="error">{errors.phone.message}</p>}
      </div>

      <input
        type="email"
        placeholder="Email Address"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: "Enter a valid email",
          },
        })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <textarea
        rows="5"
        placeholder="Tell Us About Your Project"
        {...register("message", { required: "Message is required" })}
      />
      {errors.message && <p className="error">{errors.message.message}</p>}

      <button type="submit" className="button-contactp" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
