/**
 * @file PatientListFilter.js
 */

import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindModelActionCreators} from 'vivy';

// Components
import {PlusOutlined} from '@ant-design/icons';
import AddPatientDialog from 'modules/PatientEditor/containers/patientBaseInfo/AddPatientDialog';
import ModuleButton from 'components/ModuleButton';
import PatientListFilterForm from './PatientListFilterForm';

// Styles
import './PatientListFilter.scss';

const PatientListFilter = ({
    filterValue, groupList, statusList,
    resetPatientBaseInfo, onFilterChange
}) => {

    /**
     * add patient dialog 是否显示的标志
     */
    const [addPatientDialogVisible, setAddPatientDialogVisible] = useState(false);

    /**
     * 显示 add patient dialog
     * @type {Function}
     */
    const showAddPatientDialog = useCallback(() => {
        setAddPatientDialogVisible(true);
        resetPatientBaseInfo?.();
    }, [
        resetPatientBaseInfo
    ]);

    /**
     * 隐藏 add patient dialog
     * @type {Function}
     */
    const hideAddPatientDialog = useCallback(() => {
        setAddPatientDialogVisible(false);
    }, []);

    return (
        <div className="patient-list-filter">

            <ModuleButton className="create-patient-button"
                          type="primary"
                          icon={<PlusOutlined/>}
                          size="large"
                          onClick={showAddPatientDialog}>
                Create Patient
            </ModuleButton>

            <AddPatientDialog visible={addPatientDialogVisible}
                              onRequestClose={hideAddPatientDialog}/>

            <PatientListFilterForm filterValue={filterValue}
                                   groupList={groupList}
                                   statusList={statusList}
                                   onFilterChange={onFilterChange}/>

        </div>
    );

};

PatientListFilter.propTypes = {

    filterValue: PropTypes.shape({
        group: PropTypes.number,
        status: PropTypes.number,
        search: PropTypes.string
    }),
    groupList: PropTypes.array,
    statusList: PropTypes.array,

    resetPatientBaseInfo: PropTypes.func,
    onFilterChange: PropTypes.func

};

export default connect(undefined, dispatch => bindModelActionCreators({
    resetPatientBaseInfo: 'patientBaseInfo/resetPatientBaseInfo'
}, dispatch))(PatientListFilter);
