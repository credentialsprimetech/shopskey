"use client";

import React from "react";
import {
  Shield,
  Lock,
  Mail,
  Phone,
  FileText,
  Eye,
  CreditCard,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-white shadow-sm border-bottom">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="h2 mb-0 fw-bold" style={{ color: "#FC501B" }}>
                <Shield className="me-3" size={32} />
                Privacy Policy
              </h1>
            </div>
            <div className="col-md-4 text-md-end">
              <span className="badge bg-secondary px-3 py-2">Shopskey</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* Introduction */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm mb-5">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <Lock style={{ color: "#FC501B" }} size={36} />
                  </div>
                  <h2 className="h3 fw-bold mb-3">Privacy Policy Statement</h2>
                </div>
                <p className="lead text-muted text-center">
                  Shopskey is highly committed to keeping client's personal
                  information safe and secure and we collect only essential and
                  inevitable information to process your order. We never share
                  any of your information with any individual outside our
                  company in any way until you agree to permit us for doing so.
                </p>
              </div>
            </div>

            {/* Information Collection */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <FileText style={{ color: "#FC501B" }} size={24} />
                  </div>
                  <h3 className="h4 fw-bold mb-0">Information Collection</h3>
                </div>
                <p className="text-muted mb-4">
                  We collect clients' information via Email, Phone and Contact
                  Us and Order Form and it is protected as per privacy policy
                  set by Shopskey. Clients' information is never disclosed,
                  shared or sold to any third party services.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <h5
                      className="fw-semibold mb-3"
                      style={{ color: "#FC501B" }}
                    >
                      Required Information:
                    </h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Client's name
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Company's name
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Billing address
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Email address
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Phone and fax numbers
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5
                      className="fw-semibold mb-3"
                      style={{ color: "#6c757d" }}
                    >
                      Additional Information:
                    </h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i
                          className="fas fa-info-circle"
                          style={{ color: "#6c757d" }}
                        ></i>{" "}
                        Secondary email
                      </li>
                      <li className="mb-2">
                        <i
                          className="fas fa-info-circle"
                          style={{ color: "#6c757d" }}
                        ></i>{" "}
                        Order details
                      </li>
                      <li className="mb-2">
                        <i
                          className="fas fa-info-circle"
                          style={{ color: "#6c757d" }}
                        ></i>{" "}
                        Place of residence
                      </li>
                      <li className="mb-2">
                        <i
                          className="fas fa-info-circle"
                          style={{ color: "#6c757d" }}
                        ></i>{" "}
                        Creative brief information
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="alert alert-light border-start border-4"
                  style={{ borderColor: "#FC501B !important" }}
                >
                  <strong>Technical Information Collected:</strong> IP address,
                  browser version, operating system, visit date and time. We use
                  Google Analytics or similar tools for data collection.
                </div>
              </div>
            </div>

            {/* Usage of Information */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <Eye style={{ color: "#FC501B" }} size={24} />
                  </div>
                  <h3 className="h4 fw-bold mb-0">
                    Usage Of Collected Information
                  </h3>
                </div>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="h-100 p-3 bg-light rounded">
                      <Mail
                        className="mb-2"
                        style={{ color: "#FC501B" }}
                        size={24}
                      />
                      <h5 className="fw-semibold">Communication</h5>
                      <p className="text-muted mb-0">
                        Email addresses are used for order status updates,
                        comments, opinions, and product delivery.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="h-100 p-3 bg-light rounded">
                      <CreditCard
                        className="mb-2"
                        style={{ color: "#FC501B" }}
                        size={24}
                      />
                      <h5 className="fw-semibold">Payment Processing</h5>
                      <p className="text-muted mb-0">
                        Billing information is essential for payment processing
                        and order fulfillment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="fw-semibold mb-3">We may also send you:</h5>
                  <div className="row">
                    <div className="col-md-3 col-6 text-center mb-3">
                      <div className="p-3">
                        <div
                          className="rounded-circle bg-light mx-auto mb-2 d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <span style={{ color: "#FC501B" }}>📧</span>
                        </div>
                        <small className="text-muted">Website Updates</small>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 text-center mb-3">
                      <div className="p-3">
                        <div
                          className="rounded-circle bg-light mx-auto mb-2 d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <span style={{ color: "#FC501B" }}>🎯</span>
                        </div>
                        <small className="text-muted">Promotional Offers</small>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 text-center mb-3">
                      <div className="p-3">
                        <div
                          className="rounded-circle bg-light mx-auto mb-2 d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <span style={{ color: "#FC501B" }}>🚀</span>
                        </div>
                        <small className="text-muted">New Products</small>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 text-center mb-3">
                      <div className="p-3">
                        <div
                          className="rounded-circle bg-light mx-auto mb-2 d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <span style={{ color: "#FC501B" }}>📰</span>
                        </div>
                        <small className="text-muted">Industry News</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Privacy */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <CreditCard style={{ color: "#FC501B" }} size={24} />
                  </div>
                  <h3 className="h4 fw-bold mb-0">Privacy Of Payments</h3>
                </div>
                <p className="text-muted mb-4">
                  To make sure the practice of the best privacy for payments, we
                  offer acceptance from multiple payment options. The payment
                  processor where the clients put their billing information uses
                  Secure Sockets Layer (SSL) which is indicated in the domain as
                  "https://".
                </p>
                <div className="alert alert-success border-0">
                  <div className="d-flex align-items-center">
                    <Shield
                      className="me-2"
                      style={{ color: "#198754" }}
                      size={20}
                    />
                    <strong>SSL Secured:</strong> We assure that there is no
                    issue at all with the privacy of payment process and billing
                    information.
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <Lock style={{ color: "#FC501B" }} size={24} />
                  </div>
                  <h3 className="h4 fw-bold mb-0">Confidentiality</h3>
                </div>
                <p className="text-muted mb-4">
                  Confidentiality is surely a serious concern and we are fully
                  aware of the fact and this is why we never compromise over the
                  confidentiality of our clients' information.
                </p>

                <div className="row">
                  <div className="col-md-8">
                    <p className="text-muted">
                      We use your personal information in order to keep in touch
                      with you so that we can have smooth communication about
                      the order process. Your entire information is treated as
                      confidential and saved at a secure location which is
                      accessible by designated members only.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center p-3 bg-light rounded">
                      <Shield
                        style={{ color: "#FC501B" }}
                        size={32}
                        className="mb-2"
                      />
                      <h6 className="fw-bold">100% Secure</h6>
                      <small className="text-muted">
                        Designated Access Only
                      </small>
                    </div>
                  </div>
                </div>

                <div className="alert alert-warning border-0 mt-4">
                  <div className="d-flex align-items-start">
                    <AlertCircle
                      className="me-2 flex-shrink-0 mt-1"
                      style={{ color: "#f57c00" }}
                      size={20}
                    />
                    <div>
                      <strong>Important:</strong> Your personal information will
                      never be released to any third party in any circumstances
                      until you allow or we are forced by law.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amendments & Disclosure */}
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <FileText
                        style={{ color: "#FC501B" }}
                        size={24}
                        className="me-2"
                      />
                      <h4 className="h5 fw-bold mb-0">Amendments</h4>
                    </div>
                    <p className="text-muted mb-0">
                      Shopskey may amend its privacy policy for more strict
                      security concerns if needed. However, all amendments will
                      be declared with prior notice of the effective date.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <Eye
                        style={{ color: "#FC501B" }}
                        size={24}
                        className="me-2"
                      />
                      <h4 className="h5 fw-bold mb-0">
                        Information Disclosure
                      </h4>
                    </div>
                    <p className="text-muted mb-0">
                      Information disclosure can only take place if we are to
                      abide by country law for judicial proceeding, court order,
                      or any other legal procedure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5 text-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <MessageCircle style={{ color: "#FC501B" }} size={28} />
                </div>
                <h3 className="h4 fw-bold mb-3">Contact Us</h3>
                <p className="text-muted mb-4">
                  If you have any confusion or concerns regarding our privacy
                  policies, you can contact us via our contact us form.
                </p>
                <Link
                  href="/contact-us"
                  className="btn btn-lg px-5"
                  style={{
                    backgroundColor: "#FC501B",
                    border: "none",
                    color: "white",
                  }}
                >
                  <Mail size={20} className="me-2" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
