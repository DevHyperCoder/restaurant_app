module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primaryorange: '#FF3900',
                primaryblue: '#274768',
                primaryred: '#B30733',
                primarygray: '#2E4765',
            },
            spacing: {
                94: '23.5rem',
                53: '10.3125rem',
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                '4xl-1': '57rem',
                '1/3': '33.33333333333333%',
                26: '6.5rem',
            },

            width: {
                82.5: '20.625rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
