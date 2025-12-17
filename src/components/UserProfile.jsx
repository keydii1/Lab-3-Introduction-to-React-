// Exercise 2 & 4: UserProfile Component with Props
// Demonstrates passing data through props and using default parameters

import "./UserProfile.css";

// ES6 default parameters for name, bio and theme props (Exercise 4)
function UserProfile({
  name = "Guest User",
  bio = "No bio provided",
  theme = "light",
}) {
  return (
    <div className={`profile-card theme-${theme}`}>
      <h2>{name}</h2>
      <p className="bio">{bio}</p>
    </div>
  );
}

export default UserProfile;
