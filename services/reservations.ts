import axios from 'axios';

export function search(term: string) {
    return axios.get(`https://localhost:44383/api/v1/member/${term}/reservations`)
    .then(res => res.data)
    .catch(error => console.error(error));

}