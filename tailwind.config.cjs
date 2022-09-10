/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation:{
        'slideUp': 'slideUp 0.2s ',
        'slideUp2': 'slideUp2 0.2s'
      },
      keyframes:{
        slideUp:{
          '0%':{
            transform: 'translate(-11rem, 2.4rem)',

          },
          '100%':{
            transform: 'translate(-11rem, 2rem)',
          },
        },
        slideUp2:{
          '0%':{
            transform: 'translate(-11rem, 2.4rem)',
          },
          '100%':{
            transform: 'translate(-11rem, 2rem)',
          }
        }
      }
    },

    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      norwestern: ["Norwester", "sans-serif"]
    },
    fontSize: {
      '2xl': ['2.5rem', '2.5rem'],
      'xxs': '.750rem',
      'xs': '.8125rem',
    },
    apexCharts:{
      'apexcharts-tooltip': 'width: 20px'
    },
    colors: {
      "gray-100": "#1a1d21",
      "gray-200": "#212529",
      "gray-400": "#878a99",
      "gray-500": "#adb5bd",
      "gray-600": "#bfc8e2",
      "gray-700": "#ced4da",
      "gray-800": "#eff2f7",
      "gray-900": "#f3f6f9",
      "danger-rgb": "#f06548",
      "success-rgb": "#0ab39c",
      "body-bg": "#1a1d21",
      "body-color": "#ced4da",
      "body-color-rgb": "rgba(206,212,218, 1)",
      "soft-light": "rgba(#2a2f34, 0.18)",
      "vertical-menu-bg": "#fff",
      "vertical-menu-item-color": "#5f6270",
      "vertical-menu-item-hover-color": "#405189",
      "vertical-menu-item-active-color": "#405189",
      "vertical-menu-sub-item-color": "#686b7b",
      "vertical-menu-sub-item-hover-color": "#405189",
      "vertical-menu-sub-item-active-color": "#405189",
      "vertical-menu-title-color": "#878a99",
      "vertical-menu-bg-dark": "#212529",
      "vertical-menu-item-color-dark": "#878a99",
      "vertical-menu-item-hover-color-dark": "#fff",
      "vertical-menu-item-active-color-dark": "#fff",
      "vertical-menu-sub-item-color-dark": "#7c7f90",
      "vertical-menu-sub-item-hover-color-dark": "#fff",
      "vertical-menu-sub-item-active-color-dark": "#fff",
      "vertical-menu-title-color-dark": "#5f6270",
      "header-bg": "#292e32",
      "header-item-color": "#e9ecef",
      "header-bg-dark": "#405189",
      "header-item-color-dark": "#b0c4d9",
      "topbar-search-bg": "#202328",
      "topbar-user-bg": "#31373c",
      "topbar-user-bg-dark": "#52639c",
      "footer-bg": "#212529",
      "footer-color": "#878a99",
      "topnav-bg": "#272b30",
      "topnav-item-color": "#878a99",
      "topnav-item-color-active": "#fff",
      "twocolumn-menu-iconview-bg": "#fff",
      "twocolumn-menu-bg": "#fff",
      "twocolumn-menu-iconview-bg-dark": "#212529",
      "twocolumn-menu-bg-dark": "#30363a",
      "twocolumn-menu-item-color-dark": "#878a99",
      "twocolumn-menu-item-active-color-dark": "#fff",
      "twocolumn-menu-item-active-bg-dark": "rgba(255, 255, 255, 0.15)",
      "boxed-body-bg": "#111316",
      "heading-color": "#ced4da",
      "light": "#2a2f34",
      "light-rgb": "rgba(42,47,52, 1)",
      "dark": "#eff2f7",
      "dark-rgb": "rgba(239,242,247, 1)",
      "link-color": "#ced4da",
      "link-hover-color": "#ced4da",
      "border-color": "#32383e",
      "dropdown-bg": "#292e33",
      "dropdown-link-color": "#adb5bd",
      "dropdown-link-hover-color": "#b9bfc4",
      "dropdown-link-hover-bg": "#2f343a",
      "card-bg": "#212529",
      "card-cap-bg": "#212529",
      "modal-bg": "#212529",
      "nav-tabs-link-active-color": "#f3f6f9",
      "nav-tabs-link-active-bg": "#2a2f34",
      "accordion-button-active-color": "#fff",
      "progress-bg": "#2a2f34",
      "toast-background-color": "rgba(42, 47, 52, 0.85)",
      "toast-border-color": "rgba(255, 255, 255, 0.1)",
      "toast-header-border-color": "rgba(255, 255, 255, 0.05)",
      "list-group-hover-bg": "#272b30",
      "popover-bg": "#23282c",
      "pagination-hover-bg": "#2a2f34",
      "input-bg": "#262a2f",
      "input-border": "#2a2f34",
      "input-focus-border": "#33393f",
      "input-disabled-bg": "#212529",
      "input-group-addon-bg": "#2a2f34",
      "input-check-border": "#33393f",
      "gray-300": "#2a2f34",
    }
  },
  plugins: [],
};
