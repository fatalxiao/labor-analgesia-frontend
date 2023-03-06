/**
 * @file NavPatientListWrapper.js
 */

import React, {useCallback} from 'react';
import {useModelState, useModelActions} from 'react-vivy';

// Components
import FlatButton from 'alcedo-ui/FlatButton';
import PatientList from './NavPatientList';

// Styles
import './NavPatientListWrapper.scss';

const NavPatientListWrapper = () => {

    const {list: patientList} = useModelState('patients');
    const {push: pushRoute} = useModelActions('route');

    /**
     * 跳转到列表页
     * @type {function(): *}
     */
    const goToList = useCallback(() => {
        pushRoute?.({
            route: '/app/patient-list'
        });
    }, [
        pushRoute
    ]);

    return (
        <div className="nav-patient-list-wrapper">

            <FlatButton className="all-patients-button"
                        value="All Patients"
                        iconCls="icon-list"
                        onClick={goToList}>
                <span className="patients-count">
                    [{patientList?.length || 0}]
                </span>
            </FlatButton>

            <PatientList/>

        </div>
    );

};

export default NavPatientListWrapper;
