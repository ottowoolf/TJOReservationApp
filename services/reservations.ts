import axios from 'axios';

export function search(term: string) {
    return axios.get(`https://jpetersen.azurewebsites.net/api/v1/member/${term}/reservations`)
    .then(res => res.data)
    .catch(error => console.error(error));

}