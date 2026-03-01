export default {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'react/prop-types': 'off', // Turn off prop-types rule globally
    },
};
