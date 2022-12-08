/**
 * @file AddPatientForm.js
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindModelActionCreators} from 'vivy';

// Components
import {Form, Row, Col} from 'antd';
import ModuleForm from 'components/ModuleForm';
import FieldSetTitle from 'components/FieldSetTitle';
import ModuleInput from 'components/ModuleInput';
import ModuleSelect from 'components/ModuleSelect';

const AddPatientForm = ({
    groupList, formValue,
    updatePatientBaseInfo
}) => {

    /**
     * form
     */
    const [form] = Form.useForm();

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
            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24
            }}>
                <Col span={12}>
                    <Form.Item label="ID"
                               name="id"
                               required>
                        <ModuleInput/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Name"
                               name="name"
                               required>
                        <ModuleInput/>
                    </Form.Item>
                </Col>
            </Row>

            <FieldSetTitle>
                2. Select Patient Group
            </FieldSetTitle>
            <Row>
                <Col span={24}>
                    <Form.Item label="Group"
                               name="group">
                        <ModuleSelect options={groupList}
                                      fieldNames={{
                                          label: 'name',
                                          value: 'id',
                                          options: 'options'
                                      }}/>
                    </Form.Item>
                </Col>
            </Row>

        </ModuleForm>
    );

};

AddPatientForm.propTypes = {

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
