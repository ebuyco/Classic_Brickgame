import styled from 'styled-components';

const NavStyles = styled.nav`
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;


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
        .navbar {
            height: 60px;
            background-color: #242526;
            padding: 0 1rem;
            border-bottom: 1px solid #474a4d;
            }
        .navbar-nav{
            height: 60px;
            background-color:  #151616;
            padding: 0 1rem;
            border-bottom: 1px solid #474a4d;
            display: flex;
        }

        .nav-item{
            width: calc((60px) * 0.8);
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

        .dropdown{
            position: absolute;
            top: 58px;
            left: 200px;
            width: 300px;
            transform: translateX(-45%);
            background-color:  #242526;
            border: 1px solid #474a4d;
            border-radius: 8px;
            padding: 1rem;
            overflow: hidden;
            transition: height 500ms ease;
        }
        .menu {
            width: 100%;
        }

        .menu-item {
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            transition: 500ms;
            padding: 0.5rem;

            &:hover{
                background-color: #525357;
            }

            .icon-button{
                margin-right: 0.5rem;
                &:hover{
                  filter: none;
                }
            }
        }

        .menu-primary-enter{
            position: absolute;
            transform: translateX(-110%);
        }
        .menu-primary-enter-active {
            transform: translateX(0%);
            transition: all 500ms ease;

        }
        .menu-primary-exit{
            position: absolute;
        }

        .menu-primary-exit-active{
                transform: translateX(-110%);
                translate: all 500ms ease;
        }

        .menu-secondary-enter{
            transform: translateX(110%);
        }

        .menu-secondary-enter-active {
            transform: translateX(0%);
            transition: all 500ms ease;
        }

        .menu-secondary-exit-active {
            transform: translateX(110%);
            transition: all 500ms ease;
        }
`;



export default NavStyles;