/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/js/*.js"],
  theme: {
    fontFamily: {
      "vazir" : "vazir",
      "vazirBold" : "vazirBold",
      "nasim" : "nasim"
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)"
      }
    },
    container: {
      center: true,
      padding: "2rem"
    },
    screens: {
      'vmini' : '393px',
      'mobile' : '500px',
      'ipad' : '600px',
      'tablet' : '768px',
      'laptop' : '992px',
      'desktop' : '1200px',
      'large' : '1400px'
    }
  },
  plugins: [],
  
}

// tailwind.config = {
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
//       }
//     },
//     fontFamily: {
//       'body': [
//     'Inter', 
//     'ui-sans-serif', 
//     'system-ui', 
//     '-apple-system', 
//     'system-ui', 
//     'Segoe UI', 
//     'Roboto', 
//     'Helvetica Neue', 
//     'Arial', 
//     'Noto Sans', 
//     'sans-serif', 
//     'Apple Color Emoji', 
//     'Segoe UI Emoji', 
//     'Segoe UI Symbol', 
//     'Noto Color Emoji'
//   ],
//       'sans': [
//     'Inter', 
//     'ui-sans-serif', 
//     'system-ui', 
//     '-apple-system', 
//     'system-ui', 
//     'Segoe UI', 
//     'Roboto', 
//     'Helvetica Neue', 
//     'Arial', 
//     'Noto Sans', 
//     'sans-serif', 
//     'Apple Color Emoji', 
//     'Segoe UI Emoji', 
//     'Segoe UI Symbol', 
//     'Noto Color Emoji'
//   ]
//     }
//   }
// }