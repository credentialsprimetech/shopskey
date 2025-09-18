"use client";
import { Modal, ModalBody, ModalHeader, Input } from "reactstrap";
import { useForm, useWatch } from "react-hook-form";
import "./LeadModal.css";
import { useEffect, useState } from "react";
import { sendEmail } from "@/app/utils/email";
import { useModal } from "@/app/utils/Context/ModalContext";

export default function LeadModal() {
  const { isOpen, toggleModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      budget: 0,
      consent: false,
    },
  });

  const selectedService = useWatch({ control, name: "service" });
  const budgetValue = useWatch({ control, name: "budget" });
  useEffect(() => {
    const modalShown = sessionStorage.getItem("leadModalShown");

    if (!modalShown) {
      const timer = setTimeout(() => {
        toggleModal(); // open modal
        sessionStorage.setItem("leadModalShown", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [toggleModal]);
  const onSubmit = async (data) => {
    if (!data.consent) {
      setFormStatus("You must agree to receive SMS updates before submitting.");
      return;
    }

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
          toggleModal();
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

  const handleBudgetChange = (event) => {
    setValue("budget", event.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggleModal}
      style={{ zIndex: 990 }}
      size="xl"
      centered
    >
      <ModalHeader
        toggle={toggleModal}
        style={{ position: "absolute", top: 10, right: 10, zIndex: 990 }}
      />
      <ModalBody style={{ padding: "2rem" }}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="contact_form"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {/* Special Offer Heading */}
                <h2 className="special_offer_heading mb-3">
                  Claim Your <span>Special Offer</span> Today!
                </h2>
                <p className="special_offer_desc mb-4">
                  Fill out the form below to unlock an exclusive offer from our
                  services. Take the first step in growing your brand—our team
                  will reach out shortly.
                </p>

                {/* Status Message */}
                {formStatus && (
                  <div
                    className={`alert ${
                      formStatus.includes("Success")
                        ? "alert-success"
                        : "alert-danger"
                    } mb-4`}
                  >
                    {formStatus}
                  </div>
                )}

                <div className="row gy-4">
                  {/* Full Name */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="form-control-huz"
                        disabled={isSubmitting}
                        {...register("fullName", {
                          required: "Full Name is required",
                        })}
                      />
                      <i className="fa-regular fa-user"></i>
                      {errors.fullName && (
                        <span className="error_text text-danger small">
                          {errors.fullName.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form_group">
                      <input
                        type="number"
                        placeholder="Phone"
                        className="form-control-huz"
                        disabled={isSubmitting}
                        {...register("phone", {
                          required: "Phone is required",
                          pattern: {
                            value: /^\+?[0-9]+$/,
                            message: "Only numbers and ",
                          },
                        })}
                      />
                      <i className="fa-solid fa-mobile-screen"></i>
                      {errors.phone && (
                        <span className="error_text text-danger small">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form_group">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control-huz"
                        disabled={isSubmitting}
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      <i className="fa-regular fa-envelope"></i>
                      {errors.email && (
                        <span className="error_text text-danger small">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Select */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form_group">
                      <select
                        className="form-select minimal"
                        defaultValue=""
                        disabled={isSubmitting}
                        {...register("service", {
                          required: "Please select a service",
                        })}
                      >
                        <option value="" disabled>
                          Select Your Required Service
                        </option>
                        <option value="seo">SEO</option>
                        <option value="smm">Social Media Marketing</option>
                        <option value="web">Web Development</option>
                        <option value="logo">Logo Design & Branding</option>
                        <option value="website">
                          Website Design & Development
                        </option>
                        <option value="ppc">Pay Per Click (PPC)</option>
                        <option value="content">Content Marketing</option>
                      </select>
                      {errors.service && (
                        <span className="error_text text-danger small">
                          {errors.service.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Budget */}
                  {selectedService && (
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label htmlFor="budget" className="form-label mb-2">
                          Budget Range: <strong>${budgetValue}</strong>
                        </label>
                        <Input
                          type="range"
                          id="budget"
                          min="0"
                          max="10000"
                          step="500"
                          className="form-range"
                          disabled={isSubmitting}
                          value={budgetValue}
                          onChange={handleBudgetChange}
                        />
                      </div>
                    </div>
                  )}

                  {/* Project Details */}
                  <div className="col-lg-12">
                    <div className="form_group">
                      <textarea
                        placeholder="Project Details (Optional)"
                        className="form-control-huz"
                        rows="4"
                        disabled={isSubmitting}
                        {...register("details")}
                      ></textarea>
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="col-lg-12">
                    <div className="consent_box mb-3">
                      <input
                        type="checkbox"
                        id="consent"
                        {...register("consent", { required: true })}
                      />
                      <label htmlFor="consent">
                        By providing your phone number and checking this box,
                        you agree to receive SMS messages from Shopskey
                        regarding updates, offers, and promotions. Message
                        frequency may vary. Standard message and data rates may
                        apply. Reply STOP to unsubscribe or HELP for assistance.
                        <a href="/privacy-policy" target="_blank">
                          {" "}
                          Privacy Policy
                        </a>{" "}
                        |{" "}
                        <a href="/terms-and-condition" target="_blank">
                          Terms & Conditions
                        </a>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-lg-12">
                    <button
                      className="submit_btn btn btn-primary w-100 py-3"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request Now"}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Image Section */}
            <div className="col-lg-5 d-none d-lg-block">
              <div
                className="img_box text-center"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img
                  src="/assets/img/sec_eight_abs.png"
                  alt="Proposal Illustration"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
