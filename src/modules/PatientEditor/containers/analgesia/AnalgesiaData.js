/**
 * @file AnalgesiaData.js
 */

import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useModelActions} from 'react-vivy';

// Components
import ModuleLoading from 'components/module/loading/ModuleLoading';
import StepAction from 'components/StepAction';
import AnalgesiaTable from './AnalgesiaTable';

// Styles
import './AnalgesiaData.scss';

const AnalgesiaData = ({
    match
}) => {

    const {push: pushRoute} = useModelActions('route');
    const {getPatientInfo} = useModelActions('patientInfo');
    const {getAnalgesia, createOrUpdateAnalgesiaData} = useModelActions('analgesia');
    const {updatePatientStep} = useModelActions('editPatient');

    /**
     * 从路由 params 中取出的 patient ID
     */
    const patientId = match.params?.patientId;

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
        getAnalgesia?.({
            patientId
        });

    }, [
        patientId,
        pushRoute, getPatientInfo, getAnalgesia
    ]);

    /**
     * 返回上一步
     * @type {function(): *}
     */
    const prevStep = useCallback(() => {
        pushRoute?.({
            route: `/app/patient/info/${patientId}`
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
        createOrUpdateAnalgesiaData?.({
            patientId,
            callback: () => pushRoute?.({
                route: `/app/patient/observal/${patientId}`
            })
        });
    }, [
        patientId,
        createOrUpdateAnalgesiaData, pushRoute
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
            activatedStep: 1
        });
    }, [
        updatePatientStep
    ]);

    return (
        <div className="analgesia-data">
            <ModuleLoading loading={getAnalgesia.isRequest()}>

                <AnalgesiaTable patientId={patientId}/>

                <StepAction onPrev={prevStep}
                            onNext={save}/>

            </ModuleLoading>
        </div>
    );

};

AnalgesiaData.propTypes = {
    match: PropTypes.object
};

export default AnalgesiaData;
