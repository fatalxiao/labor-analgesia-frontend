/**
 * @file Root.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import {useModel} from 'react-vivy';

// Components
import {Redirect} from 'react-router-dom';
import Toaster from 'alcedo-ui/Toaster';
import Notifier from 'alcedo-ui/Notifier';

// Statics
import {DEFAULT_ROUTE} from 'src/config.route';

// Vendors
import {renderRoutes} from 'react-router-config';

// Styles
import './Root.scss';

const Root = ({
    route, location
}) => {

    const [toasts, {clearToasts}] = useModel('toasts');
    const [notifications, {clearNotifications}] = useModel('notifications');

    return (
        <div className="root">

            <Toaster toasts={toasts}
                     position={Toaster.Position.TOP}
                     onToastPop={clearToasts}/>

            <Notifier notifications={notifications}
                      position={Notifier.Position.TOP_RIGHT}
                      onNotificationPop={clearNotifications}
                      duration={8000}/>

            {renderRoutes(route.routes)}

            {
                location.pathname === '/' && (
                    <Redirect from="/" to={DEFAULT_ROUTE}/>
                )
            }

        </div>
    );

};

Root.propTypes = {
    route: PropTypes.object,
    location: PropTypes.object
};

export default Root;
