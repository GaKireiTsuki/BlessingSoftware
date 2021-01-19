import axios from 'axios'

//创建axios实例
var instance = axios.create({
    timeout: 1000 * 12,
    withCredentials: false
})

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

instance.interceptors.request.use(config => {
    //在发送请求之前先做点事
    return config;
},error => {
    //发生请求错误
    return Promise.reject(error);
});

instance.interceptors.response.use(
    //在发送响应之前先做点事
    /* if (response.data.code == 200) {
        return response.data;
    } else {
        return Promise.reject(response)
    } */
    response => response.status === 200 ? Promise.resolve(response.data) : Promise.reject(response)
,error => {
    //做一些响应错误
    const { response } = error
    if (response) {
        errorHandler(response.status, response.data.message)
        return Promise.reject(response);
    } else {
        return Promise.reject(error);
    }
});

const errorHandler = (status, other) => {
    //处理错误
    switch (status) {
        case 401:
            break;

        case 403:
            break;

        case 404:
            break;

        default:
            console.log(other)
    }
}

export default instance