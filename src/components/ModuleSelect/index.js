/**
 * @file ModuleSelect.js
 */

import React from 'react';
import PropTypes from 'prop-types';

// Components
import {Select} from 'antd';

// Vendors
import classNames from 'classnames';

// Styles
import './style.scss';

const ModuleSelect = ({
    className,
    ...restProps
}) => (
    <Select {...restProps}
            className={classNames('module-select', {
                [className]: className
            })}/>
);

ModuleSelect.propTypes = {
    className: PropTypes.string
};

ModuleSelect.defaultProps = {
    size: 'large',
    fieldNames: {
        label: 'name',
        value: 'id',
        options: 'options'
    }
};

export default ModuleSelect;
