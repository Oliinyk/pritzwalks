/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                white: "#ffffff",
                black: "#000000",
                gray: "#f3f5f8",
                blue: "#18285e",
                turquoise: "#16899c",
                dark: "#231612",
                "gray-light": "#d8d8d8",
                "electric-blue": "#009",
                "dark-blue": "#3d4563",
            },
            fontFamily: {
                main: ["Europa-Regular"],
                mainbold: ["Europa-Bold"],
            },
            letterSpacing: {
                1: "0em",
                2: "0.025em",
                3: "0.035em",
                4: "0.05em",
                5: "0.1em",
            },
            fontSize: {
                xs: ".75rem",
                sm: ".875rem",
                tiny: ".875rem",
                base: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
                "2.5xl": "1.62rem",
                "3xl": "1.875rem",
                md: "2rem", //32px
                "4xl": "2.25rem",
                "5xl": "3rem",
                "6xl": "4rem",
                "7xl": "5rem",
            },
            boxShadow: {
                btn: "0 1px 3px 0 rgba(79, 92, 104, 0.2), 0 2px 1px -1px rgba(79, 92, 104, 0.12), 0 1px 1px 0 rgba(79, 92, 104, 0.14)",
            },
        },
    },
    plugins: [],
};
