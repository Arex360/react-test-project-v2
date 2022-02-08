import axios from 'axios'

export const SaveRecord =(url, body) => {
	axios.post(`http://localhost:5000/api/${url}`,body)

}
