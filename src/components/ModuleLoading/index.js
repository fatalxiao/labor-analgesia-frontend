/**
 * @file ModuleLoading.js
 */

import React, {useMemo, forwardRef} from 'react';
import PropTypes from 'prop-types';

// Components
import ModuleLoadingSkeleton from '../ModuleLoadingSkeleton';

// Statics
import {ApiStatus} from 'vivy-api';

// Vendors
import classNames from 'classnames';

const ModuleLoading = forwardRef(({
    children, className,
    statuses,
    ...restProps
}, forwardedRef) => {

    /**
     * 是否为成功的状态
     * @type {unknown}
     */
    const successfull = useMemo(() => {
        return !statuses || statuses.length < 1
            || statuses.every(item => item === ApiStatus.SUCCESS);
    }, [
        statuses
    ]);

    return (
        <div ref={forwardedRef}
             className={classNames('module-loading', {
                 [className]: className
             })}>
            {
                successfull ?
                    children
                    :
                    <ModuleLoadingSkeleton {...restProps}/>
            }
        </div>
    );

});

ModuleLoading.propTypes = {

    children: PropTypes.any,
    className: PropTypes.string,

    statuses: PropTypes.array

};

export default ModuleLoading;
