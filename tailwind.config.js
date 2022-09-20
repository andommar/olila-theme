/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        clr_primary: '#9A684B',
        clr_primary_variaton:'#EAB787',
        clr_secondary: '#638990',
        clr_dropdown: '#745044',
        clr_grey_bg:'#E5E5E5',
        clr_navigation: '#596064',
        clr_header_bg: '#F4F4F4',
        clr_font_header: '#59606',
        clr_gold: '#EAB787',
        clr_blue_ocean_grad1: '#295760',
        clr_blue_ocean_grad2: '#638990',
        clr_variant_dropdown: '#F1F1F1'
      },
      fontFamily: {
        montserrat: ['Montserrat']
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '9px',
        'tiny': '10px',
        'regular': '12px',
        'normal': '14px',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
