import React from "react";
import * as Types from '../utils/types'

const Textarea = (props: Types.TextareaProps) => {
  return (
    <textarea className={props.className} value={props.value}></textarea>
  );
};

export default Textarea;