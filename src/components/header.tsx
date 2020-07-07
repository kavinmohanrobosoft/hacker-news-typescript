import React from 'react';
import HeaderLeft from '../organisms/headerleft';
import HeaderRight from '../organisms/headerright';


const Header = () => {
    return <div className="header">
        <HeaderLeft />
        <HeaderRight />
    </div>
}

export default Header;