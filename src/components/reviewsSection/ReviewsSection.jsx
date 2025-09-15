"use client";

export default function ReviewsSection({
  title = "Our Reviews",
  reviews = [
    {
      heading: "Brilliant Responsive Work",
      text: "Hired for my memoir writer captured my voice perfectly. Smooth process, professional result. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      author: "Emma Carter",
      role: "Brand Owner"
    },
    {
      heading: "Excellent Web Consultation For My Website",
      text: "Used for a business eBook. Great industry knowledge, met deadlines. First draft needed polish, but solid overall.",
      avatar: "https://randomuser.me/api/portraits/men/94.jpg",
      author: "James Patel",
      role: "Brand Owner"
    },
    {
      heading: "Loved The Work The Team Put In!",
      text: "Got a novel written. Creative and on-point, but communication lagged. Good, but stay hands-on.",
      avatar: "https://randomuser.me/api/portraits/women/94.jpg",
      author: "Sophie Nguyen",
      role: "Owner"
    }
  ]
}) {
  return (
    <section className="reviews-section">
      <h3 className="reviews-title">{title}</h3>
      <div className="reviews-row">
        {reviews.map((review, idx) => (
          <div key={idx} className={`review-card review-card${idx + 1}`}>
            <h4 className="review-head">{review.heading}</h4>
            <p className="review-text">{review.text}</p>
            <div className="review-user">
              <img className="review-avatar" src={review.avatar} alt={review.author} />
              <div className="review-user-details">
                <span className="review-author">{review.author}</span>
                <span className="review-role">{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
