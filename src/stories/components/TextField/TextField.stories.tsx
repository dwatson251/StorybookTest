import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TextField } from './TextField';

export default {
    title: 'Components/TextField',
    component: TextField,
} as Meta;

export const Primary: React.FunctionComponent<{}> = () => <TextField />;
