"use client";
import { useZendeskChat } from "@/app/utils/hooks/useZendeskChat";
import "./LogoReviewSection.css";

// Reusable LiveChatButton Component
const LiveChatButton = ({ chatIcon, chatText, onClick }) => (
  <div className="live-chat-btn" onClick={onClick}>
    <img src={chatIcon} alt="Chat Icon" />
    <span>{chatText}</span>
  </div>
);

// Reusable Review Logo Component
const ReviewLogo = ({ platformName, rating, imageSrc, imageAlt }) => (
  <div className="review-logo">
    {imageSrc ? (
      <img src={imageSrc} alt={imageAlt} />
    ) : (
      <>
        <strong>{platformName}</strong>
        <br />
        ★★★★★ <span>{rating}</span>
      </>
    )}
  </div>
);

// Reusable LogoReviewSection Component
const LogoReviewSection = ({
  chatIcon,
  chatText,
  onChatButtonClick,
  reviews
}) => {
  const { openChat } = useZendeskChat(); // ✅ hook call

  const handleChatClick = () => {
    if (onChatButtonClick) {
      onChatButtonClick();
    } else {
      openChat(); // ✅ fallback to Zendesk chat
    }
  };

  return (
    <section className="logo-review-section">
      <div className="chat-and-reviews">
        <div className="left-colbtn">
          <LiveChatButton
            chatIcon={chatIcon}
            chatText={chatText}
            onClick={handleChatClick}
          />
        </div>

        <div className="right-collogo">
          {reviews.map((review, index) => (
            <ReviewLogo
              key={index}
              platformName={review.platformName}
              rating={review.rating}
              imageSrc={review.imageSrc}
              imageAlt={review.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoReviewSection;
