/**
 * @file AddPatientDialog.js
 */

import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindModelActionCreators} from 'vivy';

// Components
import ModuleModal from 'components/ModuleModal';
import TextField from 'customized/MaterialTextField';
import DropdownSelect from 'customized/MaterialDropdownSelect';
import FieldSet from 'components/FieldSet';
import Msg from 'components/Msg';
import AddPatientForm from './AddPatientForm';

// Vendors
import {formatString} from 'vendors/Util';

// Styles
import './AddPatientDialog.scss';

const AddPatientDialog = ({
    form, visible,
    pushRoute, createPatient, onRequestClose
}) => {

    /**
     * 当前 form 的错误消息
     */
    const [errorMsg, setErrorMsg] = useState('');

    /**
     * 提交新值到后端
     * @type {Function}
     */
    const save = useCallback(() => {

        const error = [];

        // 校验值
        if (!form.id) {
            error.push('ID');
        }
        if (!form.name) {
            error.push('Name');
        }
        if (!form.group) {
            error.push('Group');
        }

        // 如果有 error 中断提交
        if (error.length > 0) {
            setErrorMsg(`${error.join(', ')} is required!`);
            return;
        }

        createPatient?.({
            callback: () => {
                onRequestClose();
                pushRoute?.({
                    route: `/app/patient/info/${form.id}`
                });
            }
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

            <AddPatientForm/>

            {/* { */}
            {/*     errorMsg && ( */}
            {/*         <Msg type={Msg.Type.ERROR}> */}
            {/*             {errorMsg} */}
            {/*         </Msg> */}
            {/*     ) */}
            {/* } */}

        </ModuleModal>
    );

};

AddPatientDialog.propTypes = {

    groupList: PropTypes.array,
    form: PropTypes.object,

    visible: PropTypes.bool,

    pushRoute: PropTypes.func,
    createPatient: PropTypes.func,
    onRequestClose: PropTypes.func

};

export default connect(state => ({
    groupList: state.patientGroup.list,
    form: state.patientBaseInfo.form
}), dispatch => bindModelActionCreators({
    pushRoute: 'route/push',
    createPatient: 'patientBaseInfo/createPatient'
}, dispatch))(AddPatientDialog);
