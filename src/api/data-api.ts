import axios from 'axios';

export default async function getData(){
    const res = await axios.get('http://localhost:5000/data')
    const {data} = res
    return data
}


