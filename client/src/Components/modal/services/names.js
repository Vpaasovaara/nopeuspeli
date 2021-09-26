import axios from 'axios'
const baseUrl = '/api/names'


const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}
const create = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

export default {
    getAll,
    create
}