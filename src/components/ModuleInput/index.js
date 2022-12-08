/**
 * @file ModuleInput.js
 */

import React from 'react';
import PropTypes from 'prop-types';

// Components
import {Input} from 'antd';

// Vendors
import classNames from 'classnames';

// Styles
import './style.scss';

const ModuleInput = ({
    className,
    ...restProps
}) => (
    <Input {...restProps}
           className={classNames('module-input', {
               [className]: className
           })}/>
);

ModuleInput.propTypes = {
    className: PropTypes.string
};

ModuleInput.defaultProps = {
    size: 'large'
};

export default ModuleInput;
