import axios from 'axios';
import { API_NOTIFICATION_MESSAGES } from '../constants/config';
import { SERVICE_URLS } from '../constants/config';
import { getAccessToken, getType } from '../utils/common-utils';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        //Stop loader here if exists
        return processResponse(response);
    },
    function (error) {
        //Stop loader here if exists
        return Promise.reject(processError(error));
    }
)

const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data }
    } else {
        return { isFailure: true, status: response?.status, msg: response?.msg, code: response?.code }
    }
}

const processError = (error) => {
    if (error.response) {
        console.log('Error in Response: ', error.toJSON());
        return {
            isError: true,
            msg : API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status,
        }
    } else if (error.request) {
        console.log('Error in Request: ', error.toJSON());
        return {
            isError: true,
            msg : API_NOTIFICATION_MESSAGES.requestFailure,
            code: "",
        }        
    }
    else {
        console.log('Error in Network: ', error.toJSON());
        return {
            isError: true,
            msg : API_NOTIFICATION_MESSAGES.networkError,
            code: "",
        }        
    }
}

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? '' : body,
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken(),
            },
            TYPE: getType(value, body),
            onUploadProgress: function(progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: function(progressEvent) {
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted);
                }
            }
        });
}

export { API };
