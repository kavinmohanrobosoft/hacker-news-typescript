import React from 'react';
import * as Types from '../utils/types'

const Paratext = (props: Types.ParatextProps) => {
return <p className={props.className}>{props.text ? props.text : "This is Paragraph Text"}</p>
}

export default Paratext;