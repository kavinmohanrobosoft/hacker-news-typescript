import React from "react";
import Heading from "../atoms/heading";
import Spantext from "../atoms/opentext";
import HeaderNavbar from '../molicules/headernavbar';
import { HeaderNavData } from '../utils/datas'



const LogoHeader = () => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <Spantext text="Y" />
        </div>
        <div>
          <Heading text="Hacker News" className="heading" />
        </div>
        <div><HeaderNavbar className="header-navebar" data={HeaderNavData} /></div>
      </div>
    </>
  );
};

export default LogoHeader;
