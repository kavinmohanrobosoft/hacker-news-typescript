import React from 'react';
import { LabelProps } from '../utils/types'

const Label = (props: LabelProps) => {
return <label className={props.className} >{props.text ? props.text : "Label"}</label>
}

export default Label;