import React from "react";
import * as Types from '../utils/types'

const Textarea = (props: Types.TextareaProps) => {
  return (
    <textarea className={props.className} onChange={e => props.onchange(e)} value={props.value? props.value : "Textarea Input"}></textarea>
  );
};

export default Textarea;