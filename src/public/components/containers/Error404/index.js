import React, { Fragment } from 'react';
import constants from '../../../constants';

const { NoFound } = constants;
const Error404 = props => props.children || <Fragment>{NoFound}</Fragment>;

export default Error404;
