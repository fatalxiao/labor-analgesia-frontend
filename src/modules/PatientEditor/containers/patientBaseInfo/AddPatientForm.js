/**
 * @file AddPatientForm.js
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindModelActionCreators} from 'vivy';

// Components
import {Form, Col} from 'antd';
import ModuleForm from 'components/ModuleForm';
import FieldSetTitle from 'components/FieldSetTitle';
import ModuleRow from 'components/ModuleRow';
import ModuleInput from 'components/ModuleInput';
import ModuleSelect from 'components/ModuleSelect';

const AddPatientForm = ({
    form, groupList, formValue,
    updatePatientBaseInfo
}) => {

    /**
     * 更新值
     * @type {Function}
     */
    const handleValuesChange = useCallback((changedValues, allValues) => {
        updatePatientBaseInfo?.({
            formValue: allValues
        });
    }, [
        updatePatientBaseInfo
    ]);

    return (
        <ModuleForm form={form}
                    layout="vertical"
                    initialValues={formValue}
                    onValuesChange={handleValuesChange}>

            <FieldSetTitle>
                1. Patient Basic Information
            </FieldSetTitle>
            <ModuleRow gutter={{
                xs: 8,
                sm: 16,
                md: 24
            }}>
                <Col span={12}>
                    <Form.Item label="ID"
                               name="id"
                               required
                               rules={[{
                                   required: true,
                                   message: 'Please input ID!'
                               }]}>
                        <ModuleInput/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Name"
                               name="name"
                               required
                               rules={[{
                                   required: true,
                                   message: 'Please input name!'
                               }]}>
                        <ModuleInput/>
                    </Form.Item>
                </Col>
            </ModuleRow>

            <FieldSetTitle>
                2. Select Patient Group
            </FieldSetTitle>
            <ModuleRow>
                <Col span={24}>
                    <Form.Item label="Group"
                               name="group"
                               required
                               rules={[{
                                   required: true,
                                   message: 'Please select group!'
                               }]}>
                        <ModuleSelect options={groupList}
                                      fieldNames={{
                                          label: 'name',
                                          value: 'id',
                                          options: 'options'
                                      }}/>
                    </Form.Item>
                </Col>
            </ModuleRow>

        </ModuleForm>
    );

};

AddPatientForm.propTypes = {

    form: PropTypes.object,

    groupList: PropTypes.array,
    formValue: PropTypes.object,

    pushRoute: PropTypes.func,
    updatePatientBaseInfo: PropTypes.func,
    createPatient: PropTypes.func,
    onRequestClose: PropTypes.func

};

export default connect(state => ({
    groupList: state.patientGroup.list,
    formValue: state.patientBaseInfo.form
}), dispatch => bindModelActionCreators({
    pushRoute: 'route/push',
    updatePatientBaseInfo: 'patientBaseInfo/updatePatientBaseInfo',
    createPatient: 'patientBaseInfo/createPatient'
}, dispatch))(AddPatientForm);
