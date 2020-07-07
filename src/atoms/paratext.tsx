import React from 'react';
import * as Types from '../utils/types'

const Paratext = (props: Types.ParatextProps) => {
return <p className={props.className}>{props.text}</p>
}

export default Paratext;