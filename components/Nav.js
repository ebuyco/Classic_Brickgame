
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { BellIcon, BoltIcon  }from './Icons';
// import { ReactComponent as ArrowIcon } from '../public/static/arrow.svg';

const Dropdown = () => {
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
            <a href="#" className="menu__item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon__button">{props.leftIcon}</span>
                {props.children}
                <span className="icon__right">{props.rightIcon}</span>
            </a>    
        )
    }

    return(
        <div className="dropdown" style={{ height: menuHeight}} ref={dropdownRef}>
            <CSSTransition>
                
            </CSSTransition>
        </div>
    )
}

const Navigation = () => {
    return(
        <>
             <BoltIcon/>
             <BellIcon />
        </>
    )
}

export default Navigation;

