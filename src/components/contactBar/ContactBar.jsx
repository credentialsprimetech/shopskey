"use client";
import { useZendeskChat } from "@/app/utils/hooks/useZendeskChat";
import React from "react";

const ContactBar = ({ phone, email, liveChatLink, marginTopCheck = false, onLiveChatClick }) => {
  const { openChat } = useZendeskChat();

  const handleLiveChatClick = (e) => {
    e.preventDefault();

    if (onLiveChatClick) {
      // agar user ne khud ka click handler diya hai
      onLiveChatClick();
    } else {
      // warna zendesk hook ka use hoga
      openChat();
    }
  };

  return (
    <section
      style={{
        marginTop: marginTopCheck ? "0px" : "",
      }}
      className="cus-contact-bar"
    >
      <div className="cus-container">
        <div className="cus-contact-grid">
          <div className="cus-contact-box cus-highlight">
            <p>Get Custom Logo from our Best</p>
            <strong>Logo Design Agency in USA</strong>
          </div>

          <div className="cus-contact-box">
            <div className="cus-icon-text">
              <i className="fas fa-phone-alt"></i>
              <div>
                <span>Call Us</span>
                <strong>{phone}</strong>
              </div>
            </div>
          </div>

          <div className="cus-contact-box">
            <div className="cus-icon-text">
              <i className="fas fa-comments"></i>
              <div>
                <span>Start</span>
                <strong>
                  <a href={liveChatLink || "#"} onClick={handleLiveChatClick}>
                    Live Chat
                  </a>
                </strong>
              </div>
            </div>
          </div>

          <div className="cus-contact-box">
            <div className="cus-icon-text">
              <i className="fas fa-envelope"></i>
              <div>
                <span>Email Us</span>
                <strong>
                  <a href={`mailto:${email}`}>{email}</a>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
