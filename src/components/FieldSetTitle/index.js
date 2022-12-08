/**
 * @file FieldSetTitle.js
 */

import React from 'react';
import PropTypes from 'prop-types';

// Vendors
import classNames from 'classnames';

// Styles
import './style.scss';

const FieldSetTitle = ({
    className,
    ...restProps
}) => (
    <h3 {...restProps}
        className={classNames('field-set-title', {
            [className]: className
        })}/>
);

FieldSetTitle.propTypes = {
    className: PropTypes.string
};

export default FieldSetTitle;
