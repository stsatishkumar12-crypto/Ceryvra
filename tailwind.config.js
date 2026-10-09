/** @type {import('tailwindcss').Config} */
// Design tokens copied 1:1 from the client HTML files (identical in all 15 pages).
export default {
  "content": [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  "darkMode": "class",
  "theme": {
    "extend": {
      "colors": {
        "tertiary-fixed": "#89f5e7",
        "outline": "#757684",
        "tertiary": "#003c36",
        "on-surface-variant": "#444653",
        "on-secondary": "#ffffff",
        "surface-dim": "#cbdbf5",
        "on-tertiary-fixed-variant": "#005049",
        "surface-container-highest": "#d3e4fe",
        "error": "#ba1a1a",
        "secondary-fixed-dim": "#bec6e0",
        "on-primary": "#ffffff",
        "on-primary-fixed-variant": "#173bab",
        "primary-fixed-dim": "#b8c4ff",
        "surface-container": "#e5eeff",
        "on-tertiary": "#ffffff",
        "on-surface": "#0b1c30",
        "secondary-fixed": "#dae2fd",
        "inverse-surface": "#213145",
        "surface-bright": "#f8f9ff",
        "surface-tint": "#3755c3",
        "secondary-container": "#dae2fd",
        "tertiary-fixed-dim": "#6bd8cb",
        "on-tertiary-container": "#5fcdbf",
        "on-secondary-fixed": "#131b2e",
        "on-primary-fixed": "#001453",
        "secondary": "#565e74",
        "on-secondary-fixed-variant": "#3f465c",
        "background": "#f8f9ff",
        "inverse-primary": "#b8c4ff",
        "surface-variant": "#d3e4fe",
        "on-primary-container": "#a8b8ff",
        "surface-container-low": "#eff4ff",
        "surface": "#f8f9ff",
        "inverse-on-surface": "#eaf1ff",
        "error-container": "#ffdad6",
        "on-background": "#0b1c30",
        "primary": "#00288e",
        "on-tertiary-fixed": "#00201d",
        "tertiary-container": "#00554e",
        "on-error-container": "#93000a",
        "primary-fixed": "#dde1ff",
        "surface-container-lowest": "#ffffff",
        "primary-container": "#1e40af",
        "on-error": "#ffffff",
        "outline-variant": "#c4c5d5",
        "on-secondary-container": "#5c647a",
        "surface-container-high": "#dce9ff"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "margin-mobile": "1rem",
        "space-sm": "0.5rem",
        "space-xs": "0.25rem",
        "space-lg": "1.5rem",
        "space-md": "1rem",
        "gutter": "1.25rem",
        "gutter-mobile": "0.75rem",
        "margin": "2rem",
        "space-xl": "2.25rem"
      },
      "fontFamily": {
        "headline-sm": [
          "Inter"
        ],
        "label-sm": [
          "Inter"
        ],
        "headline-lg-mobile": [
          "Inter"
        ],
        "body-md": [
          "Inter"
        ],
        "label-lg": [
          "Inter"
        ],
        "headline-md": [
          "Inter"
        ],
        "label-md": [
          "Inter"
        ],
        "headline-lg": [
          "Inter"
        ],
        "headline-xl": [
          "Inter"
        ],
        "body-lg": [
          "Inter"
        ],
        "body-sm": [
          "Inter"
        ],
        "headline-xl-mobile": [
          "Inter"
        ]
      },
      "fontSize": {
        "headline-sm": [
          "16px",
          {
            "lineHeight": "24px",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "label-sm": [
          "11px",
          {
            "lineHeight": "14px",
            "letterSpacing": "0.025em",
            "fontWeight": "600"
          }
        ],
        "headline-lg-mobile": [
          "22px",
          {
            "lineHeight": "28px",
            "letterSpacing": "-0.015em",
            "fontWeight": "600"
          }
        ],
        "body-md": [
          "14px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "label-lg": [
          "14px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0.005em",
            "fontWeight": "600"
          }
        ],
        "headline-md": [
          "20px",
          {
            "lineHeight": "28px",
            "letterSpacing": "-0.015em",
            "fontWeight": "600"
          }
        ],
        "label-md": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.01em",
            "fontWeight": "500"
          }
        ],
        "headline-lg": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "headline-xl": [
          "36px",
          {
            "lineHeight": "44px",
            "letterSpacing": "-0.025em",
            "fontWeight": "700"
          }
        ],
        "body-lg": [
          "16px",
          {
            "lineHeight": "26px",
            "letterSpacing": "-0.005em",
            "fontWeight": "400"
          }
        ],
        "body-sm": [
          "12px",
          {
            "lineHeight": "18px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "headline-xl-mobile": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.02em",
            "fontWeight": "700"
          }
        ]
      }
    }
  },
  "plugins": []
};
