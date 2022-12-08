/**
 * @file ModuleRow.js
 */

import React from 'react';
import PropTypes from 'prop-types';

// Components
import {Row} from 'antd';

// Vendors
import classNames from 'classnames';

// Styles
import './style.scss';

const ModuleRow = ({
    className,
    ...restProps
}) => (
    <Row {...restProps}
         className={classNames('module-row', {
             [className]: className
         })}/>
);

ModuleRow.propTypes = {
    className: PropTypes.string
};

ModuleRow.defaultProps = {
    gutter: {
        xs: 8,
        sm: 16,
        md: 24
    }
};

export default ModuleRow;
