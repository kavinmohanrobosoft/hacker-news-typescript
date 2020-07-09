import React from 'react';
import * as Types from '../utils/types'

const Opentext = (props: Types.SpantextProps) =>{
    return <span className={props.className}>{props.text ? props.text : "This is Span Text"}</span>
}

export default Opentext;