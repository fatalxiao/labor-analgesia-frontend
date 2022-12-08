/**
 * @file PatientList.js
 */

import React, {useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Components
import PatientListFilter from './PatientListFilter';
import PatientListTable from './PatientListTable';
import NavNoPatient from 'modules/App/containers/nav/patients/NavNoPatient';

// Styles
import './PatientList.scss';

const PatientList = ({
    groupList, patientList
}) => {

    /**
     * id / name 文本 filter 的值
     */
    const [filterValue, setFilterValue] = useState({
        group: PatientList.ALL_GROUP.id,
        status: PatientList.ALL_STATUS.id,
        search: ''
    });

    /**
     * 最终 table 的值
     */
    const tableData = useMemo(() => {
        return patientList.filter(item => (
            filterValue?.search ?
                item?.id?.includes(filterValue.search) || item?.name?.includes(filterValue.search)
                :
                true
        ) && (
            filterValue?.group === 0 ?
                true
                :
                item?.groupId === filterValue?.group
        ) && (
            filterValue?.status === -1 ?
                true
                :
                item?.status === filterValue?.status
        ));
    }, [
        patientList, filterValue
    ]);

    return (
        <div className="patient-list">
            {
                patientList?.length > 0 ?
                    <>

                        <PatientListFilter filterValue={filterValue}
                                           groupList={[PatientList.ALL_GROUP, ...groupList]}
                                           statusList={PatientList.STATUS_LIST}
                                           onFilterChange={setFilterValue}/>

                        <PatientListTable data={tableData}/>

                    </>
                    :
                    <NavNoPatient/>
            }
        </div>
    );

};

PatientList.ALL_GROUP = {
    id: 0,
    name: 'All Groups'
};

PatientList.ALL_STATUS = {
    id: -1,
    name: 'All Status'
};

PatientList.STATUS_LIST = [PatientList.ALL_STATUS, {
    id: 1,
    name: 'Enabled'
}, {
    id: 0,
    name: 'Disabled'
}];

PatientList.propTypes = {
    groupList: PropTypes.array,
    patientList: PropTypes.array
};

export default connect(state => ({
    groupList: state.patientGroup.list,
    patientList: state.patients.list
}))(PatientList);
