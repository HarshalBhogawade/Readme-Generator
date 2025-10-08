# GitHub Profile README Generator

A simple and beginner-friendly React application built with Vite that helps you create awesome GitHub profile READMEs in minutes!

🌐 **Live Demo**: [https://yourusername.github.io/github-readme-generator/](https://yourusername.github.io/github-readme-generator/)

## Features

- **User-friendly interface** for entering profile details
- **Interactive add-ons selection** with checkboxes/toggles
- **Live markdown preview** of your README
- **One-click copy to clipboard** functionality
- **Responsive design** for desktop and mobile
- **No backend required** - pure client-side React!

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with responsive design
- **JavaScript ES6+** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/github-readme-generator.git
   cd github-readme-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Deployment

### Deploy to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/github-readme-generator.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The site will automatically deploy when you push to main branch

3. **Manual deployment (alternative):**
   ```bash
   npm install gh-pages --save-dev
   npm run deploy
   ```

Your app will be available at: `https://yourusername.github.io/github-readme-generator/`

## How to Use

1. **Fill in your profile information** - Enter your name, title, bio, GitHub username, etc.
2. **Select add-ons** - Choose which features you want to include (GitHub stats, badges, etc.)
3. **Preview in real-time** - See your README markdown generated as you type
4. **Copy to clipboard** - Click the copy button to get your markdown code
5. **Paste in GitHub** - Create a repository with your username and add the README.md file

## Available Add-ons

- **GitHub Stats** - Display your GitHub statistics
- **Top Languages** - Show your most used programming languages
- **GitHub Streak** - Display your contribution streak
- **Technology Badges** - Add badges for technologies you use
- **Social Links** - Include links to connect with you
- **Profile Views Counter** - Track profile visits

## Customization

The app is designed to be beginner-friendly! You can easily customize:

- **Styling** - Modify `src/App.css` for visual changes
- **Add-ons** - Add new features in `src/components/AddOnsSelector.jsx`
- **Markdown templates** - Update the `generateMarkdown()` function in `src/App.jsx`

## Project Structure

```
github-readme-generator/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── components/
│       ├── ProfileForm.jsx
│       ├── AddOnsSelector.jsx
│       ├── MarkdownPreview.jsx
│       └── CopyButton.jsx
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the need for easy GitHub profile README creation
- Built with modern React and Vite for optimal performance
- Designed with beginners in mind

---

**Happy coding!** If you find this project helpful, please give it a star!