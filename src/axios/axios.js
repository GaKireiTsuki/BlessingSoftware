import axios from 'axios'
import { Loading } from 'element-ui'

let loadingInstance;

axios.interceptors.request.use(config => {
    // Do something before request is sent
    loadingInstance = Loading.service({ //加载loading
        lock: true,
        fullscreen: true,
        text: 'Loading...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    return config;
    },error => {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // Do something before response is sent
    loadingInstance.close();//关闭loading
    if(response.data.code=="200"){
        return response.data;
    }else{
        return Promise.reject(response.data);
    }
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