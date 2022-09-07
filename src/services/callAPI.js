import axios from 'axios'

export const getData = ()=>{
    return axios({
        method: 'get',
        url: 'https://run.mocky.io/v3/25c6bdb6-6377-41f9-907d-c6549ce9e4f7'
    })
        .then((response)=> {
            return response.data
        })
        .catch((err)=>{
            return err
        })
}