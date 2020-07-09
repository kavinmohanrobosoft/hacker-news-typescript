import React from "react";
import * as Types from '../utils/types'

const InputText = (props: Types.InputTextProps) => {
  return (
    <input type="text" className={props.className} value={props.value? props.value : "Text Input"}></input>
  );
};

export default InputText;