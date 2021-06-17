import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://drp-33.herokuapp.com',
    headers: {
    }
});

const api = {
    getTask: (token) =>
    instance({
        'method':'GET',
        'url': '/tasks/',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }
    }),
    acceptTask: (data, token) =>
    instance({
        'method': 'post',
        'url': '/task_a/',
        'data': data,
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }
    }),
    login: (data) =>
    instance({
        'method': 'post',
        'url': '/auth/token/login/',
        'data': data,
        'headers': {
            'Content-Type': 'multipart/form-data'
        }
    }),
    signup: (data) =>
    instance({
        'method': 'post',
        'url': '/user_c/',
        'data': data,
        'headers': {
            'Content-Type': 'multipart/form-data'
        }
    }),
    addTask: (data, token) => 
    instance({
        'method': 'post',
        'url': '/task_c/',
        'data': data,
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }
    })
}

export default api;