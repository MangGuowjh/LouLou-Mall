import axios from '../utils/axios'

export function getCategory () {    
    return axios.get('/categories')
}

// 修改头像
export function search (params) {
    return axios.get('/search', { params })
}