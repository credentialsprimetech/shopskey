"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./FormComponent.css";
import { sendEmail } from "@/app/utils/email";

const FormComponent = ({
  subTitle = "Ready to save BIG?",
  headingTitle = "Sign up now and get a whopping 50% OFF!",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = async (data) => {
    console.log(data);

    setIsSubmitting(true);
    setFormStatus("");

    try {
      // PHP ko request bhejna
      const response = await fetch("/form-handler.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      const result = await response.json();
      console.log("Form submission response:", result);

      if (result.status === "success") {
        setFormStatus(
          "Success! Your request has been submitted. Check your email for confirmation."
        );

        reset();

        setTimeout(() => {
          setFormStatus("");
        }, 3000);
      } else {
        setFormStatus("Failed: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="request-form huz-request-form">
      <div className="title text-center">
        <h4 style={{ color: "#FC501B" }}>{subTitle}</h4>
      </div>

      <div className="default-form contact-form" id="form">
        <form
          className="slider-form wow fadeIn global-form"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4 className="form-sub" style={{ color: "white" }}>
            {headingTitle}
          </h4>

          {/* Status Message */}
          {formStatus && (
            <div
              className={`alert ${
                formStatus.includes("Success")
                  ? "alert-success"
                  : "alert-danger"
              } mb-3`}
            >
              {formStatus}
            </div>
          )}

          {/* Full Name */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              className="form-control"
              disabled={isSubmitting}
              {...register("fullName", {
                required: "Full Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors.name && (
              <span className="error_text text-danger small">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              className="form-control"
              disabled={isSubmitting}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="error_text text-danger small">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <input
              type="number"
              placeholder="Phone Number"
              className="form-control"
              disabled={isSubmitting}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[+]?[\d\s\-\(\)]{10,}$/i,
                  message: "Please enter a valid phone number",
                },
              })}
            />
            {errors.phone && (
              <span className="error_text text-danger small">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="form-group text">
            <textarea
              placeholder="Details & Design Preferences"
              className="form-control"
              rows="4"
              disabled={isSubmitting}
              {...register("details", {
                required: "Message is required",
                maxLength: {
                  value: 500,
                  message: "Message must be less than 500 characters",
                },
              })}
            ></textarea>
            {errors.message && (
              <span className="error_text text-danger small">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button
              type="submit"
              className="common-btn w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  ></span>
                  Submitting...
                </>
              ) : (
                <span style={{ color: "black" }}>Start Your Project Today</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
