import React from 'react';

// Component for the profile information form
function ProfileForm({ profileData, setProfileData }) {
  // Function to handle input changes
  const handleInputChange = (field, value) => {
    setProfileData({
      ...profileData,
      [field]: value
    });
  };

  return (
    <div className="profile-form">
      <h2>Profile Information</h2>
      
      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          value={profileData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Title/Role</label>
        <input
          type="text"
          id="title"
          placeholder="e.g., Frontend Developer, Student"
          value={profileData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="bio">Bio/Description</label>
        <textarea
          id="bio"
          placeholder="Tell people about yourself..."
          value={profileData.bio}
          onChange={(e) => handleInputChange('bio', e.target.value)}
          rows="3"
        />
      </div>

      <div className="form-group">
        <label htmlFor="githubUsername">GitHub Username *</label>
        <input
          type="text"
          id="githubUsername"
          placeholder="Your GitHub username"
          value={profileData.githubUsername}
          onChange={(e) => handleInputChange('githubUsername', e.target.value)}
        />
        <small>Required for GitHub stats and badges</small>
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="City, Country"
          value={profileData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="your.email@example.com"
          value={profileData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="website">Website/Portfolio</label>
        <input
          type="url"
          id="website"
          placeholder="https://yourwebsite.com"
          value={profileData.website}
          onChange={(e) => handleInputChange('website', e.target.value)}
        />
      </div>

      <h3 style={{marginTop: '30px', marginBottom: '20px', color: '#4a5568', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px'}}>Connect With Me</h3>

      <div className="form-group">
        <label htmlFor="linkedinUsername">LinkedIn Username</label>
        <input
          type="text"
          id="linkedinUsername"
          placeholder="your-linkedin-username"
          value={profileData.linkedinUsername}
          onChange={(e) => handleInputChange('linkedinUsername', e.target.value)}
        />
        <small>Will generate a LinkedIn badge with official logo</small>
      </div>

      <div className="form-group">
        <label htmlFor="codechefUsername">CodeChef Username</label>
        <input
          type="text"
          id="codechefUsername"
          placeholder="your-codechef-username"
          value={profileData.codechefUsername}
          onChange={(e) => handleInputChange('codechefUsername', e.target.value)}
        />
        <small>Will generate a CodeChef badge with official logo</small>
      </div>

      <div className="form-group">
        <label htmlFor="codeforcesUsername">Codeforces Username</label>
        <input
          type="text"
          id="codeforcesUsername"
          placeholder="your-codeforces-username"
          value={profileData.codeforcesUsername}
          onChange={(e) => handleInputChange('codeforcesUsername', e.target.value)}
        />
        <small>Will generate a Codeforces badge with official logo</small>
      </div>

      <div className="form-group">
        <label htmlFor="leetcodeUsername">LeetCode Username</label>
        <input
          type="text"
          id="leetcodeUsername"
          placeholder="your-leetcode-username"
          value={profileData.leetcodeUsername}
          onChange={(e) => handleInputChange('leetcodeUsername', e.target.value)}
        />
        <small>Will generate a LeetCode badge with official logo</small>
      </div>

      <div className="form-group">
        <label htmlFor="redditUsername">Reddit Username</label>
        <input
          type="text"
          id="redditUsername"
          placeholder="your-reddit-username"
          value={profileData.redditUsername}
          onChange={(e) => handleInputChange('redditUsername', e.target.value)}
        />
        <small>Will generate a Reddit badge with official logo</small>
      </div>
    </div>
  );
}

export default ProfileForm;