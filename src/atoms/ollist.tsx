import React from 'react';
import * as Types from '../utils/types'

const OlList = (props: Types.OlListProps) => {
return <ol className={props.className} start={props.start}>{props.data}</ol>
}

export default OlList;