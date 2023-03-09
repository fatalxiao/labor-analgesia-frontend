/**
 * @file ObservalData.js
 */

import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useModelActions} from 'react-vivy';

// Components
import ModuleLoading from 'components/module/loading/ModuleLoading';
import StepAction from 'components/StepAction';
import ObservalForm from './ObservalForm';

const ObservalData = ({
    match
}) => {

    const {push: pushRoute} = useModelActions('route');
    const {getPatientInfo} = useModelActions('patientInfo');
    const {getObservalData, createOrUpdateObservalData} = useModelActions('observal');
    const {updatePatientStep} = useModelActions('editPatient');

    /**
     * 从路由 params 获取 patient ID
     */
    const patientId = match?.params?.patientId;

    /**
     * 加载数据
     * @type {Function}
     */
    const loadData = useCallback(() => {

        if (!patientId) {
            pushRoute?.({
                route: '/app/patient-list'
            });
        }

        getPatientInfo?.({
            id: patientId
        });
        getObservalData?.({
            patientId
        });

    }, [
        patientId,
        pushRoute, getPatientInfo, getObservalData
    ]);

    /**
     * 返回上一步
     * @type {function(): *}
     */
    const prevStep = useCallback(() => {
        pushRoute?.({
            route: `/app/patient/analgesia/${patientId}`
        });
    }, [
        patientId,
        pushRoute
    ]);

    /**
     * 提交到后端
     * @type {function(): *}
     */
    const save = useCallback(() => {
        createOrUpdateObservalData?.({
            patientId,
            callback: () => pushRoute?.({
                route: '/app/patient-list'
            })
        });
    }, [
        patientId,
        createOrUpdateObservalData, pushRoute
    ]);

    /**
     * 初始加载数据
     */
    useEffect(() => {
        loadData();
    }, [
        loadData
    ]);

    /**
     * 初始更新 step
     */
    useEffect(() => {
        updatePatientStep?.({
            activatedStep: 2
        });
    }, [
        updatePatientStep
    ]);

    return (
        <div className="observal-data">
            <ModuleLoading loading={getObservalData.isRequest()}>

                <ObservalForm patientId={patientId}/>

                <StepAction isLast={true}
                            onPrev={prevStep}
                            onNext={save}/>

            </ModuleLoading>
        </div>
    );

};

ObservalData.propTypes = {
    match: PropTypes.object
};

export default ObservalData;
