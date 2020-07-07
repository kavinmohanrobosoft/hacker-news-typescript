import React from 'react';
import { LabelProps } from '../utils/types'

const Link = (props: LabelProps) => {
return <label className={props.className} >{props.text}</label>
}

export default Link;