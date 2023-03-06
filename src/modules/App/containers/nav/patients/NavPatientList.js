/**
 * @file NavPatientList.js
 */

import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useModelState} from 'react-vivy';

// Components
import NavPatientListItem from './NavPatientListItem';

// Vendors
import Event from 'vendors/Event';

// Styles
import './NavPatientList.scss';

const NavPatientList = ({
    data
}) => {

    const {list} = useModelState('patients');

    /**
     * 列表的数据
     */
    const listData = useMemo(() => {
        return data || list;
    }, [
        data, list
    ]);

    return (
        <div className="nav-patient-list"
             onWheel={Event.preventContainerScroll}>
            {
                listData?.map((patient, index) =>
                    <NavPatientListItem key={index}
                                        patient={patient}/>
                )
            }
        </div>
    );

};

NavPatientList.propTypes = {
    data: PropTypes.array
};

export default NavPatientList;
