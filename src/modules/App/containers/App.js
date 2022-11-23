/**
 * @file App.js
 */

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindModelActionCreators} from 'vivy';

// Components
import Nav from './nav/Nav';
import NavTitle from './nav/title/NavTitle';
import PageLoading from 'components/PageLoading';
import ModuleLoading from 'components/ModuleLoading';

// Vendors
import {renderRoutes} from 'react-router-config';

// Styles
import './App.scss';

const App = ({

    route,

    asyncComponentLoading,

    getPatientGroupsStatus, getSensoryBlocksStatus,
    getObservalEndPointsStatus, getEpPlacementPointsStatus,

    getPatientGroups, getSensoryBlocks, getObservalEndPoints, getEpPlacementPoints, getPatients

}) => {

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

                {/* { */}
                {/*     asyncComponentLoading && ( */}
                        <PageLoading/>
                {/*     ) */}
                {/* } */}

                <NavTitle/>

                <div className="app-content-content">
                    <ModuleLoading statuses={[
                        getPatientGroupsStatus,
                        getSensoryBlocksStatus,
                        getObservalEndPointsStatus,
                        getEpPlacementPointsStatus
                    ]}>
                        {renderRoutes(route.routes)}
                    </ModuleLoading>
                </div>

            </div>

        </div>
    );

};

App.propTypes = {

    route: PropTypes.object,

    asyncComponentLoading: PropTypes.bool,

    getPatientGroupsStatus: PropTypes.string,
    getSensoryBlocksStatus: PropTypes.string,
    getObservalEndPointsStatus: PropTypes.string,
    getEpPlacementPointsStatus: PropTypes.string,

    getPatientGroups: PropTypes.func,
    getSensoryBlocks: PropTypes.func,
    getObservalEndPoints: PropTypes.func,
    getEpPlacementPoints: PropTypes.func,
    getPatients: PropTypes.func

};

export default connect(state => ({

    asyncComponentLoading: state.asyncComponentLoading,

    getPatientGroupsStatus: state.apiStatus.patientGroup?.getPatientGroups,
    getSensoryBlocksStatus: state.apiStatus.sensoryBlock?.getSensoryBlocks,
    getObservalEndPointsStatus: state.apiStatus.observalEndPoint?.getObservalEndPoints,
    getEpPlacementPointsStatus: state.apiStatus.epPlacementPoint?.getEpPlacementPoints

}), dispatch => bindModelActionCreators({
    getPatientGroups: 'patientGroup/getPatientGroups',
    getSensoryBlocks: 'sensoryBlock/getSensoryBlocks',
    getObservalEndPoints: 'observalEndPoint/getObservalEndPoints',
    getEpPlacementPoints: 'epPlacementPoint/getEpPlacementPoints',
    getPatients: 'patients/getPatients'
}, dispatch))(App);
