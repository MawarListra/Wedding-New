module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'sans' : ['Merriweather'],
        'sansLight' : ['Merriweather-Light'],
        'script' : ['Dancing Script']
      },
      backgroundColor: {
        'chocolate' : '#B49453',
      },
      width : {
        'xl' : '900px',
        'cardW' : '340px',
        'groom' : '1030px',
        'location' : '639px',
        'cardP' : '360px',
        'cardQ' : '429px'
      },
      height: {
        'xl' : '500px',
        'cardH' : '360px',
        'hero' : '686px',
        'groom' : '198px',
        'location' : '418px'
      },
      backgroundImage: {
        'landing-image' : "url('Images/LandingPage.png')",
        'pemberkatan-image' : "url('Images/Rectangle 8.png')",
        'protokol-image' : "url('Images/Prokes.png')",
        'footer-image' : "url('Images/Rectangle 30.png')",
        'card1-image' : "url('Images/L6.png')",
        'card2-image' : "url('Images/L4.png')",
        'card3-image' : "url('Images/L7.png')",
        'card4-image' : "url('Images/L3.png')",
        'quotes-image' : "url('Images/quotesBack.png')",
        'footerRes-image' : "url('Images/Rectangle 669.png')",
        'landingRes-image' : "url('Images/Rectangle 678.png')"
      }
    },
  },
  variants: {
    extend: {
      PointerEvent: ['focus','hover']
    },
  },
  plugins: [],
}
