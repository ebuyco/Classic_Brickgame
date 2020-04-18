import { BellIcon, MessengerIcon, CaretIcon,
    PlusIcon, CogIcon, ChevronIcon, ArrowIcon, BoltIcon
} from '../public/static';
import { BellIconStyle, MessengerIconStyle } from '../components/styles/IconStyle';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';


const Navigation = () => {
    return(
        <>
             <BellIconStyle src={ArrowIcon} alt="bellicon"  />
             <MessengerIconStyle src={MessengerIcon} alt="arrowicon"  />
        </>
    )
}

export default Navigation;

