"use client";

import { sendEmail } from "@/app/utils/email";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";

const LogoDesignForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // ✅ Init AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleStepChange = (nextStep) => {
    setStep(nextStep);
  };

  const onSubmit = async (data) => {
 

    setIsSubmitting(true);
    setFormStatus("");

    try {
      const response = await sendEmail(data);
      console.log("Form submission success:", response);

      setFormStatus(
        "Success! Your request has been submitted. Check your email for confirmation."
      );

      reset();
      setStep(1); // ✅ Reset back to Step 1

      setTimeout(() => {
        setFormStatus("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="logo-form-section">
      <div className="logo-form-wrapper" data-aos="fade-up">
        <h3 className="logo-form-title" data-aos="fade-right">
          <span style={{ color: "#FC501B", textTransform: "capitalize" }}>
            Your Brand Deserves Better
          </span>{" "}
          Let’s Prove It
        </h3>

        {/* ✅ Status Message */}
        {formStatus && (
          <p
            className={`form-status ${
              formStatus.includes("Success") ? "success" : "error"
            }`}
            data-aos="fade-in"
          >
            {formStatus}
          </p>
        )}

        <form id="logoMultiStepForm" onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1: Logo Detail */}
          {step === 1 && (
            <div
              className="form-step-row"
              id="step1"
              data-aos="fade-right"
              key="step1"
            >
              <input
                type="text"
                className="logo-form-input"
                id="logoDetail"
                placeholder="What type of logo do you want?"
                {...register("details", { required: "Logo detail is required" })}
              />
              {errors.details && (
                <p className="error-text">{errors.details.message}</p>
              )}
              <button
                type="button"
                className="logo-form-button"
                onClick={() => handleStepChange(2)}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Start Designing
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div
              id="uni-form-step2"
              style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}
              data-aos="fade-left"
              key="step2"
            >
              <div className="uni-form-row">
                <div className="uni-form-col uni-form-col-phone">
                  <input
                    type="number"
                    className="uni-form-input uni-form-input-phone"
                    placeholder="Phone number"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="error-text">{errors.phone.message}</p>
                  )}
                </div>
                <div className="uni-form-col uni-form-col-email">
                  <input
                    type="email"
                    className="uni-form-input uni-form-input-email"
                    placeholder="Email address"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="error-text">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="uni-form-row" style={{ marginTop: "15px" }}>
                <div className="uni-form-col uni-form-col-prev">
                  <button
                    type="button"
                    className="uni-form-button uni-form-button-prev"
                    onClick={() => handleStepChange(1)}
                    data-aos="fade-right"
                  >
                    Previous
                  </button>
                </div>
                <div className="uni-form-col uni-form-col-submit">
                  <button
                    type="submit"
                    className="uni-form-button uni-form-button-submit"
                    disabled={isSubmitting}
                    data-aos="fade-left"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default LogoDesignForm;
