/**
 * @file NavPatientsPopover.js
 */

import React, {useCallback} from 'react';
import {useModelActions} from 'react-vivy';

// Components
import IconButton from 'alcedo-ui/IconButton';
import Popover from 'alcedo-ui/Popover';
import PopoverProvider from 'alcedo-ui/PopoverProvider';
import PatientList from './NavPatientList';

// Styles
import './NavPatientsPopover.scss';

const NavPatientsPopover = () => {

    const {push: pushRoute} = useModelActions('route');

    /**
     * 跳转到列表页
     * @type {function(): *}
     */
    const goToList = useCallback(() => {
        pushRoute?.({
            route: '/app/patient-list'
        });
    }, [
        pushRoute
    ]);

    return (
        <div className="nav-patients-popover-wrapper">
            <PopoverProvider className="nav-patients-popover"
                             popoverContent={
                                 <PatientList/>
                             }
                             position={Popover.Position.RIGHT_TOP}
                             hasTriangle={false}>
                <IconButton className="nav-patients-popover-item"
                            iconCls="icon-list"
                            onClick={goToList}/>
            </PopoverProvider>
        </div>
    );

};

export default NavPatientsPopover;
