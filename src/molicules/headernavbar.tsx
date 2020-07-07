import React from 'react';
import Links from '../atoms/link'
import { HeaderNavbarProps, HeaderNavbarData } from '../utils/types'

const HeaderNavbar = (props:HeaderNavbarProps)=> {
    return <div className={props.className}>
        {props.data.map((item : HeaderNavbarData, index:number) => 
        <Links keyvalue={index} url={item.url} text={item.text} />)}    
    </div>
}

export default HeaderNavbar;