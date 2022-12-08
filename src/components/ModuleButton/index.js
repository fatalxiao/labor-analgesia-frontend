/**
 * @file ModuleButton.js
 */

import React from 'react';
import PropTypes from 'prop-types';

// Components
import {Button} from 'antd';

// Vendors
import classNames from 'classnames';

// Styles
import './style.scss';

const ModuleButton = ({
    className,
    ...restProps
}) => (
    <Button {...restProps}
            className={classNames('module-button', {
                [className]: className
            })}/>
);

ModuleButton.propTypes = {
    className: PropTypes.string
};

ModuleButton.defaultProps = {};

export default ModuleButton;
