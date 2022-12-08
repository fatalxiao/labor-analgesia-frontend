/**
 * @file PatientListFilterForm.js
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

// Components
import {Form} from 'antd';
import ModuleSelect from 'components/ModuleSelect';
import ModuleSearch from 'components/ModuleSearch';

// Styles
import './PatientListFilterForm.scss';

const PatientListFilterForm = ({
    filterValue, groupList, statusList,
    onFilterChange
}) => {

    /**
     * 处理 filter form 值变更
     * @type {(function(*, *): void)|*}
     */
    const handleValuesChange = useCallback((changedValues, allValues) => {
        onFilterChange?.(allValues);
    }, [
        onFilterChange
    ]);

    return (
        <Form className="patient-filter-form"
              initialValues={filterValue}
              onValuesChange={handleValuesChange}>
            <Form.Item name="group">
                <ModuleSelect options={groupList}/>
            </Form.Item>
            <Form.Item name="status">
                <ModuleSelect options={statusList}/>
            </Form.Item>
            <Form.Item name="search">
                <ModuleSearch placeholder="Search"/>
            </Form.Item>
        </Form>
    );

};

PatientListFilterForm.propTypes = {

    filterValue: PropTypes.shape({
        group: PropTypes.number,
        status: PropTypes.number,
        search: PropTypes.string
    }),
    groupList: PropTypes.array,
    statusList: PropTypes.array,

    onFilterChange: PropTypes.func

};

export default PatientListFilterForm;
