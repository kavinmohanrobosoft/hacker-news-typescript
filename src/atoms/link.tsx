import React from 'react';
import * as Types from '../utils/types'
import { Route } from '../utils/route'

const Link = (props: Types.LinkProps) => {
return <div key={props.keyvalue} className={props.className} onClick={() => Route(props.url || '')}>{props.text}</div>
}

export default Link;