/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './client/src/**/*.{js,jsx,ts,tsx}',
        "./client/Pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {

            backgroundImage: {
                'bg-down-arrow': "url('/down-arrow.svg')",
                'share': "url('/share.svg')"
            },

            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },

            colors: {
                colorheader: 'rgb(245,247,250)',    
                colornav: '#18191f',
                colorblue: "#0d6efd",
                colorbuttonhover: "#0a58ca",
                
                accent: {
                    light: '#D1FAE5',
                    DEFAULT: '#10B981',
                    dark: '#065F46',
                },
            },

        },
    },
    plugins: [],
}