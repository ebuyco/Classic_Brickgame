import styled from 'styled-components';

const NavStyles = styled.nav`
        width: 100%;

        .icon__style{
           width: 100%;
           height: auto;
           max-width: 5%;     
        }

        > svg{
            width: 100%;
            height: auto;
            max-width: 5%;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }    

        a { 
            color: #dadce1;
            text-decoration: none;
        }

        .navbar{
            height: 60px;
            background-color:  #151616;
            padding: 0 1rem;
            border-bottom: 1px solid #474a4d;
        }

        .nav-item{
            width: calc((60px)* 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon-button{
            width: calc((60px) * 0.5);
            height: calc((60px) * 0.5);
            background-color: #484a4d;;
            border-radius: 50%;
            padding: 5px;
            margin: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: filter 300ms;
            &:hover {
                filter: brightness(1.2);
            }

            > svg{
                fill: #dadce1;
                width: 20px;
                height: 20px;
            }
        }
`;



export default NavStyles;