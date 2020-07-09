import React from 'react';
import * as Types from '../utils/types'

const List = (props: Types.ListProps) => {
return <ul className={props.className}>{props.data ? props.data : <><li>Item: 1</li><li>Item: 2</li><li>Item: next...</li></>}</ul>
}

export default List;