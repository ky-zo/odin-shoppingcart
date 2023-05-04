/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            dropShadow: {
                white: '0 0 12px rgba(255,255, 255, 1)',
            },
        },
    },
    plugins: [],
}
