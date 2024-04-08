/** @type {import('tailwindcss').Config} */
const withUiKit = require('@pezeshk-book/ui-kit/withUiKit');

module.exports = withUiKit({
  content: [
    './src/**/*.{ts,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/app/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'family-regular': 'IRANSansRegular',
      'family-medium': 'IRANSansMedium',
      'family-bold': 'IRANSansBold',
      'family-light': 'IRANSansLight',
    },
    extend: {
    },
  },
  plugins: [
  ],
});
