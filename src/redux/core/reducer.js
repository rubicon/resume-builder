import { actionTypes } from './actionTypes';

const initialState = {
    userData: {
        name: '',
        address: '',
        email: '',
        mobile: '',
        userData: '',
        profile: '',
        infoTitle: 'Personal info',
        profileTitle: 'Profile',
        workExperienceTitle: 'Work experience',
        educationTitle: 'Education',
    },
    workExperience: [],
    education: [],
    skills: [],
    theme: {
        color: '#4CAF50',
        fontFamily: 'Source Sans Pro'
    }
}

export default function core(state = initialState, action) {
    switch (action.type) {

        case actionTypes.UPDATE_USER_DATA:
            if (!action.payload) return state;

            return {
                ...state,
                userData: {
                    ...state.userData,
                    ...action.payload,
                },
            };

        case actionTypes.UPDATE_THEME:
            if (!action.payload) return state;

            return {
                ...state,
                theme: {
                    ...state.theme,
                    ...action.payload,
                },
            };

        case actionTypes.ADD_NEW_WORK_EXPERIENCE:
            if (!action.payload) return state;    

            return {
                ...state,
                workExperience: [
                    ...state.workExperience,
                    {
                        ...action.payload
                    }
                ]
            };

        case actionTypes.UPDATE_WORK_EXPERIENCE:
            if (!action.payload) return state;

            return Object.assign({}, state, {
                workExperience: action.payload
            });

        case actionTypes.UPDATE_WORK_EXPERIENCE_DATA:
            if (!action.payload || !action.payloadId) return state;

            let newWorkExperience = JSON.parse(JSON.stringify(state.workExperience));
            const index = state.workExperience.map((itm) => { return itm.id; }).indexOf(action.payloadId);
            if (index > -1) {
                Object.keys(action.payload).forEach(function(key) {
                    newWorkExperience[index][key]= action.payload[key];
                });
            }
            return {
                ...state,
                workExperience: [
                    ...newWorkExperience
                ]
            };

        case actionTypes.DELETE_WORK_EXPERIENCE_DATA:
            if (!action.payload) return state;

            let newWkE = JSON.parse(JSON.stringify(state.workExperience));
            newWkE = state.workExperience.filter(({ id }) => id !== action.payload);
            return {
                ...state,
                workExperience: [
                    ...newWkE
                ]
            };

        case actionTypes.ADD_NEW_EDUCATION:
            if (!action.payload) return state;    

            return {
                ...state,
                education: [
                    ...state.education,
                    {
                        ...action.payload
                    }
                ]
            };

        case actionTypes.UPDATE_EDUCATION:
            if (!action.payload) return state;

            return Object.assign({}, state, {
                education: action.payload
            });

        case actionTypes.UPDATE_EDUCATION_DATA:
            if (!action.payload || !action.payloadId) return state;

            let neweducation = JSON.parse(JSON.stringify(state.education));
            const ejuIndex = state.education.map((itm) => { return itm.id; }).indexOf(action.payloadId);
            if (ejuIndex > -1) {
                Object.keys(action.payload).forEach(function(key) {
                    neweducation[ejuIndex][key]= action.payload[key];
                });
            }
            return {
                ...state,
                education: [
                    ...neweducation
                ]
            };

        case actionTypes.DELETE_EDUCATION_DATA:
            if (!action.payload) return state;

            let newE = JSON.parse(JSON.stringify(state.education));
            newE = state.education.filter(({ id }) => id !== action.payload);
            return {
                ...state,
                education: [
                    ...newE
                ]
            };
    


        default:
            return {...state}
        }
    }