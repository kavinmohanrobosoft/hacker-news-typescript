import React from 'react';
import * as Types from '../utils/types'

const HeadingText = (props: Types.HeadingTextProps) => {
   return <h4 className="heading">{props.text}</h4>
}

export default HeadingText;