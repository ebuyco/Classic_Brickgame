import React, { Component } from 'react';
import Meta from './Meta';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
// import SEO from './Seo';
const theme = {
  indigo: '#5c6ac4',
  blue: '#007ace',
  red: '#de3618',
  red600:'#E53E3E',
  black: '#393939',
  grey: '#3A3A3A',
  grey600:'#4A5568',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  lighter: '#b3bcf5',
  default: '#5c6ac4',
  purple700:'#6B46C1',
  green500:'#48BB78',
  dark: '#202e78',
  maxWidth: '100%',
  mobileWidth: '100%',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  box1: '#1abc9c',
  box2: '#3498db',
  box3: '#9b59b6',
  box4: '#34495e',
  box5: '#f1c40f',
  box6: '#e67e22',
  box7: '#e74c3c',
  box8: '#bdc3c7',
  box9: '#2ecc71',
  box10: '#16a085'

};


const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'OpenSans';
    src: url('../../static/open-sans/OpenSans-Regular.ttf');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'OpenSans-Light';
    src: url('../../static/open-sans/OpenSans-Light.ttf');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'OpenSans-Semibold';
    src: url('../../static/open-sans/OpenSans-Semibold.ttf');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'Poppins';
    src: url('../../static/Poppins/Poppins-Regular.ttf');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
    font-family: 'Poppins_Semibold';
    src: url('../../static/Poppins/Poppins-SemiBold.ttf');
    font-weight: normal;
    font-style: normal;
    }

              /* Box sizing rules */
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            /* Remove default padding */
            ul[class],
            ol[class] {
              padding: 0;
            }

            /* Remove default margin */
            body,
            h1,
            h2,
            h3,
            h4,
            p,
            ul[class],
            ol[class],
            li,
            figure,
            figcaption,
            blockquote,
            dl,
            dd {
              margin: 0;
            }

            /* Set core body defaults */
            body {
              min-height: 100vh;
              scroll-behavior: smooth;
              text-rendering: optimizeSpeed;
              line-height: 1.5;
              font-family: 'OpenSans';
            }

            /* Remove list styles on ul, ol elements with a class attribute */
            ul[class],
            ol[class] {
              list-style: none;
            }

            /* A elements that don't have a class get default styles */
            a:not([class]) {
              text-decoration-skip-ink: auto;
            }

            /* Make images easier to work with */
            img {
              max-width: 100%;
              display: block;
            }

            /* Natural flow and rhythm in articles by default */
            article > * + * {
              margin-top: 1em;
            }

            /* Inherit fonts for inputs and buttons */
            input,
            button,
            textarea,
            select {
              font: inherit;
            }

            /* Remove all animations and transitions for people that prefer not to see them */
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
              }
            }
              a {
                text-decoration: none;
                color: ${theme.black};
              }
              button {   font-family: 'OpenSans'; }

            `;

            const StyledPage = styled.div`
              background: white;
              color: ${props => props.theme.black};
            `;

            const Inner = styled.div`
              max-width: ${props => props.theme.maxWidth};
              margin: 0 auto;
            `;



class Layout extends Component {
      render(){
      return(
        <ThemeProvider theme={theme}>
          <StyledPage>
          <GlobalStyle/>
          {/* <SEO/> */}
          <Meta/>
           <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>

      )
    }
}


export default Layout;
