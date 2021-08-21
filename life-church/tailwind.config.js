module.exports = {
  purge: [
    './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-back': "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1438032005730-c779502df39b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2h1cmNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')",
      },
      colors: {
        life: {
          light: '#d9ecf5',
          DEFAULT: '#8bc3db',
          dark: '#1474a4'
        }
      },
      screens: {
        'xs': '475px',
        'xm': '725px',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover', 'active'],
      scale: ['hover', 'active'],
      zIndex: ['hover', 'active']
    }
  },
  plugins: [],
}
