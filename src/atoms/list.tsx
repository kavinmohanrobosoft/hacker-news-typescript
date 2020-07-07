import React from 'react';
import * as Types from '../utils/types'

const List = (props: Types.ListProps) => {
return <ul className={props.className}>{props.data}</ul>
}

export default List;