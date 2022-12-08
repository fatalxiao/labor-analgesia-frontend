/**
 * @file ModuleSearch.js
 */

import React from 'react';
import PropTypes from 'prop-types';

// Components
import {Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

// Vendors
import classNames from 'classnames';

// Styles
import './style.scss';

const ModuleSearch = ({
    className,
    ...restProps
}) => (
    <Input {...restProps}
           className={classNames('module-search', {
               [className]: className
           })}/>
);

ModuleSearch.propTypes = {
    className: PropTypes.string
};

ModuleSearch.defaultProps = {
    size: 'large',
    suffix: <SearchOutlined/>
};

export default ModuleSearch;
