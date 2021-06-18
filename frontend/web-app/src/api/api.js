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
    getOneTask: (data, token) =>
    instance({
        'method':'post',
        'url': '/task/',
        'data': data,
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
    }),
    myTasks: (token) => 
    instance({
        'method': 'get',
        'url': '/my_tasks/',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }
    }),
    acceptedTasks: (token) => 
    instance({
        'method': 'get',
        'url': '/accepted_tasks/',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }
    }),
    cancelTask: (data, token) =>
    instance({
        'method': 'post',
        'url': '/task/cancel/',
        'data': data,
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }
    }),
    getUser: (data, token) =>
    instance({
        'method': 'post',
        'url': '/user/',
        'data': data,
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }
    }),
    giveRating: (data, token) =>
    instance({
        'method': 'post',
        'url': '/raiting_g/',
        'data': data,
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }
    })
}

export default api;