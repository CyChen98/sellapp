import axios from 'axios'

let req = axios.create({
    baseURL: 'http://192.168.1.5:3000',
    timeout: 10000
})

export function getSeller(){
    return req.get('/api/seller')
}
export function getGoods(){
    return req.get('/api/goods')
}
export function Ratings(){
    return req.get('/api/ratings')
}