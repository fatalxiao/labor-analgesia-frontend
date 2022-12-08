/**
 * @file ModuleForm.js
 */

import React from 'react';
import PropTypes from 'prop-types';

// Components
import {Form} from 'antd';

// Vendors
import classNames from 'classnames';

// Styles
import './style.scss';

const ModuleForm = ({
    className,
    ...restProps
}) => (
    <Form {...restProps}
          className={classNames('module-form', {
              [className]: className
          })}/>
);

ModuleForm.propTypes = {
    className: PropTypes.string
};

ModuleForm.defaultProps = {
    layout: 'vertical'
};

export default ModuleForm;
