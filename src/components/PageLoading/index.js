/**
 * @file PageLoading.js
 */

import React, {useState, useMemo, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';

// Components
import {Progress} from 'antd';

// Vendors
import classNames from 'classnames';
import {range} from 'vendors/Valid';

// Styles
import './style.scss';

const PageLoading = ({
    className, style, duration, finishDuration, loadingProgress
}) => {

    const [index, setIndex] = useState(0);

    /**
     * Current Progress percent
     * @type {unknown}
     */
    const percent = useMemo(() => {
        return loadingProgress?.[index]?.percent || 0;
    }, [
        loadingProgress, index
    ]);

    const loadingProgressLength = useMemo(() => {
        return loadingProgress?.length || 0;
    }, [
        loadingProgress
    ]);

    const updateProgress = useCallback(() => {
        setIndex(range(
            index + 1,
            0,
            loadingProgressLength ? loadingProgressLength - 1 : 0
        ));
    }, [
        index, loadingProgressLength
    ]);

    const run = useCallback(() => {
        setTimeout(() => {
            updateProgress();
        }, duration);
    }, [
        duration,
        updateProgress
    ]);

    useEffect(() => {
        run();
    }, [
        run
    ]);

    return (
        <Progress className={classNames('page-loading', {
            [className]: className
        })}
                  style={style}
                  strokeLinecap="butt"
                  percent={percent}/>
    );

};

PageLoading.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    visible: PropTypes.bool,
    duration: PropTypes.number,
    finishDuration: PropTypes.number,
    showStripes: PropTypes.bool,

    loadingProgress: PropTypes.arrayOf(PropTypes.shape({
        percent: PropTypes.number,
        timeout: PropTypes.number
    }))

};

PageLoading.defaultProps = {

    visible: false,
    duration: 250,
    finishDuration: 100,
    showStripes: true,

    loadingProgress: [{
        percent: 0,
        timeout: 0
    }, {
        percent: 50,
        timeout: 200
    }, {
        percent: 80,
        timeout: 2000
    }, {
        percent: 90,
        timeout: 2500
    }, {
        percent: 95,
        timeout: 25000
    }]

};

export default PageLoading;
