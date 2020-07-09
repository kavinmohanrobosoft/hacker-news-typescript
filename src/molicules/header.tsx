import React from 'react';
import HeaderLeft from './headerleft';
import Link from "../atoms/link"


const Header = () => {
    return <div className="header">
        <HeaderLeft />
        <Link className="header-login-btn" url="/login" text="login" />
    </div>
}

export default Header;