import React from 'react';
import * as Types from '../utils/types'

const OlList = (props: Types.OlListProps) => {
return <ol className={props.className} start={props.start}>{props.data ? props.data : <><li>Item: 1</li><li>Item: 2</li><li>Item: next...</li></>}</ol>
}

export default OlList;