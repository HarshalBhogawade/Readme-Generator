import React, { useState } from 'react';
import './App.css';
import ProfileForm from './components/ProfileForm';
import AddOnsSelector from './components/AddOnsSelector';
import MarkdownPreview from './components/MarkdownPreview';
import CopyButton from './components/CopyButton';

function App() {
  // State to store user profile information
  const [profileData, setProfileData] = useState({
    name: '',
    title: '',
    bio: '',
    location: '',
    githubUsername: '',
    email: '',
    website: '',
    // Social media links
    linkedinUsername: '',
    codechefUsername: '',
    codeforcesUsername: '',
    leetcodeUsername: '',
    redditUsername: ''
  });

  // State to store selected add-ons
  const [selectedAddOns, setSelectedAddOns] = useState({
    githubStats: false,
    topLanguages: false,
    streakStats: false,
    badges: false,
    socialLinks: false,
    visitors: false
  });

  // State for dark theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Function to generate markdown based on profile data and selected add-ons
  const generateMarkdown = () => {
    let markdown = '';

    // Header section
    if (profileData.name) {
      markdown += `# Hi there! I'm ${profileData.name}\n\n`;
    }

    if (profileData.title) {
      markdown += `## ${profileData.title}\n\n`;
    }

    if (profileData.bio) {
      markdown += `${profileData.bio}\n\n`;
    }

    // Location and contact info
    if (profileData.location || profileData.email || profileData.website) {
      markdown += ` `;
      if (profileData.location) markdown += `**Location:** ${profileData.location} `;
      if (profileData.email) markdown += `**Email:** ${profileData.email} `;
      if (profileData.website) markdown += `**Website:** [${profileData.website}](${profileData.website})`;
      markdown += `\n\n`;
    }

    // Visitor Counter
    if (selectedAddOns.visitors && profileData.githubUsername) {
      markdown += `## Profile Views\n\n`;
      markdown += `![Profile Views](https://komarev.com/ghpvc/?username=${profileData.githubUsername}&color=blue&style=flat-square)\n\n`;
    }

    // GitHub Stats
    if (selectedAddOns.githubStats && profileData.githubUsername) {
      markdown += `## GitHub Stats\n\n`;
      markdown += `![${profileData.githubUsername}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${profileData.githubUsername}&show_icons=true&theme=radical)\n\n`;
    }

    // Top Languages
    if (selectedAddOns.topLanguages && profileData.githubUsername) {
      markdown += `## Top Languages\n\n`;
      markdown += `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${profileData.githubUsername}&layout=compact&theme=radical)\n\n`;
    }

    // Streak Stats
    if (selectedAddOns.streakStats && profileData.githubUsername) {
      markdown += `## GitHub Streak\n\n`;
      markdown += `![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${profileData.githubUsername}&theme=dark)\n\n`;
    }

    // Badges
    if (selectedAddOns.badges) {
      markdown += `## Technologies & Tools\n\n`;
      markdown += `![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)\n`;
      markdown += `![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)\n`;
      markdown += `![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)\n`;
      markdown += `![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)\n\n`;
    }

    // Social Links - Connect with me section
    const hasSocialLinks = profileData.githubUsername || profileData.linkedinUsername || profileData.codechefUsername || profileData.codeforcesUsername || profileData.leetcodeUsername || profileData.redditUsername || profileData.email;
    
    if (selectedAddOns.socialLinks && hasSocialLinks) {
      markdown += `## Connect with me\n\n`;
      
      if (profileData.githubUsername) {
        markdown += `[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${profileData.githubUsername})\n`;
      }
      if (profileData.linkedinUsername) {
        markdown += `[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/${profileData.linkedinUsername})\n`;
      }
      if (profileData.codechefUsername) {
        markdown += `[![CodeChef](https://img.shields.io/badge/-CodeChef-5B4638?style=for-the-badge&logo=codechef&logoColor=white)](https://www.codechef.com/users/${profileData.codechefUsername})\n`;
      }
      if (profileData.codeforcesUsername) {
        markdown += `[![Codeforces](https://img.shields.io/badge/-Codeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white)](https://codeforces.com/profile/${profileData.codeforcesUsername})\n`;
      }
      if (profileData.leetcodeUsername) {
        markdown += `[![LeetCode](https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/${profileData.leetcodeUsername})\n`;
      }
      if (profileData.redditUsername) {
        markdown += `[![Reddit](https://img.shields.io/badge/-Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white)](https://reddit.com/user/${profileData.redditUsername})\n`;
      }
      if (profileData.email) {
        markdown += `[![Gmail](https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${profileData.email})\n`;
      }
      markdown += `\n`;
    } else if (!selectedAddOns.socialLinks && hasSocialLinks) {
      // Debug message when social links are filled but addon is not enabled
      markdown += `<!-- Enable "Social Links" in Add-ons to show your social media badges -->\n\n`;
    }

    return markdown;
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
      <header className="App-header">
        <div className="header-content">
          <div className="header-text">
            <h1>GitHub Profile README Generator</h1>
            <p>This is Github Profile Readme Generator, Made using React. You can fill the input field as you want, you can select add-on feature you want to see in your profile. The Readme final Code is below , you just have to copy and paste to your readme file. If you like the project Kindly Star the Project</p>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkTheme ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="App-main">
        <div className="form-section">
          <ProfileForm 
            profileData={profileData} 
            setProfileData={setProfileData} 
          />
          <AddOnsSelector 
            selectedAddOns={selectedAddOns} 
            setSelectedAddOns={setSelectedAddOns} 
          />
        </div>

        <div className="preview-section">
          <div className="preview-header">
            <h2>Preview</h2>
            <CopyButton markdown={generateMarkdown()} />
          </div>
          <MarkdownPreview markdown={generateMarkdown()} />
        </div>
      </main>
    </div>
  );
}

export default App;