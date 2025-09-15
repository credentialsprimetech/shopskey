"use client";
import React from "react";
import {
  FileText,
  RefreshCw,
  Clock,
  DollarSign,
  Shield,
  MessageSquare,
  Phone,
  Settings,
  AlertTriangle,
  Edit,
  Smartphone,
  HelpCircle,
  StopCircle,
} from "lucide-react";

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-white shadow-sm border-bottom">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="h2 mb-0 fw-bold" style={{ color: "#FC501B" }}>
                <FileText className="me-3" size={32} />
                Terms & Conditions
              </h1>
            </div>
            <div className="col-md-4 text-md-end">
              <span className="badge bg-secondary px-3 py-2">Shopskey</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* SMS Privacy Notice */}
            <div className="alert alert-info border-0 shadow-sm mb-5">
              <div className="d-flex align-items-start">
                <Smartphone
                  className="me-3 flex-shrink-0 mt-1"
                  style={{ color: "#0dcaf0" }}
                  size={24}
                />
                <div>
                  <h5 className="fw-bold mb-2">SMS Privacy Notice</h5>
                  <p className="mb-2">
                    No mobile information will be shared with third
                    parties/affiliates for marketing/promotional purposes. All
                    categories exclude text messaging originator opt-in data and
                    consent.
                  </p>
                  <p className="mb-0">
                    <strong>Important:</strong> Messages may incur carrier
                    charges. Reply HELP for assistance or STOP to unsubscribe.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 1: Revision Policy */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <RefreshCw style={{ color: "#FC501B" }} size={24} />
                  </div>
                  <h3 className="h4 fw-bold mb-0">
                    Article 1: Revision Policy
                  </h3>
                </div>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <h5
                        className="fw-semibold mb-2"
                        style={{ color: "#FC501B" }}
                      >
                        Revision Entitlement
                      </h5>
                      <p className="text-muted mb-0">
                        Clients are entitled to a predetermined number of
                        revisions without additional charges, as specified in
                        their selected service package.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <h5
                        className="fw-semibold mb-2"
                        style={{ color: "#FC501B" }}
                      >
                        Unlimited Revisions
                      </h5>
                      <p className="text-muted mb-0">
                        Allows for up to ten (10) revision rounds, with a
                        "round" defined as a client's request followed by
                        company's delivery.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="alert alert-warning border-0 mt-4">
                  <div className="d-flex align-items-start">
                    <Edit
                      className="me-2 flex-shrink-0 mt-1"
                      style={{ color: "#f57c00" }}
                      size={20}
                    />
                    <div>
                      <strong>Important Distinction:</strong>
                      <ul className="mb-0 mt-2">
                        <li>
                          <strong>Revision:</strong> Minor changes or tweaks to
                          existing elements
                        </li>
                        <li>
                          <strong>Re-do:</strong> New requirement, significant
                          overhaul, or starting from scratch (subject to
                          additional charges)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 2: Project Initiation */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <Settings style={{ color: "#FC501B" }} size={24} />
                  </div>
                  <h3 className="h4 fw-bold mb-0">
                    Article 2: Project Initiation and Requirements
                  </h3>
                </div>

                <div className="alert alert-primary border-0">
                  <div className="d-flex align-items-start">
                    <AlertTriangle
                      className="me-2 flex-shrink-0 mt-1"
                      style={{ color: "#0d6efd" }}
                      size={20}
                    />
                    <div>
                      <strong>Critical:</strong> All project requirements,
                      documents, and additional details must be submitted at the
                      start of the project. Any requirements identified after
                      project initiation will be considered new and charged
                      accordingly.
                    </div>
                  </div>
                </div>

                <p className="text-muted">
                  Optional features, On Demand features, 3rd party API
                  integrations, and plugin integrations (free/premium) are not
                  included in discounted/promotional deals unless explicitly
                  agreed upon by both client and agency prior to project
                  commencement.
                </p>
              </div>
            </div>

            {/* Article 3: Turnaround Time */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <Clock style={{ color: "#FC501B" }} size={24} />
                  </div>
                  <h3 className="h4 fw-bold mb-0">
                    Article 3: Turnaround Time
                  </h3>
                </div>

                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="text-center p-3 bg-light rounded">
                      <div className="mb-2" style={{ color: "#FC501B" }}>
                        🎨
                      </div>
                      <h5 className="fw-semibold">Logo Design</h5>
                      <p className="text-muted mb-0">
                        24-48 hours
                        <br />
                        <small>(48 hours for 4+ concepts)</small>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center p-3 bg-light rounded">
                      <div className="mb-2" style={{ color: "#FC501B" }}>
                        🌐
                      </div>
                      <h5 className="fw-semibold">Website Design</h5>
                      <p className="text-muted mb-0">
                        48-72 hours
                        <br />
                        <small>After order confirmation</small>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center p-3 bg-light rounded">
                      <div className="mb-2" style={{ color: "#FC501B" }}>
                        ⚙️
                      </div>
                      <h5 className="fw-semibold">Development</h5>
                      <p className="text-muted mb-0">
                        3-5 weeks
                        <br />
                        <small>Depends on client feedback</small>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="alert alert-info border-0 mt-4">
                  <strong>Note:</strong> For orders placed on Fridays or
                  Saturdays, the Turnaround Time commences the following Monday,
                  excluding public holidays.
                </div>
              </div>
            </div>

            {/* Article 4 & 5: Refund Policy */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <DollarSign style={{ color: "#FC501B" }} size={24} />
                  </div>
                  <h3 className="h4 fw-bold mb-0">
                    Articles 4 & 5: Refund Policy & Claims
                  </h3>
                </div>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <h5
                      className="fw-semibold mb-3"
                      style={{ color: "#198754" }}
                    >
                      Eligible for Refund:
                    </h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Non-Delivery within agreed time
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Significant deviation from specifications
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Cannot be resolved through revisions
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5
                      className="fw-semibold mb-3"
                      style={{ color: "#dc3545" }}
                    >
                      Not Eligible:
                    </h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-times-circle text-danger me-2"></i>
                        Client inactivity for 2+ weeks
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-times-circle text-danger me-2"></i>
                        After final files delivered
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-times-circle text-danger me-2"></i>
                        Discounted services
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-times-circle text-danger me-2"></i>
                        SEO, Social Media, Hosting
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="alert alert-warning border-0">
                  <div className="d-flex align-items-center">
                    <Phone
                      className="me-2"
                      style={{ color: "#f57c00" }}
                      size={20}
                    />
                    <div>
                      <strong>How to Claim:</strong> Contact us via phone +44 20
                      3290 3311, online chat, or email at info@shopskey.com
                      within 30 days of purchase.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Articles 6-8: Service Policies */}
            <div className="row g-4 mb-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="text-center mb-3">
                      <Shield style={{ color: "#FC501B" }} size={32} />
                    </div>
                    <h5 className="fw-bold text-center mb-3">
                      Quality Assurance
                    </h5>
                    <p className="text-muted text-center mb-0">
                      We guarantee satisfaction with revisions within package
                      scope until satisfaction is achieved.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="text-center mb-3">
                      <Clock style={{ color: "#FC501B" }} size={32} />
                    </div>
                    <h5 className="fw-bold text-center mb-3">
                      Delivery Policy
                    </h5>
                    <p className="text-muted text-center mb-0">
                      25% reinitiation fee for non-response after 5 working days
                      and multiple contact attempts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="text-center mb-3">
                      <DollarSign style={{ color: "#FC501B" }} size={32} />
                    </div>
                    <h5 className="fw-bold text-center mb-3">Payment Terms</h5>
                    <p className="text-muted text-center mb-0">
                      20% surcharge for late payments. 3-day grace period before
                      service suspension.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Articles 9-12: Support & Policies */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <h3 className="h4 fw-bold mb-4">
                  Support & Communication Policies
                </h3>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <div className="d-flex align-items-center mb-2">
                        <Settings
                          style={{ color: "#FC501B" }}
                          size={20}
                          className="me-2"
                        />
                        <h5 className="fw-semibold mb-0">
                          Maintenance & Support
                        </h5>
                      </div>
                      <p className="text-muted mb-0">
                        Available 11:00 am to 8:00 pm CST, Monday to Friday.
                        Includes regular plugin and WordPress updates.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <div className="d-flex align-items-center mb-2">
                        <Clock
                          style={{ color: "#FC501B" }}
                          size={20}
                          className="me-2"
                        />
                        <h5 className="fw-semibold mb-0">SLA Response Times</h5>
                      </div>
                      <p className="text-muted mb-0">
                        24 to 72 working hours for all client inquiries and
                        support requests.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <div className="d-flex align-items-center mb-2">
                        <MessageSquare
                          style={{ color: "#FC501B" }}
                          size={20}
                          className="me-2"
                        />
                        <h5 className="fw-semibold mb-0">
                          Communication Policy
                        </h5>
                      </div>
                      <p className="text-muted mb-0">
                        Only communications through official channels are
                        considered valid. We're not responsible for unofficial
                        communications.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <div className="d-flex align-items-center mb-2">
                        <Edit
                          style={{ color: "#FC501B" }}
                          size={20}
                          className="me-2"
                        />
                        <h5 className="fw-semibold mb-0">Policy Amendments</h5>
                      </div>
                      <p className="text-muted mb-0">
                        We reserve the right to amend policies at any time
                        without prior notice. Review periodically for updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 13: SMS Terms */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <Smartphone style={{ color: "#FC501B" }} size={24} />
                  </div>
                  <h3 className="h4 fw-bold mb-0">
                    Article 13: SMS Terms & Conditions
                  </h3>
                </div>

                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="text-center p-3 bg-light rounded">
                      <div className="mb-3">
                        <div
                          className="bg-white rounded-circle mx-auto d-flex align-items-center justify-content-center"
                          style={{ width: "50px", height: "50px" }}
                        >
                          <span
                            className="h5 mb-0 fw-bold"
                            style={{ color: "#FC501B" }}
                          >
                            50-1K
                          </span>
                        </div>
                      </div>
                      <h5 className="fw-semibold">Message Frequency</h5>
                      <p className="text-muted mb-0">
                        50 to 1000 text messages daily across all users
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center p-3 bg-light rounded">
                      <div className="mb-3">
                        <HelpCircle style={{ color: "#FC501B" }} size={32} />
                      </div>
                      <h5 className="fw-semibold">Get Help</h5>
                      <p className="text-muted mb-2">
                        Reply "HELP" to any message
                      </p>
                      <small className="text-muted">
                        or contact customer support
                      </small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center p-3 bg-light rounded">
                      <div className="mb-3">
                        <StopCircle style={{ color: "#dc3545" }} size={32} />
                      </div>
                      <h5 className="fw-semibold">Opt Out</h5>
                      <p className="text-muted mb-2">
                        Reply "STOP" to unsubscribe
                      </p>
                      <small className="text-muted">
                        Effective immediately
                      </small>
                    </div>
                  </div>
                </div>

                <div className="alert alert-warning border-0 mt-4">
                  <div className="d-flex align-items-start">
                    <AlertTriangle
                      className="me-2 flex-shrink-0 mt-1"
                      style={{ color: "#f57c00" }}
                      size={20}
                    />
                    <div>
                      <strong>Important:</strong>
                      <ul className="mb-0 mt-2">
                        <li>
                          Carrier fees may apply for each message sent/received
                        </li>
                        <li>Fees vary by carrier, location, and SMS type</li>
                        <li>
                          Users are responsible for checking carrier pricing
                        </li>
                        <li>
                          Your phone number is only used for Shopskey SMS
                          services
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5 text-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <Phone style={{ color: "#FC501B" }} size={28} />
                </div>
                <h3 className="h4 fw-bold mb-3">Need Help?</h3>
                <p className="text-muted mb-4">
                  For any questions about these terms and conditions, please
                  contact us through our official channels.
                </p>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                      <div className="text-center">
                        <div className="fw-bold" style={{ color: "#FC501B" }}>
                          Phone
                        </div>
                        <div className="text-muted">+44 20 3290 3311</div>
                      </div>
                      <div className="text-center">
                        <div className="fw-bold" style={{ color: "#FC501B" }}>
                          Email
                        </div>
                        <div className="text-muted">info@shopskey.com</div>
                      </div>
                      <div className="text-center">
                        <div className="fw-bold" style={{ color: "#FC501B" }}>
                          Support Hours
                        </div>
                        <div className="text-muted">11 AM - 8 PM CST</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-dark text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2024 Shopskey. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <small className="text-muted">
                Terms last updated: December 2024
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
