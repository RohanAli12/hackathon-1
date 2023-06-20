/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00616C",
            },
            keyframes: {
                pingOnce: {
                    "50%": { transform: "scale(2)" },
                    100: {
                        transform: "scale(1)"
                    }
                }
            },
            animation: {
                pingOnce: "pingOnce 0.5s cubic-bezier(0,0,0.2,1)"
            }

        },
    },
    plugins: [],
}