/**
 * @file AnalgesiaAppendTimePointButton.js
 */

import React from 'react';
import {useModelActions} from 'react-vivy';

// Components
import AnchorButton from 'alcedo-ui/AnchorButton';

// Styles
import './AnalgesiaAppendTimePointButton.scss';

const AnalgesiaAppendTimePointButton = () => {

    const {appendTimePoint} = useModelActions('analgesia');

    return (
        <AnchorButton className="analgesia-append-time-point-button"
                      value="Append Time Point"
                      onClick={appendTimePoint}>
            <i className="fal fa-chevron-down down-icon"/>
        </AnchorButton>
    );

};

export default AnalgesiaAppendTimePointButton;
