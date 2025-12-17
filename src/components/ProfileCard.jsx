// Exercise 3: Props Destructuring
// Demonstrates destructuring props in the function signature

import "./ProfileCard.css";

// Destructuring props directly in the function parameter
function ProfileCard({ name, age, location }) {
  return (
    <div className="profile-card-container">
      <div className="profile-avatar">
        {name ? name.charAt(0).toUpperCase() : "?"}
      </div>
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-detail">
          <span className="label">Age:</span> {age}
        </p>
        <p className="profile-detail">
          <span className="label">Location:</span> {location}
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
