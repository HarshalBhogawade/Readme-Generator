import React from 'react';

// Component for selecting add-ons (GitHub stats, badges, etc.)
function AddOnsSelector({ selectedAddOns, setSelectedAddOns }) {
  // Function to handle checkbox changes
  const handleAddOnChange = (addOnName, isChecked) => {
    setSelectedAddOns({
      ...selectedAddOns,
      [addOnName]: isChecked
    });
  };

  return (
    <div className="addons-selector">
      <h2>✨ Add-ons</h2>
      <p>Choose what to include in your README:</p>
      
      <div className="addon-item">
        <label>
          <input
            type="checkbox"
            checked={selectedAddOns.githubStats}
            onChange={(e) => handleAddOnChange('githubStats', e.target.checked)}
          />
          <span className="addon-title">📊 GitHub Stats</span>
          <small>Show your GitHub statistics</small>
        </label>
      </div>

      <div className="addon-item">
        <label>
          <input
            type="checkbox"
            checked={selectedAddOns.topLanguages}
            onChange={(e) => handleAddOnChange('topLanguages', e.target.checked)}
          />
          <span className="addon-title">💻 Top Languages</span>
          <small>Display your most used programming languages</small>
        </label>
      </div>

      <div className="addon-item">
        <label>
          <input
            type="checkbox"
            checked={selectedAddOns.streakStats}
            onChange={(e) => handleAddOnChange('streakStats', e.target.checked)}
          />
          <span className="addon-title">🔥 GitHub Streak</span>
          <small>Show your contribution streak</small>
        </label>
      </div>

      <div className="addon-item">
        <label>
          <input
            type="checkbox"
            checked={selectedAddOns.badges}
            onChange={(e) => handleAddOnChange('badges', e.target.checked)}
          />
          <span className="addon-title">🛠️ Technology Badges</span>
          <small>Add badges for technologies you use</small>
        </label>
      </div>

      <div className="addon-item">
        <label>
          <input
            type="checkbox"
            checked={selectedAddOns.socialLinks}
            onChange={(e) => handleAddOnChange('socialLinks', e.target.checked)}
          />
          <span className="addon-title">🌐 Social Links</span>
          <small>Include links to connect with you</small>
        </label>
      </div>

      <div className="addon-item">
        <label>
          <input
            type="checkbox"
            checked={selectedAddOns.visitors}
            onChange={(e) => handleAddOnChange('visitors', e.target.checked)}
          />
          <span className="addon-title">👀 Profile Views Counter</span>
          <small>Track how many people visit your profile</small>
        </label>
      </div>
    </div>
  );
}

export default AddOnsSelector;