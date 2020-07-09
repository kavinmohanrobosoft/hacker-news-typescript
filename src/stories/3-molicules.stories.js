import React from 'react';
import '../styles/index.scss'
import '../styles/footer.scss'
import FooterNavbar from '../molicules/footernavbar'
import { FooterNavbardata } from '../utils/datas'

export default {
    title: 'Molicules'
}

export const _FooterNavbar = () => <div className="footer"><FooterNavbar className="navbar" data={FooterNavbardata} /></div>;