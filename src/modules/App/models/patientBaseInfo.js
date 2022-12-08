/**
 * @file patientBaseInfo.js
 */

// Apis
import {createPatient} from 'modules/App/apis/PatientApi';

/**
 * 默认的表单数据
 * @type {{}}
 */
const DEFAULT_FORM = {
    group: null,
    id: '',
    name: ''
};

export default {
    nameSpace: 'patientBaseInfo',
    state: {
        formValue: {...DEFAULT_FORM}
    },
    apis: {

        /**
         * 创建 patient
         * @param callback
         * @returns {function(*, *, *): *}
         */
        createPatient: ({callback}) => (dispatchApi, dispatch, getState) => {

            const data = getState().patientBaseInfo.formValue;

            if (!data.id || !data.name || !data.group) {
                return;
            }

            dispatchApi({
                api: createPatient,
                params: {
                    id: data.id,
                    name: data.name,
                    groupId: data.group.id
                },
                successCallback() {
                    dispatch({
                        type: 'patients/getPatients'
                    });
                    callback?.();
                }
            });

        }

    },
    reducers: {

        /**
         * 重置 Patient 基础信息
         * @param state
         * @returns {*&{form: {}}}
         */
        resetPatientBaseInfo: state => {
            return {
                ...state,
                formValue: {...DEFAULT_FORM}
            };
        },

        /**
         * 更新 Patient 基础信息
         * @param state
         * @param formValue
         * @returns {*&{formValue}}
         */
        updatePatientBaseInfo: (state, {formValue}) => {
            return {
                ...state,
                formValue
            };
        }

    }
};
