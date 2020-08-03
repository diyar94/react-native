import axios from 'axios';

export const restInit = () =>
{
    axios.interceptors.request.use(function (config)
    {
        //console.log(config)
        config.headers.Authorization = `Basic ZGl5YXJvc21hbm92OTRAZ21haWwuY29tOk1hY29vYm90YW4xOTk0QG1haWwucnU=`;
        return config;
    }, function (error)
    {
        console.error(error);
        // Do something with request error
        return Promise.reject(error);
    });
};


export const url = 'https://reactnative.zendesk.com/api/v2';


export const API_ENDPOINTS = {
    TICKETS: '/tickets.json',
    TICKET: '/tickets/'
};