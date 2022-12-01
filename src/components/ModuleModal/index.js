/**
 * @file ModuleModal.js
 */

import React from 'react';
import PropTypes from 'prop-types';

// Components
import {Modal} from 'antd';

// Vendors
import classNames from 'classnames';

// Styles
import './style.scss';

const ModuleModal = ({
    className,
    ...restProps
}) => (
    <Modal {...restProps}
           className={classNames('module-modal', {
               [className]: className
           })}/>
);

ModuleModal.propTypes = {
    className: PropTypes.string
};

export default ModuleModal;
