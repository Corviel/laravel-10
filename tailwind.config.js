const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            container: {
                center: true,
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                overlayShow: "overlayShow 500ms cubic-bezier(0.16, 1, 0.3, 1)",
                contentShow: "contentShow 500ms cubic-bezier(0.16, 1, 0.3, 1)",
            },
            keyframes: {
                overlayShow: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                contentShow: {
                    from: {
                        opacity: 0,
                        transform: 'translateY(-48%)',
                    },
                    to: {
                        opacity: 1,
                        trasnform: 'translateY(-50%)',
                    },
                },
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
