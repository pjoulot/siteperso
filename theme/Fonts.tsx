import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/Poppins/Poppins-Black.ttf') format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/Poppins/Poppins-ExtraBold.ttf') format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/Poppins/Poppins-SemiBold.ttf') format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Poppins/Poppins-RegularItalic.ttf') format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/Poppins/Poppins-Light.ttf') format('truetype');
      }
      `}
  />
);

export default Fonts;
