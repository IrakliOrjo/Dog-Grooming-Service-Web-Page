module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      body: '#CFFFB3',
      blue: {
        DEFAULT: '#000958',
        secondary: '#67698B',
      },
      orange: {
        DEFAULT: '#496E56',
        secondary: '#FFCE9D',
        tertiary: '#FFF0E1',
        quaternary: '#FFFAF5',
        hover: '#6C9D7E',
      },
      yellow: {
        DEFAULT: '#FFDA54',
        secondary: '#FFF3D2',
      },
      white: '#FCEC52',
      pink: 'pink',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        triangle: "url('/src/assets/img/triangle.svg')",
      },
      boxShadow: {
        primary: '0px 4px 40px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};