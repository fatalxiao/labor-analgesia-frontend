/**
 * @file App.js
 */

import React, {useMemo, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useModelActions} from 'react-vivy';
import {useAsyncComponentLoading} from 'vivy-async-component';

// Components
import Nav from './nav/Nav';
import NavTitle from './nav/title/NavTitle';
import PageLoading from 'alcedo-ui/PageLoading';
import ModuleLoading from 'components/module/loading/ModuleLoading';

// Vendors
import {renderRoutes} from 'react-router-config';

// Styles
import './App.scss';

const App = ({
    route
}) => {

    // 获取当前是否加载异步 components 的状态
    const asyncComponentLoading = useAsyncComponentLoading();

    // 获取 actions
    const {getPatientGroups} = useModelActions('patientGroup');
    const {getSensoryBlocks} = useModelActions('sensoryBlock');
    const {getObservalEndPoints} = useModelActions('observalEndPoint');
    const {getEpPlacementPoints} = useModelActions('epPlacementPoint');
    const {getPatients} = useModelActions('patients');

    /**
     * 是否正在加载基础数据
     * @type {*}
     */
    const loading = useMemo(() => {
        return getPatientGroups.isRequest()
            || getSensoryBlocks.isRequest()
            || getObservalEndPoints.isRequest()
            || getEpPlacementPoints.isRequest();
    }, [
        getPatientGroups, getSensoryBlocks,
        getObservalEndPoints, getEpPlacementPoints
    ]);

    /**
     * init
     */
    useEffect(() => {
        getPatientGroups?.();
        getSensoryBlocks?.();
        getObservalEndPoints?.();
        getEpPlacementPoints?.();
        getPatients?.();
    }, [
        getPatientGroups, getSensoryBlocks, getObservalEndPoints, getEpPlacementPoints,
        getPatients
    ]);

    return (
        <div className="app">

            <Nav/>

            <div className="app-content">

                <PageLoading visible={asyncComponentLoading}
                             showStripes={false}/>

                <NavTitle/>

                <div className="app-content-content">
                    <ModuleLoading loading={loading}>
                        {renderRoutes(route.routes)}
                    </ModuleLoading>
                </div>

            </div>

        </div>
    );

};

App.propTypes = {
    route: PropTypes.object
};

export default App;
