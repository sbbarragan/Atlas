import React, { Fragment } from 'react';
import { Translate } from '../../HOC/Translate';
import constants from '../../../constants';

const { NoFound } = constants;
const Error404 = props =>
  props.children || (
    <Fragment>
      <Translate word={NoFound} />
    </Fragment>
  );

export default Error404;
