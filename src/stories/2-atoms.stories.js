import React from 'react';
import { action } from '@storybook/addon-actions';
import Heading from '../atoms/heading'
import InputText from '../atoms/inputtext'
import Label from '../atoms/label'
import Link from '../atoms/link'
import List from '../atoms/list'
import OlList from '../atoms/ollist'
import Opentext from '../atoms/opentext'
import Paratext from '../atoms/paratext'
import Textarea from '../atoms/textarea'

export default {
    title: 'Atoms'
}
export const _Heading = () => <Heading />;
export const _Input = () => <InputText />;
export const _Label = () => <Label />;
export const _Link = () => <Link onClick={() => action('clicked')}/>;
export const _List = () => <List />;
export const _OlList = () => <OlList />;
export const _Opentext = () => <Opentext />;
export const _Paratext = () => <Paratext />;
export const _Textarea = () => <Textarea />;