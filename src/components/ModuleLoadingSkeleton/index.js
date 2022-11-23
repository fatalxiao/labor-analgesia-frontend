/**
 * @file ModuleLoadingSkeleton.js
 */

import React from 'react';
import PropTypes from 'prop-types';

// Components
import {Skeleton} from 'antd';

// Vendors
import classNames from 'classnames';

// Styles
import './style.scss';

const ModuleLoadingSkeleton = ({
    className,
    ...restProps
}) => (
    <Skeleton {...restProps}
              className={classNames('module-loading-skeleton', {
                  [className]: className
              })}/>
);

ModuleLoadingSkeleton.propTypes = {
    className: PropTypes.string
};

ModuleLoadingSkeleton.defaultProps = {
    title: false,
    paragraph: {
        rows: 5
    },
    active: true
};

export default ModuleLoadingSkeleton;
