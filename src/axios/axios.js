import axios from 'axios'

axios.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
    },error => {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // Do something before response is sent
    return response;
    },error => {
    // Do something with response error
    const {response} = error
    if (response) {
        switch (response.status) {
            case 401:
                break
            case 403:
                break
            case 404:
                break
        }
    } else {
        if (!window.Navigator.onLine) {
            return
        }
    }
    return Promise.reject(error);
});

export default function (url, {
    method = 'post',
    baseURL = 'https://autumnfish.cn',
    timeout = 5000,
}) {
    const config = {
        method: method,
        timeout: timeout,
        url: url,
        baseURL: baseURL,
    }
    return axios (config)
}