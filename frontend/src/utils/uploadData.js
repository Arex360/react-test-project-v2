import axios from 'axios'

export const SaveRecord =(url, body) => {
	axios.post(`/api/${url}`,body)

}
