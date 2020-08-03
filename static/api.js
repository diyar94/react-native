import axios from 'axios';

export const restInit = () =>
{
    axios.interceptors.request.use(function (config)
    {
        //console.log(config)
        config.headers.Authorization = `Basic `;
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
