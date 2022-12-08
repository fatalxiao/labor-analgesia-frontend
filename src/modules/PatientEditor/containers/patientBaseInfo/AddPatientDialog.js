/**
 * @file AddPatientDialog.js
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindModelActionCreators} from 'vivy';

// Components
import ModuleModal from 'components/ModuleModal';
import AddPatientForm from './AddPatientForm';
import {Form} from 'antd';

const AddPatientDialog = ({
    visible,
    pushRoute, createPatient, onRequestClose
}) => {

    const [form] = Form.useForm();

    /**
     * 提交新值到后端
     * @type {Function}
     */
    const save = useCallback(() => {
        form.validateFields().then(() => {
            createPatient?.({
                callback: responseData => {
                    onRequestClose();
                    pushRoute?.({
                        route: `/app/patient/info/${responseData.id}`
                    });
                }
            });
        });
    }, [
        form,
        createPatient, onRequestClose, pushRoute
    ]);

    return (
        <ModuleModal className="add-patient-dialog"
                     open={visible}
                     title="Create Patient"
                     okText="Create"
                     width={720}
                     onOk={save}
                     onCancel={onRequestClose}>
            <AddPatientForm form={form}/>
        </ModuleModal>
    );

};

AddPatientDialog.propTypes = {

    groupList: PropTypes.array,

    visible: PropTypes.bool,

    pushRoute: PropTypes.func,
    createPatient: PropTypes.func,
    onRequestClose: PropTypes.func

};

export default connect(state => ({
    groupList: state.patientGroup.list
}), dispatch => bindModelActionCreators({
    pushRoute: 'route/push',
    createPatient: 'patientBaseInfo/createPatient'
}, dispatch))(AddPatientDialog);
