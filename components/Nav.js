import { BellIcon, MessengerIcon, CaretIcon,
    PlusIcon, CogIcon, ChevronIcon,  BoltIcon
} from '../public/static/index';
import { ReactComponent as ArrowIcon }  from '../public/static/arrow.svg';
import { BellIconStyle, MessengerIconStyle } from '../components/styles/IconStyle';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';


const Navigation = () => {
    return(
        <>
             <ArrowIcon />
             <MessengerIconStyle src={MessengerIcon} alt="arrowicon"  />
        </>
    )
}

export default Navigation;

