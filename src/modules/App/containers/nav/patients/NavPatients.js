/**
 * @file NavPatients.js
 */

import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useModel} from 'react-vivy';

// Components
import CircularLoading from 'alcedo-ui/CircularLoading';
import NavPatientCollapsed from './NavPatientsPopover';
import NoPatient from './NavNoPatient';
import PatientListWrapper from './NavPatientListWrapper';

// Vendors
import classNames from 'classnames';

// Styles
import './NavPatients.scss';

const NavPatient = ({
    isCollapsed, isFold
}) => {

    const [{list: patientList}, {getPatients}] = useModel('patients');
    const [, {getPatientGroups}] = useModel('patientGroup');

    /**
     * 是否没有 patient
     * @type {boolean}
     */
    const noPatient = useMemo(() => {
        return !patientList || patientList.length < 1;
    }, [
        patientList
    ]);

    return (
        <div className={classNames('nav-patients', {
            'no-patient': noPatient,
            collapsed: isCollapsed,
            fold: isFold
        })}>
            {
                getPatientGroups.isRequest() || getPatients.isRequest() ?
                    <CircularLoading/>
                    :
                    isCollapsed ?
                        <NavPatientCollapsed isFold={isFold}/>
                        :
                        noPatient ?
                            <NoPatient/>
                            :
                            <PatientListWrapper/>
            }
        </div>
    );

};

NavPatient.propTypes = {
    isCollapsed: PropTypes.bool,
    isFold: PropTypes.bool
};

export default NavPatient;
