/**
 * @file PatientInfo.js
 */

import React, {useMemo, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useModelActions} from 'react-vivy';
import {useIsApiSuccess} from 'vivy-api';

// Components
import ModuleLoading from 'components/module/loading/ModuleLoading';
import PatientForm from './PatientForm';
import StepAction from 'components/StepAction';

// Styles
import './PatientInfo.scss';

const PatientInfo = ({
    match
}) => {

    const isGetPatientInfoStatusSuccess = useIsApiSuccess('patientInfo/getPatientInfo');
    const {push: pushRoute} = useModelActions('route');
    const {getPatientInfo, updatePatientInfo} = useModelActions('patientInfo');
    const {updatePatientStep} = useModelActions('editPatient');

    /**
     * 从路由 params 中取出 patientId
     */
    const patientId = useMemo(() => {
        return match.params.id;
    }, [
        match.params.id
    ]);

    /**
     * 获取数据
     * @type {function(): *}
     */
    const loadData = useCallback(() => {
        patientId ?
            getPatientInfo?.({
                id: patientId
            })
            :
            pushRoute?.({
                route: '/app/patient-list'
            });
    }, [
        patientId,
        getPatientInfo, pushRoute
    ]);

    /**
     * 保存到后端
     * @type {function(): *}
     */
    const save = useCallback(() => {
        updatePatientInfo?.({
            id: patientId,
            callback: () => pushRoute?.({
                route: `/app/patient/analgesia/${patientId}`
            })
        });
    }, [
        patientId,
        updatePatientInfo, pushRoute
    ]);

    /**
     * 更新 step
     */
    useEffect(() => {
        updatePatientStep?.({
            activatedStep: 0
        });
    }, [
        updatePatientStep
    ]);

    /**
     * 加载新数据
     */
    useEffect(() => {
        loadData();
    }, [
        loadData
    ]);

    return (
        <div className="patient-info">
            <ModuleLoading loading={!isGetPatientInfoStatusSuccess}>

                <PatientForm patientId={patientId}/>

                <StepAction isFirst={true}
                            onNext={save}/>

            </ModuleLoading>
        </div>
    );

};

PatientInfo.propTypes = {
    match: PropTypes.object
};

export default PatientInfo;
