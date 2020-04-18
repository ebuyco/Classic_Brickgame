import { BellIcon, MessengerIcon, CaretIcon,
    PlusIcon, CogIcon, ChevronIcon, ArrowIcon, BoltIcon
} from './Icons';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';


const Navigation = () => {
    return(
        <>
             <img src='../static/arrow.svg' alt="bellicon" className="bellicon" />
             <img src='../static/bell.svg' alt="arrowicon" className="arrowicon" />
        </>
    )
}

export default Navigation;

