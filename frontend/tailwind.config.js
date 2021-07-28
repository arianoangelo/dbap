// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        container: {
            center: true,
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1010px',
        },
        colors: {
            gray: colors.gray,
            blue: colors.sky,
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}