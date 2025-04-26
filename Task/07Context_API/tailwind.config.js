module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",  // Scans all files inside src, including nested folders
      "./src/**/**/*.{js,jsx,ts,tsx}", // Ensures deeper folder levels are included
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  