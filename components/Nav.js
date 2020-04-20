
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { BellIcon, BoltIcon, ChevronIcon, CaretIcon, CogIcon, ArrowIcon, MessengerIcon, PlusIcon  }from './Icons';
// import { ReactComponent as ArrowIcon } from '../public/static/arrow.svg';
import NavStyles from '../components/styles/NavStyle';

const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight ] = useState(null);
    const dropdownRef = useRef(null);


    useEffect(() => {
        console.log(dropdownRef.current.firstChild);
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    },[])

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height)
    }

    const DropdownItem = (props) => {
        return(
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>    
        )
    }

    return(
        <div className="dropdown" style={{ height: menuHeight}} ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon className="icon__style"/>}
                        rightIcon={<ChevronIcon className="icon__style" />}
                        goToMenu="settings">
                            Settings
                   </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon className="icon__style"/>}
                        goToMenu="animals">
                            Animals
                        </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon className="icon__style"/>}>
                        <h2>My Tutorial</h2>
                        </DropdownItem>
                    <DropdownItem
                        leftIcon={<BoltIcon className="icon__style"/>}>
                            HTML
                   </DropdownItem>
                   <DropdownItem
                        leftIcon={<BoltIcon className="icon__style"/>}>
                            CSS
                   </DropdownItem>
                   <DropdownItem
                        leftIcon={<BoltIcon className="icon__style"/>}>
                            Javascript
                   </DropdownItem>
                   <DropdownItem
                        leftIcon={<BoltIcon className="icon__style"/>}>
                            Awesome!
                   </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon className="icon__style"/>}>
                        <h2>Animals</h2>
                        </DropdownItem>
                        <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                        <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                        <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                        <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>

        </div>
    )
}

const Navbar = (props) => {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

const NavItem = (props) => {
    const [open, setOpen] = useState(false);

    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

const Navigation = () => {
    return(
        <NavStyles>
            <Navbar>
                <NavItem icon={<PlusIcon className="icon__style"/>}/>
                <NavItem icon={<BellIcon className="icon__style"/>}/>
                <NavItem icon={<MessengerIcon className="icon__style"/>}/>

                <NavItem icon={<CaretIcon className="icon__style"/>}>
                    <DropdownMenu/>
                </NavItem>    
            </Navbar>
        </NavStyles>
    )
}

export default Navigation;

