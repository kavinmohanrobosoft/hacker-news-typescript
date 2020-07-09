import React from "react";
import Links from "../atoms/link";
import { FooterNavbarProps, FooterNavbarData } from "../utils/types";

const FooterNavbar = (props: FooterNavbarProps) => {
  return (
    <div className={props.className}>
      {props.data.map((item: FooterNavbarData, index: number) => (
        <Links keyvalue={index} url={item.url} text={item.text} />
      ))}
    </div>
  );
};

export default FooterNavbar;
