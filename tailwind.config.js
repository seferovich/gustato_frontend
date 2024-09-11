/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        modernFadeSlide: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px) scale(0.95)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) scale(1)',
          },
        },
      },
      animation: {
        'modern-fade-slide': 'modernFadeSlide 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
    },
    fontFamily: {
      'sans-serif': ['Inter'],
      'sans': ["'Sansita Swashed'"]
    },
    colors:{
      'black': "#212121",
      'yellow': "#FFC703",
      'white': "#FFFFFF",
    }
  },
  plugins: [],
}

