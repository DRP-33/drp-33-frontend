import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://drp-33.herokuapp.com',
    headers: {
        //"Access-Control-Allow-Origin": "*"
    }
});

const api = {
    getTask: () =>
    instance({
        'method':'GET',
        'url': '/tasks/'
    }),
    acceptTask: (data) =>
    instance({
        'method': 'post',
        'url': '/task_a/',
        'data': data
    }),
    login: (data) =>
    instance({
        'method': 'post',
        'url': '/api-token-auth/',
        'data': data
    })
}

export default api;