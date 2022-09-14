module.exports = {
 content: require('fast-glob').sync([
    'source/**/*.{blade.php,blade.md,md,html,vue}',
    '!source/**/_tmp/*' // exclude temporary files
  ],{ dot: true }),
  theme: {
    extend: {
      colors: {
        'crimson': {
          DEFAULT: "#990000",
          900: "#A31010",
          800: "#AD2323",
          700: "#B83737",
          600: "#C24E4E",
          500: "#CC6666",
          400: "#D68181",
          300: "#E09D9D",
          200: "#EBBCBC",
          100: "#F5DCDC",
       },
       'rev-gray': {
          DEFAULT: "#58423e",
          900: "#6A524D",
          800: "#7A615D",
          700: "#8B726E",
          600: "#9C8480",
          500: "#AC9692",
          400: "#BDA9A6",
          300: "#CDBEBB",
          200: "#DED3D1",
          100: "#EEE8E7",
      },
    },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        roboto: ['Roboto Slab', 'sans-serif'],
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
