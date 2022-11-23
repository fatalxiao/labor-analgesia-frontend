/**
 * @file Root.js
 */

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindModelActionCreators} from 'vivy';

// Ant Design
import {ConfigProvider} from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';

// Dayjs
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';

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
    route, location,
    language, toasts, notifications,
    clearToasts, clearNotifications
}) => {

    /**
     * 初始化 dayjs locale
     */
    useEffect(() => {
        dayjs.locale(language === 'zh-CN' ? 'zh-cn' : 'en');
    }, [
        language
    ]);

    return (
        <ConfigProvider className="root"
                        locale={language === 'zh-CN' ? zhCN : enUS}>

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

        </ConfigProvider>
    );

};

Root.propTypes = {

    route: PropTypes.object,
    location: PropTypes.object,

    language: PropTypes.string,
    toasts: PropTypes.array,
    notifications: PropTypes.array,

    clearToasts: PropTypes.func,
    clearNotifications: PropTypes.func

};

export default connect(state => ({
    language: state.i18n.language,
    toasts: state.toasts,
    notifications: state.notifications
}), dispatch => bindModelActionCreators({
    clearToasts: 'toasts/clearToasts',
    clearNotifications: 'notifications/clearNotifications'
}, dispatch))(Root);
