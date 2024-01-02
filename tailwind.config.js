/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/js/*.js"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem"
    },
    screens: {
      'vmini' : '393px',
      'mobile' : '500px',
      'tablet' : '768px',
      'laptop' : '992px',
      'desktop' : '1200px',
      'large' : '1400px'
    }
  },
  plugins: [],
  
}

