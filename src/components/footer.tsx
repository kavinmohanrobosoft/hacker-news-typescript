import React from "react";
import FooterNavbar from "../molicules/footernavbar";
import Label from "../atoms/label";
import InputText from "../atoms/inputtext";
import { FooterNavbardata } from '../utils/datas'

const Footer = () => {
  return (
    <div className="footer">
      <div >
        <FooterNavbar className="navbar" data={FooterNavbardata} />
      </div>
      <div className="searchbox">
        <Label text="Search : " />
        <InputText />
      </div>
    </div>
  );
};

export default Footer;
