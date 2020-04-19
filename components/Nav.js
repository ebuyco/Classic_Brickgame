
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { BellIcon, BoltIcon  }from './Icons';
// import { ReactComponent as ArrowIcon } from '../public/static/arrow.svg';
import { BellIconStyle, MessengerIconStyle } from '../components/styles/IconStyle';

const Navigation = () => {
    return(
        <>
             <BoltIcon/>
             <BellIcon />
        </>
    )
}

export default Navigation;

