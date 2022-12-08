/**
 * @file AddPatientDialog.js
 */

import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindModelActionCreators} from 'vivy';

// Components
import {Form, Row, Col} from 'antd';
import ModuleModal from 'components/ModuleModal';
import TextField from 'customized/MaterialTextField';
import DropdownSelect from 'customized/MaterialDropdownSelect';
import FieldSet from 'components/FieldSet';
import FieldSetTitle from 'components/FieldSetTitle';
import ModuleInput from 'components/ModuleInput';
import Msg from 'components/Msg';

// Vendors
import {formatString} from 'vendors/Util';

// Styles
import './AddPatientDialog.scss';

const AddPatientDialog = ({
    groupList, formValue,
    updatePatientBaseInfoField
}) => {

    const [form] = Form.useForm();

    /**
     * 更新值
     * @type {Function}
     */
    const updateField = useCallback((fieldName, fieldValue) => {
        updatePatientBaseInfoField?.({
            fieldName,
            fieldValue
        });
    }, [
        updatePatientBaseInfoField
    ]);

    return (
        <Form form={form}
              layout="vertical"
              initialValues={formValue}>

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

                    </Form.Item>
                </Col>
            </Row>


            {/* <FieldSet title="1. Patient Basic Information"> */}
            {/*     <div className="row"> */}
            {/*         <TextField className="col-6" */}
            {/*                    label="ID" */}
            {/*                    value={formatString(form.id)} */}
            {/*                    required={true} */}
            {/*                    onChange={value => updateField('id', value)}/> */}
            {/*         <TextField className="col-6" */}
            {/*                    label="Name" */}
            {/*                    value={formatString(form.name)} */}
            {/*                    required={true} */}
            {/*                    onChange={value => updateField('name', value)}/> */}
            {/*     </div> */}
            {/* </FieldSet> */}

            {/* <FieldSet title="2. Select Patient Group"> */}
            {/*     <div className="row"> */}
            {/*         <DropdownSelect className="col-12" */}
            {/*                         label="Group" */}
            {/*                         data={groupList} */}
            {/*                         valueField="id" */}
            {/*                         displayField="name" */}
            {/*                         value={form.group} */}
            {/*                         required={true} */}
            {/*                         onChange={value => updateField('group', value)}/> */}
            {/*     </div> */}
            {/* </FieldSet> */}

        </Form>
    );

};

AddPatientDialog.propTypes = {

    groupList: PropTypes.array,
    formValue: PropTypes.object,

    pushRoute: PropTypes.func,
    updatePatientBaseInfoField: PropTypes.func,
    createPatient: PropTypes.func,
    onRequestClose: PropTypes.func

};

export default connect(state => ({
    groupList: state.patientGroup.list,
    formValue: state.patientBaseInfo.form
}), dispatch => bindModelActionCreators({
    pushRoute: 'route/push',
    updatePatientBaseInfoField: 'patientBaseInfo/updatePatientBaseInfoField',
    createPatient: 'patientBaseInfo/createPatient'
}, dispatch))(AddPatientDialog);
