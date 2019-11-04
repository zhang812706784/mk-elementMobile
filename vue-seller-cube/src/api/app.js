import server from '@/util/request.js';
export function seller(){
    return server({
        method:'get',
        url: '/api/seller'
    })
}
export function goods(){
    return server({
        method:'get',
        url: '/api/goods'
    })
}
export function ratings(){
    return server({
        method:'get',
        url: '/api/ratings'
    })
}